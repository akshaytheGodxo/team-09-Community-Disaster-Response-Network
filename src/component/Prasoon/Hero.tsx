export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gray-50">


            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center px-8 md:px-20 mt-10">
                <div className="flex-1">
                    <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-800">
                        Community Disaster
                        <span className="text-blue-600"> Response Network</span>
                    </h2>

                    <p className="mt-4 text-lg text-gray-600 max-w-xl">
                        A unified real-time platform for citizens, volunteers, NGOs and authorities
                        to collaborate during floods, earthquakes, cyclones, and other disasters.
                    </p>

                    <div className="flex gap-4 mt-6">
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
                            Get Started
                        </button>
                        <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                            Watch Demo
                        </button>
                    </div>
                </div>

            </section>

            {/* Phases */}
            <section id="phases" className="px-8 md:px-20 mt-16">
                <h3 className="text-3xl font-bold text-gray-800 text-center">
                    Disaster Management Phases
                </h3>

                <div className="grid md:grid-cols-4 gap-6 mt-10">
                    <div className="bg-white shadow rounded-xl p-6">
                        <h4 className="text-xl font-bold text-blue-600">Mitigation (20%)</h4>
                        <p className="mt-2 text-gray-600">
                            Risk mapping, hazard zones, community vulnerability analysis.
                        </p>
                    </div>

                    <div className="bg-white shadow rounded-xl p-6">
                        <h4 className="text-xl font-bold text-blue-600">Preparedness (25%)</h4>
                        <p className="mt-2 text-gray-600">
                            Early warnings, drills, training modules, readiness status.
                        </p>
                    </div>

                    <div className="bg-white shadow rounded-xl p-6">
                        <h4 className="text-xl font-bold text-blue-600">Response (40%)</h4>
                        <p className="mt-2 text-gray-600">
                            Live reporting, SOS, volunteer coordination, heatmaps.
                        </p>
                    </div>

                    <div className="bg-white shadow rounded-xl p-6">
                        <h4 className="text-xl font-bold text-blue-600">Recovery (15%)</h4>
                        <p className="mt-2 text-gray-600">
                            Damage assessment, relief tracking, rehabilitation.
                        </p>
                    </div>
                </div>
            </section>

            {/* User Roles */}
            <section id="roles" className="px-8 md:px-20 mt-20">
                <h3 className="text-3xl font-bold text-gray-800 text-center">Users We Empower</h3>

                <div className="grid md:grid-cols-4 gap-6 mt-10">
                    <div className="bg-white shadow rounded-xl p-6">
                        <h4 className="text-xl font-bold text-blue-600">Citizens</h4>
                        <p className="mt-2 text-gray-600">
                            Report incidents, SOS, shelter finder, real-time alerts.
                        </p>
                    </div>

                    <div className="bg-white shadow rounded-xl p-6">
                        <h4 className="text-xl font-bold text-blue-600">Volunteers</h4>
                        <p className="mt-2 text-gray-600">
                            Task assignment, resource distribution, rescue updates.
                        </p>
                    </div>

                    <div className="bg-white shadow rounded-xl p-6">
                        <h4 className="text-xl font-bold text-blue-600">Authorities</h4>
                        <p className="mt-2 text-gray-600">
                            Heatmaps, warnings, resource allocation, team tracking.
                        </p>
                    </div>

                    <div className="bg-white shadow rounded-xl p-6">
                        <h4 className="text-xl font-bold text-blue-600">NGOs</h4>
                        <p className="mt-2 text-gray-600">
                            Donation mgmt, relief operations, volunteer requests.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="mt-20 bg-gray-900 text-white py-10 px-8 md:px-20">
                <div className="flex flex-col md:flex-row justify-between">
                    <div>
                        <h3 className="text-2xl font-bold">CDRN</h3>
                        <p className="mt-3 text-gray-300 max-w-sm">
                            Strengthening community resilience through real-time collaboration.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-2">Contact Us</h4>
                        <p className="text-gray-300">team@cdrn.org</p>
                        <p className="text-gray-300">+91 98765 43210</p>
                    </div>
                </div>

                <p className="text-center mt-10 text-gray-400">
                    © {new Date().getFullYear()} CDRN. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
