import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Preloader() {
    const [visible, setVisible] = useState(true)
    const [fillAnim, setFillAnim] = useState(false)

    useEffect(() => {
        setTimeout(() => setFillAnim(true), 300)
        setTimeout(() => setVisible(false), 2800)
    }, [])

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="fixed inset-0 z-[100000] flex items-center justify-center"
                    style={{ background: '#ff2a2a' }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                >
                    <div className="relative select-none">
                        {/* Background dark text */}
                        <span
                            style={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 900,
                                fontSize: 'clamp(4rem, 12vw, 9rem)',
                                letterSpacing: '-0.04em',
                                color: 'rgba(0,0,0,0.2)',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                whiteSpace: 'nowrap',
                            }}
                        >
                            Sahuva
                        </span>

                        {/* White fill text */}
                        <motion.span
                            style={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 900,
                                fontSize: 'clamp(4rem, 12vw, 9rem)',
                                letterSpacing: '-0.04em',
                                color: 'white',
                                position: 'relative',
                                whiteSpace: 'nowrap',
                                display: 'block',
                            }}
                            initial={{ clipPath: 'inset(100% 0 0 0)' }}
                            animate={fillAnim ? { clipPath: 'inset(0% 0 0 0)' } : {}}
                            transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1] }}
                        >
                            Sahuva
                        </motion.span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}