import React from 'react'
import { navLinks } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const NavBar = () => {

useGSAP(() => {
const navTween = gsap.timeline({
    scrollTrigger:{
        trigger: 'nav',
        start:'bottom top'
    }
})

navTween.fromTo('nav',
    {backgroundColor:'transparent'},
    {
        backgroundColor:'rgba(0,0,0,0.31)',
        backdropFilter: 'blur(10px)',
        background:'rgba(0,0,0,0.31)',
        duration:1,
        ease:'power1.out',
    })
}, [])

  return (
    <nav>
      <div>
        <a href="#home" className='flex item-center gap-2'>
            <img src="/images/logo.png" alt="logo image" />
            <p>Velvet Pour</p>
        </a>

        <ul>
            {navLinks.map((link)=>(
                <li key={link.id}>
                    <a href={`#${link.id}`}>{link.title}</a>
                </li>
            ))}
        </ul>

      </div>
    </nav>
  )
}

export default NavBar