import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="">Rafiki</div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="flex flex-col gap-4">
          <Button className="h-12 flex justify-start px-6" variant={"default"}>
            Start a quiz
          </Button>
          <Button className="h-12 flex justify-start px-6" variant={"default"}>
            Start a quiz
          </Button>
          <Button className="h-12 flex justify-start px-6" variant={"default"}>
            Start a quiz
          </Button>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <div>Footer Content</div>
      </SidebarFooter>
    </Sidebar>
  );
}
