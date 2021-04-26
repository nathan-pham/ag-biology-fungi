// overlay
gsap.to(".overlay .panel", { duration: 1, y: "-100%", stagger: 0.3, ease: Expo.easeInOut })

// wavy mushroom
gsap.fromTo(".image-wrapper img", { transformOrigin: "0% 100%", skewX: "1deg" }, { skewX: "-1deg", repeat: -1, duration: 1, ease: "linear", yoyo: true })