"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { signOut } from "@/utils/supabase/actions/auth.action";

export function AppSidebar() {
  const router = useRouter();
  
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="">Rafiki</div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="flex flex-col gap-4">
          <Button
            className="h-12 flex justify-start px-6"
            variant={"default"}
            onClick={() => router.push("/dashboard/quizzes/new")}
          >
            Start a quiz
          </Button>
          <Button
            className="h-12 flex justify-start px-6"
            variant={"default"}
            onClick={() => router.push("/dashboard/")}
          >
            Home Page
          </Button>
          <Button
            className="h-12 flex justify-start px-6"
            variant={"default"}
            onClick={() => {
              router.push("/dashboard/quizzes");
            }}
          >
            Quizzes
          </Button>
          <Button
            className="h-12 flex justify-start px-6"
            variant={"default"}
            onClick={() => {
              router.push("/dashboard/classes");
            }}
          >
            My Classes
          </Button>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <Button
          variant="outline"
          className="w-full"
          onClick={handleSignOut}
        >
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
