import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const projects = [
    {
        id: 1,
        title: "NeoVault",
        subtitle: "Banking Dashboard",
        description:
            "A full-stack banking dashboard with secure JWT authentication, real-time data, and a clean modern UI. Built with React.js, FastAPI, and PostgreSQL.",
        tags: ["React.js", "Tailwind CSS", "FastAPI", "PostgreSQL", "JWT"],
        color: "#ff2a2a",
        emoji: "🏦",
        live: "http://51.21.106.148/",
        github: null,
        status: "Live",
    },
    {
        id: 2,
        title: "Portfolio Website",
        subtitle: "Personal Portfolio",
        description:
            "A premium personal portfolio website with cinematic animations, preloader, and modern UI. Built with React.js and Framer Motion.",
        tags: ["React.js", "Framer Motion", "Tailwind CSS", "Vite"],
        color: "#3b82f6",
        emoji: "💼",
        live: null,
        github: "https://github.com/Sahuva-S",
        status: "In Progress",
    },
    {
        id: 3,
        title: "Location Based Alarm",
        subtitle: "Smart Alarm System",
        description:
            "A smart alarm system that triggers based on the user's GPS location. Useful for commuters who need automatic wake-up alerts near their destination.",
        tags: ["Python", "GPS", "Mobile", "Automation"],
        color: "#22c55e",
        emoji: "📍",
        live: null,
        github: null,
        status: "Personal Project",
    },
    {
        id: 4,
        title: "AutoFireGuard",
        subtitle: "Fire Detection System",
        description:
            "An automated fire detection and alert system designed to identify fire hazards and trigger real-time safety alerts for early prevention.",
        tags: ["Python", "Automation", "IoT", "Safety"],
        color: "#f59e0b",
        emoji: "🔥",
        live: null,
        github: null,
        status: "Personal Project",
    },
]

