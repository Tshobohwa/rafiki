"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "@/utils/supabase/actions/auth.action";
import { Home, BookOpen, GraduationCap, PlusCircle, LogOut, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

export function AppSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { state, toggleSidebar } = useSidebar();
  
  const handleSignOut = async () => {
    await signOut();
  };

  const menuItems = [
    {
      title: "Start a quiz",
      icon: PlusCircle,
      path: "/dashboard/quizzes/new",
    },
    {
      title: "Home Page",
      icon: Home,
      path: "/dashboard",
    },
    {
      title: "Quizzes",
      icon: BookOpen,
      path: "/dashboard/quizzes",
    },
    {
      title: "My Classes",
      icon: GraduationCap,
      path: "/dashboard/classes",
    },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b">
        <div className="flex items-center justify-between px-2 py-2">
          <span className="text-lg font-semibold group-data-[collapsible=icon]:hidden">
            Rafiki
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="h-8 w-8 group-data-[collapsible=icon]:mx-auto"
          >
            {state === "expanded" ? (
              <ChevronLeft className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    onClick={() => router.push(item.path)}
                    isActive={isActive}
                    variant={isActive ? "default" : "default"}
                    size="lg"
                    tooltip={item.title}
                    className={isActive ? "bg-secondary/50 hover:bg-secondary/60 ring-2 ring-secondary" : ""}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={handleSignOut}
              size="lg"
              tooltip="Logout"
            >
              <LogOut className="h-5 w-5" />
              <span className="group-data-[collapsible=icon]:hidden">Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
