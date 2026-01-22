import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      Hello from Dashboard
      {children}
    </div>
  );
}
