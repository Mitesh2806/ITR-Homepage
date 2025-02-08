import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar"; // Adjust the import path as needed
import { IconDashboard, IconUser, IconSettings } from "@tabler/icons-react";

interface LinkItem {
  label: string;
  icon: React.ReactNode;
  iframeUrl: string;
}

const links: LinkItem[] = [
  {
    label: "Home",
    icon: <IconDashboard size={18} />,
    iframeUrl: "/",
  },
  {
    label: "ITR Assistant",
    icon: <IconUser size={18} />,
    iframeUrl: "https://f55e-152-58-31-83.ngrok-free.app/",
  },
  {
    label: "Income Tax Calculator",
    icon: <IconSettings size={18} />,
    iframeUrl: "https://3c32-152-58-31-225.ngrok-free.app/",
  },
];

const Dashboard = () => {
  // Set a default iframe URL, for example, the ITR Assistant
  const [activeUrl, setActiveUrl] = useState(links[1].iframeUrl);

  return (
    <div className="flex h-screen">
      <Sidebar>
        <SidebarBody>
          <div className="space-y-4 mt-4">
            {links.map((link) => (
              <SidebarLink
                key={link.label}
                link={{ label: link.label, icon: link.icon }}
                onClick={() => setActiveUrl(link.iframeUrl)}
              />
            ))}
          </div>
        </SidebarBody>
      </Sidebar>

      <main className="flex-1">
        <iframe
          src={activeUrl}
          title="Streamlit App"
          className="w-full h-full"
          frameBorder="0"
        />
      </main>
    </div>
  );
};

export default Dashboard;
