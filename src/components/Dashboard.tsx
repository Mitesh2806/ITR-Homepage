import React, { useState } from "react";
import { IconDashboard, IconUser, IconSettings } from "@tabler/icons-react";

interface SidebarItem {
  label: string;
  icon: React.ReactNode;
  iframeUrl?: string;
}

const sidebarItems: SidebarItem[] = [
  {
    label: "Home",
    icon: <IconDashboard size={24} />,
  },
  {
    label: "ITR Assistant",
    icon: <IconUser size={24} />,
    iframeUrl: "https://f55e-152-58-31-83.ngrok-free.app/",
  },
  {
    label: "Income Tax Calculator",
    icon: <IconSettings size={24} />,
    iframeUrl: "https://3c32-152-58-31-225.ngrok-free.app/",
  },
];

const Dashboard = () => {
  const [activeUrl, setActiveUrl] = useState<string | null>(
    sidebarItems[1].iframeUrl || null
  );
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [hideSidebar, setHideSidebar] = useState<boolean>(false);

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "sans-serif" }}>
      {!hideSidebar && (
        <nav
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            width: isHovered ? "220px" : "60px",
            background: "#333",
            color: "#fff",
            padding: "20px 10px",
            boxShadow: "2px 0 5px rgba(0,0,0,0.2)",
            transition: "width 0.3s ease-in-out",
            overflow: "hidden",
          }}
        >
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                if (item.label === "Home") {
                  setHideSidebar(true);
                  window.location.href = "/"; // Redirect to home
                } else {
                  setActiveUrl(item.iframeUrl || null);
                }
              }}
              className="sidebar-item"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                cursor: "pointer",
                borderRadius: "4px",
                marginBottom: "10px",
                transition: "background 0.2s ease-in-out",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "24px",
                  marginRight: isHovered ? "10px" : "0",
                }}
              >
                {item.icon}
              </div>
              {isHovered && <span>{item.label}</span>}
            </div>
          ))}
        </nav>
      )}

      <main style={{ flex: 1 }}>
        {activeUrl ? (
          <iframe
            src={activeUrl}
            title="Embedded App"
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        ) : (
          <h2 style={{ textAlign: "center", marginTop: "20px" }}>
            Select an option from the sidebar
          </h2>
        )}
      </main>

      <style>{`
        .sidebar-item:hover {
          background: #22C55E;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
