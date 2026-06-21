import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        const handleResize = () => setIsMobile(window.innerWidth < 768)
        window.addEventListener("scroll", handleScroll)
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const links = ["Home", "About", "Certifications", "Skills", "Projects", "Contact"]

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 3, ease: [0.16, 1, 0.3, 1] }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    zIndex: 9999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: scrolled ? "0.8rem 3rem" : "1.2rem 3rem",
                    background: scrolled ? "rgba(17,17,17,0.9)" : "transparent",
                    backdropFilter: scrolled ? "blur(20px)" : "none",
                    borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
                    transition: "all 0.4s ease",
                }}
            >
                <a
                    href="#"
                    style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 900,
                        fontSize: "1.5rem",
                        color: "white",
                        textDecoration: "none",
                        letterSpacing: "-0.02em",
                    }}
                >
                    Sahuva<span style={{ color: "#ff2a2a" }}>.</span>
                </a>

                {!isMobile && (
                    <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none", margin: 0, padding: 0 }}>
                        {links.map((link) => (
                            <li key={link}>
                                <a
                                    href={"#" + link.toLowerCase()}
                                    style={{
                                        color: "rgba(255,255,255,0.75)",
                                        fontSize: "0.9rem",
                                        fontWeight: 500,
                                        textDecoration: "none",
                                        letterSpacing: "0.02em",
                                        transition: "color 0.3s",
                                    }}
                                    onMouseEnter={(e) => (e.target.style.color = "white")}
                                    onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.75)")}
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}

                {!isMobile && (
                    <button
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        style={{
                            background: "rgba(255,255,255,0.1)",
                            border: "1px solid rgba(255,255,255,0.25)",
                            color: "white",
                            padding: "0.55rem 1.5rem",
                            borderRadius: "50px",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            cursor: "pointer",
                            letterSpacing: "0.05em",
                            backdropFilter: "blur(10px)",
                            fontFamily: "Space Grotesk, sans-serif",
                            transition: "all 0.3s",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(255,255,255,0.2)"
                            e.currentTarget.style.boxShadow = "0 0 20px rgba(255,42,42,0.3)"
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "rgba(255,255,255,0.1)"
                            e.currentTarget.style.boxShadow = "none"
                        }}
                    >
                        Hire Me

                    </button>
                )}

                {isMobile && (
                    <div
                        onClick={() => setMenuOpen(!menuOpen)}
                        style={{
                            cursor: "pointer",
                            display: "flex",
                            flexDirection: "column",
                            gap: "5px",
                            padding: "4px",
                        }}
                    >
                        {[0, 1, 2].map((i) => (
                            <motion.span
                                key={i}
                                style={{
                                    display: "block",
                                    width: "24px",
                                    height: "2px",
                                    background: "white",
                                    borderRadius: "2px",
                                }}
                                animate={
                                    menuOpen
                                        ? i === 1
                                            ? { opacity: 0 }
                                            : i === 0
                                                ? { rotate: 45, y: 7 }
                                                : { rotate: -45, y: -7 }
                                        : { rotate: 0, y: 0, opacity: 1 }
                                }
                                transition={{ duration: 0.3 }}
                            />
                        ))}
                    </div>
                )}
            </motion.nav>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100vh",
                            background: "#ff2a2a",
                            zIndex: 9998,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "2.5rem",
                        }}
                    >
                        {links.map((link) => (
                            <a
                                key={link}
                                href={"#" + link.toLowerCase()}
                                onClick={() => setMenuOpen(false)}
                                style={{
                                    color: "white",
                                    fontSize: "2.5rem",
                                    fontWeight: 800,
                                    textDecoration: "none",
                                    fontFamily: "Inter, sans-serif",
                                    letterSpacing: "-0.03em",
                                }}
                            >
                                {link}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}