import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

const useInput = () => {
  const [name, setName] = useState<string>('')
  const [number, setNumber] = useState<string>('')
  const [comment, setComment] = useState<string>('')

  const [error, setError] = useState<number>(0)

  const sumbitButton = () => {
    const checkNumber =
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/

    if (name === '' && (number === '' || !checkNumber.test(number))) {
      setError(1)
      return
    }

    if (name === '') {
      setError(2)
      return
    }

    if (number === '' || !checkNumber.test(number)) {
      setError(3)
      return
    }

    setError(0)
    alert('все ок')
  }

  const item1 = useRef(null)
  const item2 = useRef(null)
  const item3 = useRef(null)

  useEffect(() => {
    const el1 = item1.current
    const el2 = item2.current
    const el3 = item3.current

    gsap.fromTo(
      el1,
      { y: 0 },
      {
        y: -1000,
        duration: 1,
        scrollTrigger: {
          trigger: el1,
          start: '0px 100%',
          scrub: 2,
          toggleActions: 'restart pause reverse pause',
        },
      },
    )
    gsap.fromTo(
      el2,
      { y: 0 },
      {
        y: -700,
        duration: 1,
        scrollTrigger: {
          trigger: el2,
          start: '100px 100%',
          scrub: 2,
        },
      },
    )
    gsap.fromTo(
      el3,
      { y: 0 },
      {
        y: -300,
        duration: 1,
        scrollTrigger: {
          trigger: el3,
          start: '200px 100%',
          scrub: 2,
        },
      },
    )
  }, [])

  return {
    name,
    setName,
    number,
    setNumber,
    comment,
    setComment,
    sumbitButton,
    error,
    item1,
    item2,
    item3,
  }
}

export default useInput