export default function Projects() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [hovered, setHovered] = useState(null)

    return (
        <section
            id="projects"
            ref={ref}
            style={{
                background: "#111",
                padding: "7rem 3rem",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Background glow */}
            <div style={{
                position: "absolute",
                top: "20%",
                right: "5%",
                width: "400px",
                height: "400px",
                background: "radial-gradient(circle, rgba(255,42,42,0.06) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />

            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: "4rem" }}
                >
                    <div style={{
                        display: "inline-flex",
                        alignItems: "center",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "50px",
                        padding: "0.4rem 1rem",
                        fontSize: "0.75rem",
                        fontFamily: "Space Mono, monospace",
                        letterSpacing: "0.1em",
                        color: "rgba(255,255,255,0.4)",
                        marginBottom: "1.5rem",
                    }}>
                        ✦ My Projects
                    </div>

                    <h2 style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "clamp(2.5rem, 5vw, 4rem)",
                        fontWeight: 900,
                        letterSpacing: "-0.04em",
                        color: "white",
                        lineHeight: 1.1,
                        marginBottom: "1rem",
                    }}>
                        Things I've<br />
                        <span style={{ color: "#ff2a2a" }}>Built</span>
                    </h2>

                    <p style={{
                        color: "rgba(255,255,255,0.45)",
                        fontSize: "1rem",
                        lineHeight: 1.65,
                        maxWidth: "500px",
                        fontFamily: "Space Grotesk, sans-serif",
                    }}>
                        A collection of projects that showcase my skills across
                        web development, Python, and automation.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "1.5rem",
                }}>
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.1 * i }}
                            onMouseEnter={() => setHovered(project.id)}
                            onMouseLeave={() => setHovered(null)}
                            style={{
                                background: hovered === project.id
                                    ? "rgba(255,255,255,0.05)"
                                    : "rgba(255,255,255,0.02)",
                                border: hovered === project.id
                                    ? `1px solid ${project.color}60`
                                    : "1px solid rgba(255,255,255,0.06)",
                                borderRadius: "1.5rem",
                                padding: "2rem",
                                cursor: "default",
                                transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
                                transform: hovered === project.id ? "translateY(-6px)" : "translateY(0)",
                                boxShadow: hovered === project.id
                                    ? `0 20px 60px ${project.color}20`
                                    : "none",
                            }}
                        >
                            {/* Top Row */}
                            <div style={{
                                display: "flex",
                                alignItems: "flex-start",
                                justifyContent: "space-between",
                                marginBottom: "1.5rem",
                            }}>
                                {/* Icon */}
                                <div style={{
                                    width: "56px",
                                    height: "56px",
                                    borderRadius: "14px",
                                    background: `${project.color}15`,
                                    border: `1px solid ${project.color}30`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "1.6rem",
                                }}>
                                    {project.emoji}
                                </div>

                                {/* Status Badge */}
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.4rem",
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    borderRadius: "50px",
                                    padding: "0.3rem 0.8rem",
                                }}>
                                    <div style={{
                                        width: "6px",
                                        height: "6px",
                                        borderRadius: "50%",
                                        background: project.status === "Live"
                                            ? "#22c55e"
                                            : project.status === "In Progress"
                                                ? "#f59e0b"
                                                : "#6b7280",
                                    }} />
                                    <span style={{
                                        fontSize: "0.65rem",
                                        fontFamily: "Space Mono, monospace",
                                        color: "rgba(255,255,255,0.4)",
                                        letterSpacing: "0.08em",
                                    }}>
                                        {project.status.toUpperCase()}
                                    </span>
                                </div>
                            </div>

                            {/* Subtitle */}
                            <div style={{
                                fontSize: "0.72rem",
                                fontFamily: "Space Mono, monospace",
                                letterSpacing: "0.12em",
                                color: project.color,
                                textTransform: "uppercase",
                                marginBottom: "0.4rem",
                            }}>
                                {project.subtitle}
                            </div>

                            {/* Title */}
                            <div style={{
                                fontSize: "1.4rem",
                                fontWeight: 800,
                                fontFamily: "Inter, sans-serif",
                                color: "white",
                                letterSpacing: "-0.03em",
                                marginBottom: "0.75rem",
                            }}>
                                {project.title}
                            </div>

                            {/* Description */}
                            <p style={{
                                fontSize: "0.88rem",
                                color: "rgba(255,255,255,0.45)",
                                lineHeight: 1.65,
                                marginBottom: "1.5rem",
                                fontFamily: "Space Grotesk, sans-serif",
                            }}>
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "0.5rem",
                                marginBottom: "1.5rem",
                            }}>
                                {project.tags.map((tag) => (
                                    <span key={tag} style={{
                                        background: "rgba(255,255,255,0.05)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        color: "rgba(255,255,255,0.5)",
                                        padding: "0.25rem 0.75rem",
                                        borderRadius: "50px",
                                        fontSize: "0.7rem",
                                        fontFamily: "Space Mono, monospace",
                                        letterSpacing: "0.06em",
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div style={{ display: "flex", gap: "0.75rem" }}>
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            background: project.color,
                                            color: "white",
                                            padding: "0.5rem 1.2rem",
                                            borderRadius: "50px",
                                            fontSize: "0.78rem",
                                            fontWeight: 600,
                                            textDecoration: "none",
                                            fontFamily: "Space Grotesk, sans-serif",
                                            transition: "opacity 0.3s",
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                                        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                                    >
                                        Live Demo ↗
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            background: "rgba(255,255,255,0.08)",
                                            border: "1px solid rgba(255,255,255,0.15)",
                                            color: "white",
                                            padding: "0.5rem 1.2rem",
                                            borderRadius: "50px",
                                            fontSize: "0.78rem",
                                            fontWeight: 600,
                                            textDecoration: "none",
                                            fontFamily: "Space Grotesk, sans-serif",
                                            transition: "all 0.3s",
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
                                        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
                                    >
                                        GitHub ↗
                                    </a>
                                )}
                                {!project.live && !project.github && (
                                    <span style={{
                                        color: "rgba(255,255,255,0.2)",
                                        fontSize: "0.75rem",
                                        fontFamily: "Space Mono, monospace",
                                        letterSpacing: "0.08em",
                                    }}>
                                        No public link available
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}