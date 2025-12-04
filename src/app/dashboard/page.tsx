"use client";

import React from "react";
import dynamic from "next/dynamic";
const MapView = dynamic(() => import("./MapView"), { ssr: false });



type User = {
  name: string;
  email: string;
  role: "admin" | "user";
};

const Dashboard: React.FC = () => {
  const user: User = {
    name: "Admin User",
    email: "admin.user@gov.in",
    role: "admin", // change to "user" to test UI
  };

  return (
    <div className="min-h-screen w-full bg-[#0c1a2b] text-white flex">

      {/* Sidebar */}
      <div className="w-64 bg-[#0c1a2b] p-6 border-r border-gray-700">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-12 h-12 bg-gray-500 rounded-full" />
          <div>
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-300">{user.email}</p>
          </div>
        </div>

        <nav className="space-y-2 text-gray-300">
          <div className="py-2 px-3 bg-blue-600 rounded-lg cursor-pointer">Dashboard</div>
          <div className="py-2 px-3 hover:bg-gray-700 rounded-lg cursor-pointer">Incidents</div>
          <div className="py-2 px-3 hover:bg-gray-700 rounded-lg cursor-pointer">Resources</div>
          <div className="py-2 px-3 hover:bg-gray-700 rounded-lg cursor-pointer">Reports</div>
        </nav>

        {user.role === "admin" ? (
          <button className="w-full bg-blue-600 py-2 mt-6 rounded-lg">Log New Incident</button>
        ) : (
          <button className="w-full bg-blue-600 py-2 mt-6 rounded-lg">Upload Picture</button>
        )}

        <div className="mt-6 space-y-2 text-gray-400">
          <p className="hover:text-white cursor-pointer">Settings</p>
          <p className="hover:text-white cursor-pointer">Help</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6 bg-[#0f2439]">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Disaster Overview</h1>
            <p className="text-gray-300 text-sm">Real-time situational awareness & response coordination.</p>
          </div>

          <input
            type="text"
            placeholder="Search incidents, personnel..."
            className="px-4 py-2 rounded-lg bg-gray-800 text-gray-200 w-80 outline-none"
          />
        </div>

        {/* STATS */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <Card title="Active Incidents" value="14" change="+2% in last 24h" color="green" />
          <Card title="Personnel Deployed" value="256" change="-1% in last 24h" color="red" />
          <Card title="Resources Available" value="82" change="+5% in last 24h" color="green" />
          <div className="p-4 bg-red-600 rounded-lg">
            <p className="text-sm">High-Priority Alerts</p>
            <p className="text-2xl font-bold">3</p>
            <p className="text-white text-sm">Immediate attention</p>
          </div>
        </div>

        {/* MAP + ALERTS */}
        <div className="flex gap-4 mb-6">

          <div className="flex-1 bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-400 mb-2">Incident Map</p>
            <MapView />
          </div>

          <div className="w-72 bg-gray-900 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Real-Time Alerts</h2>
            <div className="space-y-3">
              <Alert title="Wildfire near Oak Ridge" time="12 mins ago" level="Critical" />
              <Alert title="Flash Flood Warning" time="1 hr ago" level="High" />
              <Alert title="Power Outage" time="2 hrs ago" level="Medium" />
              <Alert title="Road Closure on HWY 5" time="36 mins ago" level="Low" />
            </div>
          </div>

        </div>

        {/* FEATURE SECTION */}
        <h2 className="text-xl font-semibold mb-4">Platform Capabilities</h2>
        <div className="grid grid-cols-2 gap-4">
          <FeatureCard title="Live Incident Reporting">
            <Bullet>Upload photos/videos from the field</Bullet>
            <Bullet>Auto-capture GPS location for every report</Bullet>
          </FeatureCard>

          <FeatureCard title="Volunteer Coordination Dashboard">
            <Bullet>Task assignment & routing to nearby volunteers</Bullet>
            <Bullet>Workload tracking and shift overview</Bullet>
          </FeatureCard>

          <FeatureCard title="Shelter & Resource Locator">
            <Bullet>Nearest safe shelters & open hospitals</Bullet>
            <Bullet>Food, water & medicine availability</Bullet>
          </FeatureCard>

          <FeatureCard title="Real-Time Map">
            <Bullet>Heatmaps of citizen requests</Bullet>
            <Bullet>Active rescues, blocked roads & hazards</Bullet>
          </FeatureCard>

          <FeatureCard title="Two-Way Communication">
            <Bullet>Chat between citizens, volunteers & authorities</Bullet>
            <Bullet>Broadcast announcements & safety alerts</Bullet>
          </FeatureCard>
        </div>
      </div>
    </div>
  );
};

/* SMALL COMPONENTS */
const Card = ({
  title,
  value,
  change,
  color,
}: {
  title: string;
  value: string;
  change: string;
  color: "red" | "green";
}) => (
  <div className="p-4 bg-gray-800 rounded-lg">
    <p className="text-sm text-gray-300">{title}</p>
    <p className="text-2xl font-bold">{value}</p>
    <p className={color === "green" ? "text-green-400 text-sm" : "text-red-400 text-sm"}>
      {change}
    </p>
  </div>
);

const Alert = ({ title, time, level }: { title: string; time: string; level: string }) => (
  <div
    className={`p-3 rounded-lg ${
      level === "Critical"
        ? "bg-red-600"
        : level === "High"
        ? "bg-yellow-600"
        : level === "Medium"
        ? "bg-blue-600"
        : "bg-gray-700"
    }`}
  >
    <p className="font-semibold text-sm">{title}</p>
    <p className="text-xs">{level} · {time}</p>
  </div>
);

const FeatureCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-gray-800 rounded-lg p-4">
    <h3 className="font-semibold mb-2 text-sm">{title}</h3>
    <ul className="space-y-1 text-xs text-gray-200">{children}</ul>
  </div>
);

const Bullet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex gap-2 items-start">
    <span className="mt-0.5">•</span>
    <span>{children}</span>
  </li>
);

export default Dashboard;
