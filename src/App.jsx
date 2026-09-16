import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import {ScrollTrigger,SplitText } from 'gsap/all'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  return (
    <main>
     <NavBar />
     <Hero/>
     <div className="h-dvh"></div>
    </main>
  )
}

export default App