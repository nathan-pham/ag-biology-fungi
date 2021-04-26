// overlay
gsap.to(".overlay .panel", { duration: 0.5, y: "-100%", stagger: 0.1, ease: Expo.easeInOut })

// wavy mushroom
gsap.fromTo(".image-wrapper img", { transformOrigin: "0% 100%", skewX: "1deg" }, { skewX: "-1deg", repeat: -1, duration: 1, ease: "linear", yoyo: true })

const base = (delay) => ({
    duration: 1,
    ease: Expo.easeInOut,
    delay,
    opacity: 1,
    y: 0,
    x: 0
})

// main text
gsap.fromTo(".landing-text h1", { y: 60, opacity: 0 }, base(0.75))
gsap.fromTo(".landing-text p", { y: 60, opacity: 0 }, base(1))
gsap.fromTo(".landing-text a", { y: 60, opacity: 0 }, base(1.25))

// navigation
gsap.fromTo(".navbar li", { y: -100, opacity: 0 }, { ...base(1.5), stagger: 0.1 })

// mushroom
gsap.fromTo(".image-background", { x: "100vw" }, { ...base(1.75), duration: 2 })