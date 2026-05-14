import { useState, useRef } from 'react'
import Home from '../pages/Home'
import FloatingHearts from '../components/FloatingHearts'

export type ParticleTrigger = string | null

function App() {
  const [screen, setScreen] = useState(0)
  const [forgiven, setForgiven] = useState(false)
  const [particleTrigger, setParticleTrigger] = useState<ParticleTrigger>(null)
  const animKey = useRef(0)

  const goNext = () => {
    animKey.current += 1
    setScreen((s) => s + 1)
    setParticleTrigger(Date.now() + 'soft')
  }

  const handleForgive = () => {
    setForgiven(true)
    setParticleTrigger(Date.now() + 'big')
    setTimeout(() => setParticleTrigger(Date.now() + 'big2'), 1200)
  }

  const handleRestart = () => {
    animKey.current += 1
    setScreen(0)
    setForgiven(false)
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-6 overflow-hidden">
      {/* Background blobs */}
      <div className="fixed w-80 h-80 rounded-full blur-[60px] opacity-20 bg-pink-300 -top-20 -left-20 pointer-events-none z-0" />
      <div className="fixed w-72 h-72 rounded-full blur-[60px] opacity-20 bg-purple-400 -bottom-16 -right-16 pointer-events-none z-0" />
      <div className="fixed w-44 h-44 rounded-full blur-[60px] opacity-15 bg-pink-400 top-1/2 left-3/5 pointer-events-none z-0" />

      <FloatingHearts trigger={particleTrigger} />

      <div className="relative z-10 w-full">
        <Home
          screen={screen}
          forgiven={forgiven}
          animKey={animKey.current}
          onNext={goNext}
          onForgive={handleForgive}
          onRestart={handleRestart}
        />
      </div>
    </div>
  )
}

export default App
