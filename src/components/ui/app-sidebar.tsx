import { ChevronUp, Home, User2, FileQuestion, Bookmark, Zap, Keyboard, Terminal } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SiGithub, SiDiscord } from "@icons-pack/react-simple-icons";
const isEnabled = true;
const helloworld = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
];

const socials = [
  {
    title: "Github",
    url: "https://github.com/lucas11222",
    icon: SiGithub,
  },
  {
    title: "Discord",
    url: "/discord",
    icon: SiDiscord,
  },
];
const projects = [
  {
    title: "Lucas11 Multi-Bookmarket",
    url: "/projects/lucas11multitool",
    icon: Bookmark,
  },
  {
    title: "Lucas11's Dev Board",
    url: "/projects/devboard",
    icon: Zap,
  },
  {
    title: "Lucas11's GeometryPad",
    url: "/projects/geometrypad",
    icon: Keyboard,
  },
  {
    title: "Lucas11's Keychain",
    url: "/projects/keychain",
    icon: Terminal,
  },
];
export function AppSidebar() {
  return (
    <>
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem className="flex flex-row justify-center">
              <img
                src="/logo.svg"
                width={120}
                height={120}
                alt="Author avatar"
              />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Hello world!</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {helloworld.map((helloworld) => (
                  <SidebarMenuItem key={helloworld.title}>
                    <SidebarMenuButton asChild>
                      <a href={helloworld.url}>
                        <helloworld.icon />
                        <span>{helloworld.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Socials</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {socials.map((socials) => (
                  <SidebarMenuItem key={socials.title}>
                    <SidebarMenuButton asChild>
                      <a href={socials.url}>
                        <socials.icon />
                        <span>{socials.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {projects.map((projects) => (
                  <SidebarMenuItem key={projects.title}>
                    <SidebarMenuButton asChild>
                      <a href={projects.url}>
                        <projects.icon />
                        <span>{projects.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>
  );
}
