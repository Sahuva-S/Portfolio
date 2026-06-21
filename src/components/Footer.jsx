import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function Footer() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <footer
            id="footer"
            ref={ref}
            style={{
                background: "#111111",
                padding: "5rem 3rem 2.5rem",
                borderTop: "1px solid rgba(255,255,255,0.05)",
            }}
        >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

                {/* Top Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: "2rem",
                        paddingBottom: "3rem",
                        borderBottom: "1px solid rgba(255,255,255,0.08)",
                        marginBottom: "2.5rem",
                    }}
                >
                    {/* Services */}
                    <div>
                        <div style={{
                            fontFamily: "Space Mono, monospace",
                            fontSize: "0.65rem",
                            letterSpacing: "0.18em",
                            color: "rgba(255,255,255,0.3)",
                            textTransform: "uppercase",
                            marginBottom: "1.2rem",
                        }}>
                            Skills
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            {[
                                "HTML & CSS",
                                "React.js",
                                "Python",
                                "Data Analytics",
                            ].map((s) => (
                                <span key={s} style={{
                                    color: "rgba(255,255,255,0.55)",
                                    fontFamily: "Space Mono, monospace",
                                    fontSize: "0.78rem",
                                    letterSpacing: "0.08em",
                                }}>
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Experience */}
                    <div>
                        <div style={{
                            fontFamily: "Space Mono, monospace",
                            fontSize: "0.65rem",
                            letterSpacing: "0.18em",
                            color: "rgba(255,255,255,0.3)",
                            textTransform: "uppercase",
                            marginBottom: "1.2rem",
                        }}>
                            Experience
                        </div>
                        <div style={{
                            fontSize: "1.4rem",
                            fontWeight: 800,
                            fontFamily: "Inter, sans-serif",
                            color: "white",
                            letterSpacing: "-0.03em",
                            marginBottom: "0.5rem",
                            lineHeight: 1.2,
                        }}>
                            Fresher<br />2026 Graduate
                        </div>
                        <div style={{
                            fontSize: "0.75rem",
                            color: "rgba(255,255,255,0.4)",
                            fontFamily: "Space Mono, monospace",
                            marginBottom: "0.75rem",
                        }}>
                            Infosys Springboard Intern
                        </div>

                    <a
                        href="#projects"
                        onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                        style={{
                            color: "rgba(255,255,255,0.5)",
                            fontSize: "0.85rem",
                            textDecoration: "none",
                            borderBottom: "1px solid rgba(255,255,255,0.2)",
                            paddingBottom: "2px",
                            transition: "all 0.3s",
                            cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = "white"
                            e.currentTarget.style.borderColor = "white"
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = "rgba(255,255,255,0.5)"
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"
                        }}
                    >
                        View Projects
                    </a>
            </div>

            {/* Availability */}
            <div>
                <div style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.18em",
                    color: "rgba(255,255,255,0.3)",
                    textTransform: "uppercase",
                    marginBottom: "1.2rem",
                }}>
                    Availability
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.5rem",
                }}>
                    <div style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#22c55e",
                    }} />
                    <div style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "white",
                    }}>
                        Open to Opportunities
                    </div>
                </div>
                <div style={{
                    color: "rgba(255,255,255,0.3)",
                    fontSize: "0.78rem",
                    fontFamily: "Space Mono, monospace",
                    marginBottom: "0.4rem",
                }}>
                    Kerala, India
                </div>
                <div style={{
                    color: "rgba(255,255,255,0.3)",
                    fontSize: "0.78rem",
                    fontFamily: "Space Mono, monospace",
                }}>
                    © 2026
                </div>
            </div>
        </motion.div>

        {/* Giant Brand Text */ }
    <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        style={{
            textAlign: "center",
            padding: "2rem 0",
            overflow: "hidden",
        }}
    >
        <motion.div
            whileHover={{ color: "rgba(255,255,255,0.12)" }}
            style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(5rem, 14vw, 13rem)",
                letterSpacing: "-0.05em",
                color: "rgba(255,255,255,0.07)",
                textTransform: "lowercase",
                whiteSpace: "nowrap",
                lineHeight: 1,
                cursor: "default",
                transition: "color 0.4s",
            }}
        >
            sahuva
        </motion.div>
    </motion.div>

    {/* Bottom */ }
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "1rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            alignItems: "center",
          }}
        >
          <div style={{
            color: "rgba(255,255,255,0.3)",
            fontSize: "0.78rem",
            fontFamily: "Space Mono, monospace",
          }}>
            Built with React · © 2026 Sahuva S
          </div>

          
          <a
            href="mailto:sahuvqazayyan27@gmail.com"
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "0.9rem",
              fontWeight: 500,
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.25)",
              paddingBottom: "2px",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#ff2a2a"
              e.currentTarget.style.borderColor = "#ff2a2a"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "white"
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"
            }}
          >
            sahuvazayyan27@gmail.com
          </a>

          <div
            style={{
              textAlign: "right",
              color: "rgba(255,255,255,0.3)",
              fontSize: "0.78rem",
              fontFamily: "Space Mono, monospace",
              cursor: "pointer",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "white"}
            onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.3)"}
          >
            Privacy Policy
          </div>
        </motion.div >
      </div >
    </footer >
  )
}