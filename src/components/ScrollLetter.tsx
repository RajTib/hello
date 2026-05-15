import { useState } from 'react'

// ✏️ FILL THIS IN — your full apology letter text
const LETTER_TEXT = `Hey,
I'm so so soooo sorrryy for missing the timing... I know you wished me right at 12 and I missed it im really sorry...
I really realllyy value you and I am sorryyy 😭
Please tell me any other way i can make this right to you
`

interface Props {
    isOpen: boolean
    onClose: () => void
}

export default function ScrollLetter({ isOpen, onClose }: Props) {
    return (
        <>
            {/* Backdrop */}
            <div
                onClick={onClose}
                className={`fixed inset-0 z-40 transition-all duration-500 ${isOpen ? 'bg-black/40 backdrop-blur-sm pointer-events-auto' : 'bg-transparent pointer-events-none'
                    }`}
                style={{ opacity: isOpen ? 1 : 0 }}
            />

            {/* Scroll wrapper */}
            <div
                className={`fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none`}
                style={{ opacity: isOpen ? 1 : 0, transition: 'opacity 0.3s ease' }}
            >
                <div
                    className="relative pointer-events-auto"
                    style={{
                        width: '100%',
                        maxWidth: 520,
                        transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.85) translateY(40px)',
                        transition: 'transform 0.5s cubic-bezier(.175,.885,.32,1.275), opacity 0.3s ease',
                    }}
                >
                    {/* Top scroll rod */}
                    <ScrollRod position="top" />

                    {/* Scroll body */}
                    <div
                        style={{
                            background: 'linear-gradient(160deg, #fdf6e3 0%, #f5e6c0 40%, #ede0b0 70%, #e8d89a 100%)',
                            borderLeft: '3px solid #c9a84c',
                            borderRight: '3px solid #c9a84c',
                            padding: '0 28px',
                            position: 'relative',
                            overflow: 'hidden',
                            maxHeight: isOpen ? '65vh' : '0px',
                            transition: 'max-height 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                            overflowY: isOpen ? 'auto' : 'hidden',
                            boxShadow: 'inset 0 0 60px rgba(180,140,60,0.15)',
                        }}
                    >
                        {/* Parchment texture overlay */}
                        <div
                            style={{
                                position: 'absolute',
                                inset: 0,
                                backgroundImage: `
                    repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 28px,
                    rgba(180,140,60,0.08) 28px,
                    rgba(180,140,60,0.08) 29px
                    )
                `,
                                pointerEvents: 'none',
                                zIndex: 0,
                            }}
                        />
                        {/* Aged edge vignette */}
                        <div
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'radial-gradient(ellipse at center, transparent 60%, rgba(140,100,30,0.18) 100%)',
                                pointerEvents: 'none',
                                zIndex: 0,
                            }}
                        />

                        {/* Letter content */}
                        <div style={{ position: 'relative', zIndex: 1, padding: '28px 8px 36px' }}>
                            {/* Wax seal decoration top */}
                            <div style={{ textAlign: 'center', marginBottom: 20 }}>
                                <span style={{ fontSize: 28 }}>✦</span>
                            </div>

                            {/* Letter body */}
                            <div
                                style={{
                                    fontFamily: "'Lora', serif",
                                    fontSize: 15,
                                    lineHeight: 1.95,
                                    color: '#3d2b00',
                                    whiteSpace: 'pre-wrap',
                                    letterSpacing: '0.01em',
                                }}
                            >
                                {LETTER_TEXT}
                            </div>

                            {/* Bottom flourish */}
                            <div style={{ textAlign: 'center', marginTop: 28, fontSize: 22, opacity: 0.5 }}>
                                ❧
                            </div>
                        </div>
                    </div>

                    {/* Bottom scroll rod */}
                    <ScrollRod position="bottom" />

                    {/* Close button */}
                    {isOpen && (
                        <button
                            onClick={onClose}
                            style={{
                                position: 'absolute',
                                top: -14,
                                right: -14,
                                width: 32,
                                height: 32,
                                borderRadius: '50%',
                                background: '#c9a84c',
                                border: '2px solid #a07830',
                                color: '#fff',
                                fontSize: 14,
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                                zIndex: 10,
                                fontFamily: 'sans-serif',
                                lineHeight: 1,
                                transition: 'transform 0.15s',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
                            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                        >
                            ✕
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}

function ScrollRod({ position }: { position: 'top' | 'bottom' }) {
    const isTop = position === 'top'
    return (
        <div style={{ position: 'relative', height: 28, zIndex: 2 }}>
            {/* Main rod */}
            <div
                style={{
                    position: 'absolute',
                    left: -10,
                    right: -10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    height: 22,
                    borderRadius: 11,
                    background: 'linear-gradient(180deg, #e8c96a 0%, #c9a84c 40%, #a07830 70%, #b8922a 100%)',
                    boxShadow: '0 3px 10px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)',
                }}
            />
            {/* Left knob */}
            <div
                style={{
                    position: 'absolute',
                    left: -18,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 18,
                    height: 28,
                    borderRadius: '50% 30% 30% 50% / 50%',
                    background: 'linear-gradient(180deg, #e8c96a, #a07830)',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
                }}
            />
            {/* Right knob */}
            <div
                style={{
                    position: 'absolute',
                    right: -18,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 18,
                    height: 28,
                    borderRadius: '30% 50% 50% 30% / 50%',
                    background: 'linear-gradient(180deg, #e8c96a, #a07830)',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
                }}
            />
            {/* Highlight line on rod */}
            <div
                style={{
                    position: 'absolute',
                    left: -8,
                    right: -8,
                    top: '30%',
                    height: 3,
                    borderRadius: 2,
                    background: 'rgba(255,255,255,0.35)',
                    pointerEvents: 'none',
                }}
            />
        </div>
    )
}
