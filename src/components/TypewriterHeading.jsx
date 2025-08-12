import { useState, useEffect } from 'react'

function TypewriterHeading({ text, speed = 100 }) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)
      
      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, speed])

  return (
    <span className="typewriter-heading">
      {displayText}
      <span className="cursor">|</span>
    </span>
  )
}

export default TypewriterHeading
