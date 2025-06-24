import { ChevronUp, Home, User2, FileQuestion, Anchor, Bookmark, Bot, Book, Zap, Keyboard, Terminal } from "lucide-react";
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
  {
    title: "CDN",
    url: "/cdn",
    icon: Anchor,
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
    title: "Index",
    url: "/projects",
    icon: Book,
  },
  {
    title: "Lucas11 Multi-Bookmarket",
    url: "/projects/lucas11multitool",
    icon: Bookmark,
  },
  {
    title: "Lucas11's Dev Board",
    url: "/projects/devboard",
    icon: Terminal,
  },
  {
    title: "Lucas12",
    url: "/projects/lucas12",
    icon: Bot,
  },
  {
    title: "Lucas11's GeometryPad",
    url: "/projects/geometrypad",
    icon: Keyboard,
  },
  {
    title: "Lucas11's Keychain",
    url: "/projects/keychain",
    icon: Keyboard,
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
          <SidebarMenu>
            <SidebarMenuItem className="flex flex-row justify-center">
            <a href="https://lucas11.dev/"> <img
                src="/button.png"
                width={120}
                height={60}
                alt="ad button"
              /></a>
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
