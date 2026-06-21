import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const skills = [
    {
        category: "Frontend",
        emoji: "🎨",
        color: "#ff2a2a",
        items: [
            { name: "HTML5", level: 85 },
            { name: "CSS3", level: 80 },
            { name: "JavaScript", level: 65 },
            { name: "React.js", level: 60 },
        ],
    },
    {
        category: "Backend",
        emoji: "⚙️",
        color: "#3b82f6",
        items: [
            { name: "Python", level: 75 },
            { name: "Node.js", level: 45 },
            { name: "MongoDB", level: 40 },
        ],
    },
    {
        category: "Data & AI",
        emoji: "🤖",
        color: "#22c55e",
        items: [
            { name: "Data Analysis", level: 65 },
            { name: "GenAI Tools", level: 70 },
            { name: "Forensic Tech", level: 55 },
        ],
    },
    {
        category: "Tools",
        emoji: "🛠",
        color: "#f59e0b",
        items: [
            { name: "Git & GitHub", level: 65 },
            { name: "VS Code", level: 90 },
            { name: "Figma (Basic)", level: 45 },
        ],
    },
]

function SkillBar({ name, level, color, isInView, delay }) {
    return (
        <div style={{ marginBottom: "1.2rem" }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.4rem",
            }}>
                <span style={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "0.85rem",
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 500,
                }}>
                    {name}
                </span>
                <span style={{
                    color: "rgba(255,255,255,0.3)",
                    fontSize: "0.72rem",
                    fontFamily: "Space Mono, monospace",
                }}>
                    {level}%
                </span>
            </div>
            <div style={{
                width: "100%",
                height: "4px",
                background: "rgba(255,255,255,0.06)",
                borderRadius: "50px",
                overflow: "hidden",
            }}>
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${level}%` } : {}}
                    transition={{ duration: 1, delay: delay, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        height: "100%",
                        background: color,
                        borderRadius: "50px",
                    }}
                />
            </div>
        </div>
    )
}

export default function Skills() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section
            id="skills"
            ref={ref}
            style={{
                background: "#161616",
                padding: "7rem 3rem",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Background glow */}
            <div style={{
                position: "absolute",
                bottom: "20%",
                left: "5%",
                width: "350px",
                height: "350px",
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
                        ✦ My Skills
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
                        What I Work<br />
                        <span style={{ color: "#ff2a2a" }}>With</span>
                    </h2>

                    <p style={{
                        color: "rgba(255,255,255,0.45)",
                        fontSize: "1rem",
                        lineHeight: 1.65,
                        maxWidth: "500px",
                        fontFamily: "Space Grotesk, sans-serif",
                    }}>
                        A fresher with hands-on experience across web development,
                        Python, data analytics, and AI tools — always learning more!
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "2rem",
                }}>
                    {skills.map((group, gi) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.1 * gi }}
                            style={{
                                background: "rgba(255,255,255,0.03)",
                                border: "1px solid rgba(255,255,255,0.06)",
                                borderRadius: "1.5rem",
                                padding: "2rem",
                            }}
                        >
                            {/* Category Header */}
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.75rem",
                                marginBottom: "1.8rem",
                            }}>
                                <div style={{
                                    width: "42px",
                                    height: "42px",
                                    borderRadius: "10px",
                                    background: `${group.color}15`,
                                    border: `1px solid ${group.color}30`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "1.2rem",
                                }}>
                                    {group.emoji}
                                </div>
                                <div>
                                    <div style={{
                                        fontFamily: "Inter, sans-serif",
                                        fontWeight: 700,
                                        fontSize: "1rem",
                                        color: "white",
                                        letterSpacing: "-0.01em",
                                    }}>
                                        {group.category}
                                    </div>
                                    <div style={{
                                        fontSize: "0.65rem",
                                        fontFamily: "Space Mono, monospace",
                                        color: group.color,
                                        letterSpacing: "0.1em",
                                        marginTop: "0.1rem",
                                    }}>
                                        {group.items.length} SKILLS
                                    </div>
                                </div>
                            </div>

                            {/* Skill Bars */}
                            {group.items.map((skill, si) => (
                                <SkillBar
                                    key={skill.name}
                                    name={skill.name}
                                    level={skill.level}
                                    color={group.color}
                                    isInView={isInView}
                                    delay={0.2 + gi * 0.1 + si * 0.1}
                                />
                            ))}
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{
                        textAlign: "center",
                        marginTop: "3rem",
                        padding: "1.5rem",
                        background: "rgba(255,42,42,0.05)",
                        border: "1px solid rgba(255,42,42,0.1)",
                        borderRadius: "1rem",
                    }}
                >
                    <span style={{
                        fontFamily: "Space Mono, monospace",
                        fontSize: "0.85rem",
                        color: "rgba(255,255,255,0.4)",
                        letterSpacing: "0.08em",
                    }}>
                        🚀 Always learning — currently exploring{" "}
                        <span style={{ color: "#ff2a2a" }}>Next.js & TypeScript</span>
                    </span>
                </motion.div>
            </div>
        </section>
    )
}