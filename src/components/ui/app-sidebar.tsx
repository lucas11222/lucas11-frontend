import { ChevronUp, Home, User2, FileQuestion } from "lucide-react";
import "@/assets/Discord-Symbol-White.svg";
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
    url: "https://github.com 222",
    icon: SiGithub,
  },
  {
    title: "Discord",
    url: " https://discord.com/channels/@me/544510731186601984/",
    icon: SiDiscord,
  },
];
const projects = [
  {
    title: "Empry for now!",
    url: "/",
    icon: FileQuestion,
  },
];
export function AppSidebar() {
  return (
    <>
      <Sidebar>
        <SidebarHeader>
          <SidebarTrigger />
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

        <SidebarFooter>
          <p className="text-center text-gray-700"></p>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User2 /> Username
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  <DropdownMenuItem>
                    <a href="/settings">Account</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a type="submit" href="/api/signout">
                      Sign out
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </>
  );
}
