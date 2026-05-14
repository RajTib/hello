import { screens } from '../data/screens'
import ScreenCard from '../components/ScreenCard'
import ProgressDots from '../components/ProgressDots'

interface Props {
  screen: number
  forgiven: boolean
  animKey: number
  onNext: () => void
  onForgive: () => void
  onRestart: () => void
}

export default function Home({ screen, forgiven, animKey, onNext, onForgive, onRestart }: Props) {
  const currentScreen = screens[screen]
  const isLast = screen === screens.length - 1

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-6">
      <div
        key={animKey}
        className="animate-fade-slide max-w-[440px] w-full flex flex-col items-center gap-6"
      >
        <ScreenCard
          data={currentScreen}
          forgiven={forgiven}
          isLast={isLast}
          onNext={onNext}
          onForgive={onForgive}
          onRestart={onRestart}
        />

        <ProgressDots current={screen} total={screens.length} />

        <p className="text-[11px] text-pink-300 mt-1">made with 💕 just for you</p>
      </div>
    </div>
  )
}
