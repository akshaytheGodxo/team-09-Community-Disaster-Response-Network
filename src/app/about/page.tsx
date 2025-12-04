"use client";
import { useState } from "react";

export default function Page() {
    const [theme, setTheme] = useState("light");
    const isDark = theme === "dark";

    return (
        <div
            className={`min-h-screen p-6 flex justify-center transition-all duration-300 ${
                isDark ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-800"
            }`}
        >
            <div
                className={`max-w-3xl w-full p-10 rounded-2xl shadow-xl transition-all duration-300 ${
                    isDark ? "bg-gray-800" : "bg-white"
                }`}
            >
                {/* Theme Toggle */}
                <div className="flex justify-end mb-6">
                    <button
                        onClick={() => setTheme(isDark ? "light" : "dark")}
                        className={`px-4 py-2 rounded-lg font-semibold transition ${
                            isDark
                                ? "bg-gray-700 hover:bg-gray-600 text-white"
                                : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    >
                        {isDark ? "Switch to Light" : "Switch to Dark"}
                    </button>
                </div>

                {/* Title */}
                <h1 className="text-4xl font-bold mb-4">
                    About Community Disaster Response Network (CDRN)
                </h1>

                {/* Intro */}
                <p className="leading-relaxed mb-6">
                    The <strong>Community Disaster Response Network (CDRN)</strong> is a unified
                    digital platform designed to help communities prepare for, respond to, and
                    recover from disasters. Whether it's floods, earthquakes, cyclones, landslides,
                    or wildfires, CDRN brings citizens, volunteers, NGOs, and authorities together
                    on one real-time coordination system.
                </p>

                {/* Purpose */}
                <h2 className="text-2xl font-semibold mb-3">Our Purpose</h2>
                <p className="leading-relaxed mb-6">
                    During disasters, communication becomes scattered, slow, and unreliable.
                    CDRN solves this by providing a centralized, real-time platform that enhances
                    community awareness, strengthens coordination, and accelerates emergency
                    response—ultimately reducing loss of life and damage.
                </p>

                {/* Disaster Management Phases */}
                <h2 className="text-2xl font-semibold mb-3">
                    Disaster Management Coverage
                </h2>

                <p className="leading-relaxed mb-4">
                    CDRN is built according to four official phases of disaster management:
                </p>

                <ul className="space-y-4 mb-6">
                    <li>
                        <strong>🛑 Mitigation (20%)</strong>
                        <p className="text-gray-400">
                            Hazard mapping, vulnerability analysis, and awareness materials to help
                            communities identify and reduce risks before disasters strike.
                        </p>
                    </li>
                    <li>
                        <strong>⚠️ Preparedness (25%)</strong>
                        <p className="text-gray-400">
                            Early warnings, training modules, checklists, and volunteer readiness
                            ensure individuals and teams are prepared for emergencies.
                        </p>
                    </li>
                    <li>
                        <strong>🚨 Response (40%) – The Core Focus</strong>
                        <p className="text-gray-400">
                            Real-time incident reporting, SOS alerts, volunteer coordination,
                            rescue task assignment, shelter tracking, and two-way communication—
                            enabling fast and coordinated action when it matters most.
                        </p>
                    </li>
                    <li>
                        <strong>🛠 Recovery (15%)</strong>
                        <p className="text-gray-400">
                            Post-disaster assessments, relief distribution tracking, and
                            rehabilitation monitoring help communities rebuild.
                        </p>
                    </li>
                </ul>

                {/* Key Features */}
                <h2 className="text-2xl font-semibold mb-3">Key Capabilities</h2>

                <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>Real-time alerts and verified government advisories</li>
                    <li>Citizen incident reporting with photos, videos & GPS</li>
                    <li>Volunteer identity verification and task assignment</li>
                    <li>Live map: shelters, blocked roads, active rescues</li>
                    <li>NGO support: donations, relief coordination, resource tracking</li>
                    <li>Community two-way communication channels</li>
                    <li>Recovery workflows: damage surveys & compensation documents</li>
                </ul>

                {/* Mission */}
                <h2 className="text-2xl font-semibold mt-8 mb-3">Our Mission</h2>
                <p className="leading-relaxed">
                    The mission of CDRN is simple: <strong>empower communities</strong> with a modern,
                    intelligent system that makes disaster management faster, more organized, and
                    more effective. Through technology, we aim to save lives, reduce chaos, and
                    strengthen community resilience.
                </p>
            </div>
        </div>
    );
}
