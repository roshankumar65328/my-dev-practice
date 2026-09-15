gsap.to(".page2 img",{
    width:"100%",
    scrollTrigger:{
        trigger:".page2",  // pin ke time par trigger paraent hoga, taki parent ke rehte animation ho
        scroller:"body",
        start:"top 0",
        end:"top -100%",
        pin:true,
        scrub:2,
        markers:true
    }
})