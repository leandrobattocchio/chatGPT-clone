import { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css'

const TypeMessageEffect = ({ text }) => {
  const [typingEffect, setTypingEffect] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalTiming = Math.floor(Math.random() * 170) + 70

    const interval = setInterval(() => {
      if (!text.length) return
      if (currentIndex >= text.length) {
        clearInterval(interval)
        return
      }

      const index = text.indexOf(' ', currentIndex + 1)

      if (index < 0) {
        setTypingEffect(text)
        setCurrentIndex(text.length)
        return
      }

      setTypingEffect(text.slice(0, index))
      setCurrentIndex(index)
    }, intervalTiming)

    return () => clearInterval(interval)
  }, [typingEffect, currentIndex, text])

  return (
    <>
      {typingEffect}
      {text.length > 0 && typingEffect.length === text.length ? (
        ''
      ) : (
        <span className={styles.typingEffect}> ▋</span>
      )}
    </>
  )
}

export default TypeMessageEffect
