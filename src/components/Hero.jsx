import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import heroImg from "../assets/hero.jpeg"

export default function Hero() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setTimeout(() => setVisible(true), 3200)
    }, [])

    return (
        <section
            id="home"
            style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
            }}
        >
            {/* Background Image */}
            <img
                src={heroImg}
                alt="hero"
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    zIndex: 0,
                }}
            />

            {/* Dark Overlay */}
            <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.3) 100%)",
                zIndex: 1,
            }} />

            {/* Content */}
            <div style={{
                position: "relative",
                zIndex: 2,
                maxWidth: "1300px",
                margin: "0 auto",
                padding: "0 3rem",
                width: "100%",
            }}>

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={visible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    style={{ maxWidth: "600px" }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={visible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{
                            display: "inline-block",
                            fontFamily: "Space Mono, monospace",
                            fontSize: "0.72rem",
                            color: "#ff2a2a",
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            border: "1px solid rgba(255,42,42,0.35)",
                            padding: "0.35rem 0.9rem",
                            borderRadius: "50px",
                            marginBottom: "1.5rem",
                        }}
                    >
                        ✦ Available for Work
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={visible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "clamp(3rem, 6vw, 5.2rem)",
                            fontWeight: 900,
                            lineHeight: 1,
                            letterSpacing: "-0.04em",
                            color: "white",
                            marginBottom: "0.5rem",
                        }}
                    >
                        Hi, I'm a<br />
                        <span style={{
                            WebkitTextStroke: "2px white",
                            color: "transparent",
                        }}>
                            Full Stack
                        </span>
                        <br />
                        Developer
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={visible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{
                            fontSize: "1rem",
                            color: "rgba(255,255,255,0.6)",
                            lineHeight: 1.65,
                            margin: "1.5rem 0 2.5rem",
                            maxWidth: "460px",
                            fontWeight: 400,
                        }}
                    >
                        Building high-performance web applications with React.js & Node.js.
                        Focused on scalability, clean architecture, and experiences that move fast.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={visible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
                    >
                        <button
                            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                            style={{
                                background: "white",
                                color: "#111",
                                padding: "0.75rem 2rem",
                                borderRadius: "50px",
                                fontWeight: 700,
                                fontSize: "0.9rem",
                                cursor: "pointer",
                                border: "none",
                                fontFamily: "Space Grotesk, sans-serif",
                                letterSpacing: "0.02em",
                                transition: "transform 0.25s, box-shadow 0.25s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.04)"
                                e.currentTarget.style.boxShadow = "0 8px 30px rgba(255,255,255,0.2)"
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)"
                                e.currentTarget.style.boxShadow = "none"
                            }}
                        >
                            View My Work
                        </button>

                        <button
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            style={{
                                background: "rgba(255,255,255,0.08)",
                                border: "1px solid rgba(255,255,255,0.3)",
                                color: "white",
                                padding: "0.75rem 2rem",
                                borderRadius: "50px",
                                fontWeight: 600,
                                fontSize: "0.9rem",
                                cursor: "pointer",
                                backdropFilter: "blur(10px)",
                                fontFamily: "Space Grotesk, sans-serif",
                                transition: "all 0.25s",
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
                            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
                        >
                            Contact Me
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div style={{
                position: "absolute",
                bottom: "2.5rem",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 2,
            }}>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    style={{
                        width: "28px",
                        height: "28px",
                        borderRight: "2px solid rgba(255,255,255,0.4)",
                        borderBottom: "2px solid rgba(255,255,255,0.4)",
                        transform: "rotate(45deg)",
                    }}
                />
            </div>
        </section>
    )
}