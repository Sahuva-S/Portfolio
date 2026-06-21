import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

export default function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [formData, setFormData] = useState({ name: "", email: "", message: "" })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <section
            id="contact"
            ref={ref}
            style={{
                background: "#8b0000",
                padding: "7rem 3rem",
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
                        color: "rgba(255,255,255,0.2)",
                        fontSize: "1.5rem",
                        pointerEvents: "none",
                        ...pos,
                    }}
                >
                    ✦
                </motion.div>
            ))}

            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: "4rem", textAlign: "center" }}
                >
                    <div style={{
                        display: "inline-flex",
                        alignItems: "center",
                        border: "1px solid rgba(255,255,255,0.2)",
                        borderRadius: "50px",
                        padding: "0.4rem 1rem",
                        fontSize: "0.75rem",
                        fontFamily: "Space Mono, monospace",
                        letterSpacing: "0.1em",
                        color: "rgba(255,255,255,0.6)",
                        marginBottom: "1.5rem",
                    }}>
                        ✦ Get In Touch
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
                        Let's Work<br />
                        <span style={{ color: "#111" }}>Together</span>
                    </h2>

                    <p style={{
                        color: "rgba(255,255,255,0.7)",
                        fontSize: "1rem",
                        lineHeight: 1.65,
                        maxWidth: "500px",
                        fontFamily: "Space Grotesk, sans-serif",
                        margin: "0 auto",
                    }}>
                        I'm actively looking for opportunities! Whether it's a job,
                        internship, or collaboration — feel free to reach out!
                    </p>
                </motion.div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "4rem",
                    alignItems: "start",
                }}>

                    {/* Left - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "1.5rem",
                            fontWeight: 800,
                            color: "white",
                            letterSpacing: "-0.03em",
                            marginBottom: "2rem",
                        }}>
                            Contact Info
                        </h3>

                        {[
                            {
                                icon: "📧",
                                label: "Email",
                                value: "sahuvazayyan27@gmail.com",
                                link: "mailto:sahuvqazayyan27@gmail.com",
                            },
                            {
                                icon: "💼",
                                label: "LinkedIn",
                                value: "linkedin.com/in/sahuva-s",
                                link: "https://www.linkedin.com/in/sahuva-s",
                            },
                            {
                                icon: "🐙",
                                label: "GitHub",
                                value: "github.com/Sahuva-S",
                                link: "https://github.com/Sahuva-S",
                            },
                            {
                                icon: "📍",
                                label: "Location",
                                value: "Kerala, India",
                                link: null,
                            },
                        ].map((item) => (
                            <div
                                key={item.label}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem",
                                    marginBottom: "1.5rem",
                                    padding: "1rem 1.2rem",
                                    background: "rgba(255,255,255,0.08)",
                                    borderRadius: "12px",
                                    border: "1px solid rgba(255,255,255,0.12)",
                                }}
                            >
                                <div style={{
                                    width: "42px",
                                    height: "42px",
                                    borderRadius: "10px",
                                    background: "rgba(255,255,255,0.1)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "1.2rem",
                                    flexShrink: 0,
                                }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <div style={{
                                        fontSize: "0.65rem",
                                        fontFamily: "Space Mono, monospace",
                                        color: "rgba(255,255,255,0.4)",
                                        letterSpacing: "0.1em",
                                        textTransform: "uppercase",
                                        marginBottom: "0.2rem",
                                    }}>
                                        {item.label}
                                    </div>
                                    {item.link ? (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{
                                                color: "white",
                                                fontSize: "0.88rem",
                                                fontFamily: "Space Grotesk, sans-serif",
                                                textDecoration: "none",
                                                fontWeight: 500,
                                                transition: "color 0.3s",
                                            }}
                                            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffaaaa")}
                                            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <span style={{
                                            color: "white",
                                            fontSize: "0.88rem",
                                            fontFamily: "Space Grotesk, sans-serif",
                                            fontWeight: 500,
                                        }}>
                                            {item.value}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Open to Work Badge */}
                        <div style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.6rem",
                            background: "rgba(34,197,94,0.15)",
                            border: "1px solid rgba(34,197,94,0.3)",
                            borderRadius: "50px",
                            padding: "0.6rem 1.2rem",
                            marginTop: "0.5rem",
                        }}>
                            <div style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                background: "#22c55e",
                                animation: "pulse 2s infinite",
                            }} />
                            <span style={{
                                color: "#22c55e",
                                fontSize: "0.8rem",
                                fontFamily: "Space Mono, monospace",
                                letterSpacing: "0.08em",
                            }}>
                                OPEN TO OPPORTUNITIES
                            </span>
                        </div>
                    </motion.div>

                    {/* Right - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {!submitted ? (
                            <form onSubmit={handleSubmit}>
                                <h3 style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "1.5rem",
                                    fontWeight: 800,
                                    color: "white",
                                    letterSpacing: "-0.03em",
                                    marginBottom: "2rem",
                                }}>
                                    Send a Message
                                </h3>

                                {[
                                    { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                                    { name: "email", label: "Your Email", type: "email", placeholder: "john@example.com" },
                                ].map((field) => (
                                    <div key={field.name} style={{ marginBottom: "1.2rem" }}>
                                        <label style={{
                                            display: "block",
                                            fontSize: "0.72rem",
                                            fontFamily: "Space Mono, monospace",
                                            color: "rgba(255,255,255,0.5)",
                                            letterSpacing: "0.1em",
                                            textTransform: "uppercase",
                                            marginBottom: "0.5rem",
                                        }}>
                                            {field.label}
                                        </label>
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            placeholder={field.placeholder}
                                            value={formData[field.name]}
                                            onChange={handleChange}
                                            required
                                            style={{
                                                width: "100%",
                                                background: "rgba(255,255,255,0.08)",
                                                border: "1px solid rgba(255,255,255,0.15)",
                                                borderRadius: "10px",
                                                padding: "0.85rem 1rem",
                                                color: "white",
                                                fontSize: "0.9rem",
                                                fontFamily: "Space Grotesk, sans-serif",
                                                outline: "none",
                                                transition: "border 0.3s",
                                            }}
                                            onFocus={(e) => e.currentTarget.style.border = "1px solid rgba(255,255,255,0.4)"}
                                            onBlur={(e) => e.currentTarget.style.border = "1px solid rgba(255,255,255,0.15)"}
                                        />
                                    </div>
                                ))}

                                <div style={{ marginBottom: "1.5rem" }}>
                                    <label style={{
                                        display: "block",
                                        fontSize: "0.72rem",
                                        fontFamily: "Space Mono, monospace",
                                        color: "rgba(255,255,255,0.5)",
                                        letterSpacing: "0.1em",
                                        textTransform: "uppercase",
                                        marginBottom: "0.5rem",
                                    }}>
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        placeholder="Tell me about the opportunity..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        style={{
                                            width: "100%",
                                            background: "rgba(255,255,255,0.08)",
                                            border: "1px solid rgba(255,255,255,0.15)",
                                            borderRadius: "10px",
                                            padding: "0.85rem 1rem",
                                            color: "white",
                                            fontSize: "0.9rem",
                                            fontFamily: "Space Grotesk, sans-serif",
                                            outline: "none",
                                            resize: "vertical",
                                            transition: "border 0.3s",
                                        }}
                                        onFocus={(e) => e.currentTarget.style.border = "1px solid rgba(255,255,255,0.4)"}
                                        onBlur={(e) => e.currentTarget.style.border = "1px solid rgba(255,255,255,0.15)"}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    style={{
                                        width: "100%",
                                        background: "#111",
                                        color: "white",
                                        padding: "0.9rem 2rem",
                                        borderRadius: "50px",
                                        fontWeight: 700,
                                        fontSize: "0.95rem",
                                        cursor: "pointer",
                                        border: "none",
                                        fontFamily: "Space Grotesk, sans-serif",
                                        letterSpacing: "0.02em",
                                        transition: "all 0.3s",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = "#222"
                                        e.currentTarget.style.transform = "translateY(-2px)"
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "#111"
                                        e.currentTarget.style.transform = "translateY(0)"
                                    }}
                                >
                                    Send Message →
                                </button>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                style={{
                                    textAlign: "center",
                                    padding: "3rem",
                                    background: "rgba(255,255,255,0.08)",
                                    borderRadius: "1.5rem",
                                    border: "1px solid rgba(255,255,255,0.15)",
                                }}
                            >
                                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉</div>
                                <h3 style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "1.5rem",
                                    fontWeight: 800,
                                    color: "white",
                                    marginBottom: "0.75rem",
                                }}>
                                    Message Sent!
                                </h3>
                                <p style={{
                                    color: "rgba(255,255,255,0.6)",
                                    fontFamily: "Space Grotesk, sans-serif",
                                    fontSize: "0.9rem",
                                    lineHeight: 1.6,
                                }}>
                                    Thanks for reaching out! I'll get back to you as soon as possible. 😊
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div >
        </section >
    )
}