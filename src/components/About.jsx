import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import heroImg from "../assets/hero.jpeg"

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section
            id="about"
            ref={ref}
            style={{
                background: "#ff2a2a",
                padding: "6rem 3rem",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Floating Stars */}
            {[
                { top: "8%", left: "5%", delay: 0 },
                { top: "20%", right: "8%", delay: 1 },
                { bottom: "25%", left: "10%", delay: 2 },
                { bottom: "15%", right: "15%", delay: 0.5 },
            ].map((pos, i) => (
                <motion.div
                    key={i}
                    animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: pos.delay }}
                    style={{
                        position: "absolute",
                        color: "#111",
                        fontSize: "1.5rem",
                        pointerEvents: "none",
                        ...pos,
                    }}
                >
                    ✦
                </motion.div>
            ))}

            <div style={{
                maxWidth: "1200px",
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "5rem",
                alignItems: "center",
            }}>

                {/* Left - Badge */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    style={{ display: "flex", justifyContent: "center", paddingTop: "2rem" }}
                >
                    <motion.div
                        animate={{ rotate: [-1.5, 1.5, -1.5] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            transformOrigin: "top center",
                        }}
                    >
                        {/* Strap */}
                        <div style={{
                            width: "3px",
                            height: "80px",
                            background: "#111",
                            position: "relative",
                        }}>
                            <div style={{
                                position: "absolute",
                                top: "-10px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                                background: "#333",
                                boxShadow: "0 0 0 3px #555",
                            }} />
                        </div>

                        {/* Badge Card */}
                        <motion.div
                            whileHover={{ rotate: 0, scale: 1.03 }}
                            style={{
                                width: "230px",
                                background: "#1a1a1a",
                                borderRadius: "16px",
                                padding: "1.5rem 1.2rem",
                                rotate: "-3deg",
                                boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 10px 30px rgba(0,0,0,0.3)",
                                cursor: "pointer",
                            }}
                        >
                            {/* Photo */}
                            <div style={{
                                width: "100%",
                                height: "200px",
                                borderRadius: "10px",
                                overflow: "hidden",
                                marginBottom: "1rem",
                                background: "#333",
                            }}>
                                <img
                                    src={heroImg}
                                    alt="Sahuva"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        objectPosition: "top",
                                    }}
                                />
                            </div>

                            {/* Name */}
                            <div style={{
                                color: "white", fontWeight: 700,
                                fontSize: "1rem", letterSpacing: "0.02em",
                            }}>
                                Sahuva S
                            </div>

                            {/* Role */}
                            <div style={{
                                color: "#ff2a2a", fontSize: "0.72rem",
                                fontFamily: "Space Mono, monospace",
                                letterSpacing: "0.1em", marginTop: "0.2rem",
                            }}>
                                ASPIRING FULL STACK DEV
                            </div>

                            {/* Divider */}
                            <div style={{
                                height: "1px",
                                background: "rgba(255,255,255,0.1)",
                                margin: "0.75rem 0",
                            }} />

                            {/* College */}
                            <div style={{
                                color: "rgba(255,255,255,0.5)", fontSize: "0.62rem",
                                fontFamily: "Space Mono, monospace",
                                letterSpacing: "0.06em", lineHeight: 1.4,
                            }}>
                                MES Institute of Technology
                            </div>

                            {/* Degree */}
                            <div style={{
                                color: "rgba(255,255,255,0.4)", fontSize: "0.6rem",
                                fontFamily: "Space Mono, monospace",
                                letterSpacing: "0.06em", marginTop: "0.2rem",
                            }}>
                                B.Tech CSE · 2026
                            </div>

                            {/* ID */}
                            <div style={{
                                color: "rgba(255,255,255,0.2)", fontSize: "0.6rem",
                                fontFamily: "Space Mono, monospace", marginTop: "0.4rem",
                            }}>
                                ID: SH-2026-CSE
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Right - Text */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "clamp(4rem, 8vw, 7rem)",
                        fontWeight: 900,
                        color: "#111",
                        letterSpacing: "-0.04em",
                        lineHeight: 1,
                        marginBottom: "1.5rem",
                    }}>
                        Hello!
                    </h2>

                    <p style={{
                        color: "rgba(255,255,255,0.9)",
                        fontSize: "1.05rem",
                        lineHeight: 1.7,
                        marginBottom: "1rem",
                    }}>
                        I'm{" "}
                        <strong style={{ color: "#111", fontWeight: 800 }}>
                            SAHUVA S
                        </strong>{" "}
                        — a passionate fresher and aspiring Full Stack Developer,
                        currently pursuing{" "}
                        <strong style={{ color: "#111", fontWeight: 700 }}>
                            B.Tech in Computer Science
                        </strong>{" "}
                        at MES Institute of Technology and Management, graduating in 2026.
                    </p>

                    <p style={{
                        color: "rgba(255,255,255,0.9)",
                        fontSize: "1.05rem",
                        lineHeight: 1.7,
                        marginBottom: "1rem",
                    }}>
                        I completed an internship at{" "}
                        <strong style={{ color: "#111", fontWeight: 700 }}>
                            Infosys Springboard
                        </strong>{" "}
                        where I worked with Python, strengthening my problem-solving
                        and programming fundamentals.
                    </p>

                    <p style={{
                        color: "rgba(255,255,255,0.9)",
                        fontSize: "1.05rem",
                        lineHeight: 1.7,
                    }}>
                        I love building clean, fast, and beautiful web experiences.
                        Open to opportunities where I can grow, contribute, and make
                        an impact! 🚀
                    </p>

                    {/* Info Tags */}
                    <div style={{
                        display: "flex", flexWrap: "wrap", gap: "0.75rem",
                        marginTop: "2rem",
                    }}>
                        {[
                            "📍 Kerala, India",
                            "🎓 B.Tech CSE 2026",
                            "🏢 Infosys Springboard",
                            "💼 Open to Work",
                        ].map((tag) => (
                            <span key={tag} style={{
                                background: "rgba(0,0,0,0.2)",
                                color: "white",
                                padding: "0.4rem 1rem",
                                borderRadius: "50px",
                                fontSize: "0.8rem",
                                fontFamily: "Space Mono, monospace",
                                letterSpacing: "0.05em",
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Tech Stack */}
                    <div style={{
                        display: "flex", gap: "2rem",
                        marginTop: "2rem", alignItems: "center",
                    }}>
                        {[
                            { icon: "🌐", label: "HTML/CSS", bg: "rgba(255,255,255,0.15)" },
                            { icon: "⚛️", label: "REACT", bg: "rgba(97,218,251,0.15)" },
                            { icon: "🐍", label: "PYTHON", bg: "rgba(255,212,59,0.15)" },
                        ].map((tech) => (
                            <motion.div
                                key={tech.label}
                                whileHover={{ y: -6, scale: 1.08 }}
                                style={{
                                    display: "flex", flexDirection: "column",
                                    alignItems: "center", gap: "0.5rem",
                                    cursor: "default",
                                }}
                            >
                                <div style={{
                                    width: "56px", height: "56px",
                                    borderRadius: "12px",
                                    background: tech.bg,
                                    display: "flex", alignItems: "center",
                                    justifyContent: "center", fontSize: "1.6rem",
                                }}>
                                    {tech.icon}
                                </div>
                                <div style={{
                                    fontSize: "0.65rem",
                                    fontFamily: "Space Mono, monospace",
                                    color: "rgba(0,0,0,0.6)",
                                    letterSpacing: "0.1em",
                                }}>
                                    {tech.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
                        <a
                            href="https://github.com/Sahuva-S"
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                background: "#111",
                                color: "white",
                                padding: "0.6rem 1.4rem",
                                borderRadius: "50px",
                                fontSize: "0.85rem",
                                fontWeight: 600,
                                textDecoration: "none",
                                fontFamily: "Space Grotesk, sans-serif",
                                transition: "all 0.3s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = "#333")}
                            onMouseLeave={(e) => (e.currentTarget.style.background = "#111")}
                        >
                            GitHub ↗
                        </a>

                        <a
                            href="https://www.linkedin.com/in/sahuva-s"
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                background: "#0077b5",
                                color: "white",
                                padding: "0.6rem 1.4rem",
                                borderRadius: "50px",
                                fontSize: "0.85rem",
                                fontWeight: 600,
                                textDecoration: "none",
                                fontFamily: "Space Grotesk, sans-serif",
                                transition: "all 0.3s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = "#005885")}
                            onMouseLeave={(e) => (e.currentTarget.style.background = "#0077b5")}
                        >
                            LinkedIn ↗
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Torn Paper Divider */}
            <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", lineHeight: 0 }}>
                <svg
                    viewBox="0 0 1440 80"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: "block", width: "100%" }}
                >
                    <path
                        d="M0,40 C30,20 60,60 100,35 C130,18 160,55 200,30 C240,8 270,50 310,28 C350,5 380,48 420,25 C460,2 490,45 530,22 C570,0 600,42 640,20 C680,0 710,38 750,18 C790,0 820,35 860,15 C900,0 930,30 970,12 C1010,0 1040,28 1080,10 C1120,0 1150,25 1190,8 C1230,0 1270,22 1310,6 C1350,0 1400,18 1440,5 L1440,80 L0,80 Z"
                        fill="white"
                    />
                </svg>
            </div>
        </section>
    )
}