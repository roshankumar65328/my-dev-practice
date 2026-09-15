gsap.to(".page2 h1",{
    transform:"translateX(-120vw)",
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        pin:true,
        scrub:2,
        markers:true
    }
})