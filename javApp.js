const tl = gsap.timeline({defaults: {ease: "Power1.easeOut"}})

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".actionSlider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro-launch", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".centered-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".belowMid", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
