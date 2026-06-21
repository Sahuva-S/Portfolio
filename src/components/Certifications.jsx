import certAnthropic from "../assets/cert_anthropic.jpg"
import certDeloitte from "../assets/cert_deloitte.pdf"
import certInfosys from "../assets/cert_infosys.pdf"
import certTata from "../assets/cert_tata.pdf"
import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const certs = [
    {
        id: 1,
        title: "AI Fluency: Framework & Foundations",
        issuer: "Anthropic",
        date: "June 2026",
        color: "#4a7c59",
        emoji: "🤖",
        file: "/cert_anthropic.jpg",
        type: "image",
    },
    {
        id: 2,
        title: "Data Analytics Job Simulation",
        issuer: "Deloitte",
        date: "June 2026",
        color: "#86bc25",
        emoji: "📊",
        file: "/cert_deloitte.pdf",
        type: "pdf",
    },
    {
        id: 3,
        title: "Python Programming Internship",
        issuer: "Infosys Springboard",
        date: "2025",
        color: "#007cc3",
        emoji: "🐍",
        file: "/cert_infosys.pdf",
        type: "pdf",
    },
    {
        id: 4,
        title: "GenAI Data Analytics",
        issuer: "Tata",
        date: "2026",
        color: "#e31837",
        emoji: "✨",
        file: "/cert_tata.pdf",
        type: "pdf",
    },
]

