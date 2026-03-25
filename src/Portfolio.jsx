import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
            items: [
                "SEO",
                "SEM",
                "Google Ads",
                "Meta Ads",
                "Email Marketing",
                "Content Marketing",
                "Keyword Research",
                "Google Analytics",
                "A/B Testing",
                "Campaign Strategy",
                "Social Media Marketing",
                "KPI & ROI Reporting",
            ],
        },
        {
            title: "Web Development",
            items: [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Tailwind CSS",
                "Bootstrap",
                "PHP",
                "Laravel",
                "WordPress",
                "Vite",
                "API Integration",
                "Responsive Design",
            ],
        },
        {
            title: "AI, Data & Automation",
            items: [
                "Python",
                "SQL",
                "AI Chatbots",
                "LangChain",
                "LLaMA",
                "Embeddings",
                "Semantic Search",
                "Vector Databases",
                "FAISS",
                "ChromaDB",
                "Workflow Automation",
                "Data Visualization",
            ],
        },
        {
            title: "Content & Media",
            items: [
                "Adobe Premiere Pro",
                "Adobe Photoshop",
                "Adobe Lightroom",
                "Short-form Video Editing",
                "Long-form Video Editing",
                "Drone Videography",
                "Technical Writing",
                "Content Writing",
                "Creative Direction",
            ],
        },
    ];

    const projects = [
        "Business websites including vpgesports.com and bigboytowing.com",
        "AI-based tools and chatbot systems for workflow efficiency",
        "Executive dashboards and data reporting tools",
        "Promotional reels, cinematic content, and drone videos",
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <div className="text-base font-bold text-foreground">
                        Rifat Yusuf
                    </div>

                    <div className="hidden gap-8 text-sm font-medium md:flex">
                        <a
                            href="#experience"
                            className="text-foreground/80 transition-all duration-200 hover:text-foreground"
                        >
                            Experience
                        </a>
                        <a
                            href="#skills"
                            className="text-foreground/80 transition-all duration-200 hover:text-foreground"
                        >
                            Skills
                        </a>
                        <a
                            href="#projects"
                            className="text-foreground/80 transition-all duration-200 hover:text-foreground"
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            className="text-foreground/80 transition-all duration-200 hover:text-foreground"
                        >
                            Contact
                        </a>
                    </div>

                    <a
                        href="#experience"
                        className="rounded-lg bg-foreground/5 px-4 py-2 text-xs font-semibold text-foreground hover:bg-foreground/15"
                    >
                        Learn More
                    </a>
                </div>
            </nav>

            <section className="px-6 pb-20 pt-32">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="mb-4 text-5xl font-extrabold leading-tight text-foreground sm:text-6xl md:text-7xl">
                        Rifat Yusuf
                    </h1>

                    <h2 className="mb-6 text-2xl font-semibold text-muted-foreground sm:text-3xl">
                        Digital Marketing Analyst | AI Tools | Web Development
                    </h2>

                    <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
                        I build data-driven marketing systems and AI-powered web solutions
                        that deliver measurable business impact.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Button
                            size="lg"
                            className="bg-white text-black transition-all duration-150 hover:bg-gray-200 active:scale-95"
                            asChild
                        >
                            <a href="#contact">Get in Touch</a>
                        </Button>
                    </div>
                </div>
            </section>

            <section id="experience" className="px-6 py-20">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-16 flex flex-col items-center text-center">
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/70">
                            Experience
                        </span>

                        <h2 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">
                            Professional Experience
                        </h2>

                        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
                            Roles that shaped my expertise in marketing and technology
                        </p>
                    </div>

                    <div className="relative space-y-10 border-l border-border pl-8">
                        {experience.map((exp, idx) => (
                            <div key={idx} className="relative">


                                <div className="rounded-2xl border border-border bg-card p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground">
                                                {exp.role}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                {exp.company} • {exp.location}
                                            </p>
                                        </div>

                                        <span className="text-sm font-medium text-foreground/70">
                                            {exp.period}
                                        </span>
                                    </div>

                                    <ul className="mt-4 space-y-2 text-muted-foreground">
                                        {exp.points.map((point, i) => (
                                            <li key={i} className="flex gap-2">
                                                <span className="font-bold text-primary">•</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="skills" className="px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-14 flex flex-col items-center text-center">
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/70">
                            Expertise
                        </span>

                        <h2 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">
                            Skills & Capabilities
                        </h2>

                        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                            A mix of marketing, development, AI, analytics, and content
                            production.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {skillGroups.map((group, idx) => (
                            <div
                                key={idx}
                                className="rounded-3xl border border-border bg-card/60 p-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md"
                            >
                                <h3 className="mb-5 text-xl font-semibold text-foreground">
                                    {group.title}
                                </h3>

                                <div className="flex flex-wrap gap-3">
                                    {group.items.map((item, itemIdx) => (
                                        <span
                                            key={itemIdx}
                                            className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground/90 transition-all duration-200 hover:bg-foreground hover:text-background"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="projects" className="px-6 py-20">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-16 flex flex-col items-center text-center">
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/70">
                            Projects
                        </span>

                        <h2 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">
                            Featured Projects
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {projects.map((project, idx) => (
                            <Card
                                key={idx}
                                className="border-l-4 border-l-foreground bg-card p-6 transition-shadow hover:shadow-lg"
                            >
                                <p className="flex items-center gap-3 text-lg text-foreground">
                                    <span className="text-2xl text-foreground">◆</span>
                                    {project}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="px-6 py-24">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-widest text-foreground">
                        Final Call
                    </span>

                    <h2 className="mb-6 mt-4 text-4xl font-extrabold text-foreground md:text-5xl">
                        Ready to push your growth skyward?
                    </h2>

                    <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
                        Let’s build digital experiences and campaigns that drive measurable
                        ROI, engagement, and brand authority.
                    </p>

                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Button
                            size="lg"
                            className="bg-primary text-primary-foreground hover:bg-primary/90"
                            asChild
                        >
                            <a href="mailto:rifat5437@gmail.com">Work with me</a>
                        </Button>
                    </div>
                </div>
            </section>

            <footer className="border-t border-border bg-background px-6 py-8 text-center text-sm text-muted-foreground">
                <p>© 2026 MD Rifat Bin Yusuf. Designed for impact.</p>
            </footer>
        </div>
    );
}