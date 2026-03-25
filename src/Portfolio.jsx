export default function RifatPortfolio() {
    const experience = [
        {
            role: "Digital Marketing Analyst",
            company: "Royalty Motor Group",
            location: "Glenorchy, Tasmania",
            period: "May 2025 – Aug 2025",
            points: [
                "Managed social media growth and digital reach.",
                "Improved the main website and built two additional websites.",
                "Ran Google, social, and email campaigns with SEO/SEM optimisation.",
                "Built KPI and ROI dashboards and reported insights to leadership.",
            ],
        },
        {
            role: "Software Engineer & Proposal Writer",
            company: "Technuf LLC",
            location: "Maryland, USA",
            period: "Aug 2024 – Jan 2025",
            points: [
                "Built AI-based internal tools to improve office workflows.",
                "Developed chatbot systems and AI-powered search using embeddings.",
                "Created executive reports and interactive operational dashboards.",
                "Worked on RFIs, RFQs, and innovation-focused technical content.",
            ],
        },
        {
            role: "Content Writer Intern",
            company: "Webase Solutions",
            location: "Dhaka, Bangladesh",
            period: "Oct 2023 – Dec 2023",
            points: [
                "Wrote website and blog content.",
                "Supported social media strategy across projects.",
            ],
        },
        {
            role: "Digital Content Writer",
            company: "Gameriv.com",
            location: "Dhaka, Bangladesh",
            period: "Jun 2020 – Jan 2022",
            points: [
                "Published 400+ SEO-focused articles.",
                "Covered gaming and esports news with strong digital reach.",
            ],
        },
    ];

    const skillGroups = [
        {
            title: "Digital Marketing",
            items: ["SEO", "SEM", "Content Marketing", "Email Marketing", "Google Analytics", "Social Media", "Keyword Research", "Technical Writing"],
        },
        {
            title: "Development & AI",
            items: ["Python", "SQL", "JavaScript", "PHP", "Laravel", "WordPress", "LLaMA", "LangChain", "FAISS", "ChromaDB", "Docker", "Kubernetes"],
        },
        {
            title: "Media",
            items: ["Premiere Pro", "Photoshop", "Lightroom", "Short-form Video", "Drone Videography"],
        },
    ];

    const projects = [
        "Business websites including vpgesports.com and bigboytowing.com",
        "AI-based tools and chatbot systems for workflow efficiency",
        "Executive dashboards and data reporting tools",
        "Promotional reels, cinematic content, and drone videos",
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-900">
            {/* Navigation */}
            <nav className="fixed top-0 w-full backdrop-blur-md bg-white/10 border-b border-white/10 z-50">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Rifat</h1>
                    <div className="flex gap-8 text-sm font-medium text-slate-300">
                        <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
                        <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
                        <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
                        <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
                <div className="relative max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-full">
                        <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                        <span className="text-sm font-medium text-slate-300">Available for opportunities</span>
                    </div>
                    <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-slate-100 to-blue-200 bg-clip-text text-transparent leading-tight">
                        Digital Marketing <br /> & AI Innovator
                    </h1>
                    <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Combining digital marketing expertise with software engineering to create innovative solutions. Based in Tasmania, with global experience.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a href="mailto:rifat5437@gmail.com" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition">
                            Get in Touch
                        </a>
                        <a href="tel:0447820442" className="px-8 py-3 border-2 border-slate-400 text-slate-300 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition">
                            Call: 0447 820 442
                        </a>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-20 px-6 bg-gradient-to-b from-transparent via-slate-800/50 to-transparent">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-16">
                        <span className="text-blue-400 font-semibold text-sm">MY JOURNEY</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">Professional Experience</h2>
                        <p className="text-slate-400 mt-4">Roles that shaped my expertise in marketing and technology</p>
                    </div>
                    <div className="space-y-6">
                        {experience.map((exp, idx) => (
                            <div key={idx} className="group glass-effect rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-1">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                                        <p className="text-lg text-blue-400 font-semibold mb-1">{exp.company}</p>
                                        <p className="text-sm text-slate-400">{exp.location} • {exp.period}</p>
                                    </div>
                                </div>
                                <ul className="mt-6 space-y-3">
                                    {exp.points.map((point, i) => (
                                        <li key={i} className="flex gap-3 text-slate-300">
                                            <span className="text-purple-400 font-bold mt-1">→</span>
                                            <span className="leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-8">Education</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="glass-effect rounded-xl p-6 hover:bg-white/15 transition">
                            <h4 className="text-lg font-bold text-white">Master of IT & Systems</h4>
                            <p className="text-blue-400 font-semibold text-sm mt-2">University of Tasmania, Hobart</p>
                            <p className="text-slate-400 text-sm mt-1">Feb 2025 – Oct 2026</p>
                        </div>
                        <div className="glass-effect rounded-xl p-6 hover:bg-white/15 transition">
                            <h4 className="text-lg font-bold text-white">Bachelor of Science in CS</h4>
                            <p className="text-blue-400 font-semibold text-sm mt-2">North South University, Dhaka</p>
                            <p className="text-slate-400 text-sm mt-1">2020 – 2024</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-6 bg-gradient-to-b from-transparent via-slate-800/50 to-transparent">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-16">
                        <span className="text-purple-400 font-semibold text-sm">EXPERTISE</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">Skills & Technologies</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {skillGroups.map((group, idx) => (
                            <div key={idx} className="glass-effect rounded-2xl p-8 hover:bg-white/15 transition-all transform hover:scale-105 hover:-translate-y-2">
                                <h3 className="text-xl font-bold text-white mb-6">{group.title}</h3>
                                <div className="flex flex-wrap gap-3">
                                    {group.items.map((item, i) => (
                                        <span key={i} className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-slate-200 rounded-full text-sm font-medium hover:border-blue-400/60 hover:bg-blue-500/20 transition">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-16">
                        <span className="text-blue-400 font-semibold text-sm">PORTFOLIO</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">Featured Projects</h2>
                    </div>
                    <div className="space-y-4">
                        {projects.map((project, idx) => (
                            <div key={idx} className="glass-effect rounded-xl p-6 hover:bg-white/15 transition-all group cursor-pointer border-l-4 border-l-blue-400/50 hover:border-l-purple-400">
                                <p className="text-lg text-slate-200 flex items-center gap-3">
                                    <span className="text-purple-400 text-2xl">◆</span>
                                    {project}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 px-6 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none"></div>
                <div className="relative max-w-2xl mx-auto text-center">
                    <span className="text-purple-400 font-semibold text-sm">GET IN TOUCH</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 text-white">
                        Let's create something amazing
                    </h2>
                    <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                        I'm always interested in hearing about new projects and opportunities in digital marketing, web development, and AI innovation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="mailto:rifat5437@gmail.com" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition transform hover:scale-105">
                            Email Me
                        </a>
                        <a href="tel:0447820442" className="px-8 py-4 border-2 border-slate-400 text-slate-300 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition transform hover:scale-105">
                            Call Me
                        </a>
                        <span className="px-8 py-4 text-slate-300 font-medium">📍 Claremont, TAS</span>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/10 py-8 px-6 text-center text-slate-500 text-sm">
                <p>© 2026 MD Rifat Bin Yusuf. Designed for impact.</p>
            </footer>
        </div>
    );
}