export default function Certifications() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [hovered, setHovered] = useState(null)
    const [selected, setSelected] = useState(null)

    return (
        <section
            id="certifications"
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
                top: "30%",
                right: "10%",
                width: "400px",
                height: "400px",
                background: "radial-gradient(circle, rgba(255,42,42,0.08) 0%, transparent 70%)",
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
                        ✦ Certifications
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
                        Credentials &<br />
                        <span style={{ color: "#ff2a2a" }}>Achievements</span>
                    </h2>

                    <p style={{
                        color: "rgba(255,255,255,0.45)",
                        fontSize: "1rem",
                        lineHeight: 1.65,
                        maxWidth: "500px",
                        fontFamily: "Space Grotesk, sans-serif",
                    }}>
                        Certified by globally recognized organizations — constantly
                        learning and upskilling beyond the classroom.
                    </p>
                </motion.div>

                {/* Certificates Grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "1.5rem",
                }}>
                    {certs.map((cert, i) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.1 * i }}
                            onMouseEnter={() => setHovered(cert.id)}
                            onMouseLeave={() => setHovered(null)}
                            style={{
                                background: hovered === cert.id
                                    ? "rgba(255,255,255,0.05)"
                                    : "rgba(255,255,255,0.03)",
                                border: hovered === cert.id
                                    ? `1px solid ${cert.color}`
                                    : "1px solid rgba(255,255,255,0.08)",
                                borderRadius: "1.5rem",
                                padding: "2rem",
                                cursor: "default",
                                transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
                                transform: hovered === cert.id ? "translateY(-6px)" : "translateY(0)",
                                boxShadow: hovered === cert.id
                                    ? `0 20px 60px ${cert.color}25`
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
                                    background: `${cert.color}20`,
                                    border: `1px solid ${cert.color}40`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "1.6rem",
                                }}>
                                    {cert.emoji}
                                </div>

                                {/* Verified Badge */}
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.4rem",
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    borderRadius: "50px",
                                    padding: "0.3rem 0.8rem",
                                }}>
                                    <div style={{
                                        width: "6px",
                                        height: "6px",
                                        borderRadius: "50%",
                                        background: "#22c55e",
                                    }} />
                                    <span style={{
                                        fontSize: "0.65rem",
                                        fontFamily: "Space Mono, monospace",
                                        color: "rgba(255,255,255,0.5)",
                                        letterSpacing: "0.08em",
                                    }}>
                                        VERIFIED
                                    </span>
                                </div>
                            </div>

                            {/* Issuer */}
                            <div style={{
                                fontSize: "0.72rem",
                                fontFamily: "Space Mono, monospace",
                                letterSpacing: "0.12em",
                                color: cert.color,
                                textTransform: "uppercase",
                                marginBottom: "0.5rem",
                            }}>
                                {cert.issuer}
                            </div>

                            {/* Title */}
                            <div style={{
                                fontSize: "1.15rem",
                                fontWeight: 700,
                                fontFamily: "Inter, sans-serif",
                                color: "white",
                                lineHeight: 1.3,
                                marginBottom: "1rem",
                                letterSpacing: "-0.02em",
                            }}>
                                {cert.title}
                            </div>

                            {/* Bottom Row */}
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}>
                                <span style={{
                                    fontSize: "0.75rem",
                                    fontFamily: "Space Mono, monospace",
                                    color: "rgba(255,255,255,0.3)",
                                    letterSpacing: "0.08em",
                                }}>
                                    📅 {cert.date}
                                </span>

                                <motion.div
                                    animate={hovered === cert.id ? { x: 4 } : { x: 0 }}
                                    transition={{ duration: 0.2 }}
                                    onClick={() => setSelected(cert)}
                                    style={{
                                        fontSize: "0.8rem",
                                        color: hovered === cert.id ? cert.color : "rgba(255,255,255,0.2)",
                                        fontFamily: "Space Mono, monospace",
                                        transition: "color 0.3s",
                                        cursor: "pointer",
                                    }}
                                >
                                    View Certificate →
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "1.5rem",
                        marginTop: "3rem",
                        paddingTop: "3rem",
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                    }}
                >
                    {[
                        { num: "4+", label: "Certifications" },
                        { num: "3", label: "Tech Domains" },
                        { num: "2026", label: "Graduating" },
                    ].map((stat) => (
                        <div key={stat.label} style={{ textAlign: "center" }}>
                            <div style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "2.5rem",
                                fontWeight: 900,
                                color: "white",
                                letterSpacing: "-0.04em",
                                lineHeight: 1,
                            }}>
                                {stat.num}
                            </div>
                            <div style={{
                                fontSize: "0.75rem",
                                fontFamily: "Space Mono, monospace",
                                color: "rgba(255,255,255,0.3)",
                                letterSpacing: "0.1em",
                                marginTop: "0.5rem",
                                textTransform: "uppercase",
                            }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
            {/* Certificate Modal */}
            {selected && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelected(null)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(0,0,0,0.9)",
                        zIndex: 99999,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "2rem",
                    }}
                >
                    <motion.div
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: "#1a1a1a",
                            borderRadius: "1.5rem",
                            padding: "1.5rem",
                            maxWidth: "800px",
                            width: "100%",
                            border: `1px solid ${selected.color}40`,
                            position: "relative",
                        }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelected(null)}
                            style={{
                                position: "absolute",
                                top: "1rem",
                                right: "1rem",
                                background: "rgba(255,255,255,0.1)",
                                border: "none",
                                color: "white",
                                width: "36px",
                                height: "36px",
                                borderRadius: "50%",
                                cursor: "pointer",
                                fontSize: "1rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 1,
                            }}
                        >
                            ✕
                        </button>

                        {/* Title */}
                        <div style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 700,
                            fontSize: "1rem",
                            color: "white",
                            marginBottom: "1rem",
                            paddingRight: "2.5rem",
                        }}>
                            {selected.issuer} — {selected.title}
                        </div>

                        {/* Certificate Display */}
                        {selected.type === "image" ? (
                            <img
                                src={selected.file}
                                alt={selected.title}
                                style={{
                                    width: "100%",
                                    borderRadius: "10px",
                                    display: "block",
                                }}
                            />
                        ) : (
                            <iframe
                                src={selected.file}
                                title={selected.title}
                                style={{
                                    width: "100%",
                                    height: "500px",
                                    borderRadius: "10px",
                                    border: "none",
                                }}
                            />
                        )}
                    </motion.div>
                </motion.div>
            )}
        </section>
    )
}