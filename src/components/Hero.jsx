import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSpilit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      stagger: 0.06,
      ease: "expo.out",
    });

    gsap.from(paragraphSpilit.lines, {
      y: 40,
      opacity: 0,
      duration: 1.5,
      ease: "expo.out",
      stagger: 0.4,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(
        ".left-leaf",
        {
          y: -200,
        },
        "0",
      )
      .to(
        ".right-leaf",
        {
          y: 200,
        },
        "0",
      );
  }, []);

  return (
    <section id="hero" className="noisy">
      <h1 className="title">MOJITO</h1>
      <img
        className="left-leaf"
        src="/images/hero-left-leaf.png"
        alt="left-leaf"
      />
      <img
        className="right-leaf"
        src="/images/hero-right-leaf.png"
        alt="right-leaf"
      />

      <div className="body">
        <div className="content">
          <div className="space-y-5 hidden md:block">
            <p>Cool. Crisp. Classic.</p>
            <p className="subtitle">
              sip the spirit <br /> of summer
            </p>
          </div>

          <div className="view-cocktails">
            <p className="subtitle">
              Every cocktail on our menu is a blend of premium ingredients,
              creative flair, and timeless recipes – designed to delight your
              senses.
            </p>
            <a href="#cocktails">View Cocktails</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
