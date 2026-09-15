var tl = gsap.timeline()

tl.from(".nav h3",{
    y: -20,
    duration:0.4,
    opacity:0,
    stagger: 0.2
})

tl.from(".hero h1", {
    x: -40,
    duration:0.4,
    opacity:0,
    stagger:0.2
})

tl.from(".heroimg .img1",{
    x:50,
    rotate:5,
    opacity:0,
    duration:0.3,
    // stagger:0.4
})
tl.from(".heroimg .img2",{
    x:50,
    rotate:10,
    opacity:0,
    duration:0.3,
})
tl.from(".heroimg .img3",{
    x:50,
    rotate:15,
    opacity:0,
    duration:0.3,
})


gsap.to(".page2 img", {
    width: "100%",
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
         start: "top 0",
         end: "top -100%",
         pin: true,
         scrub: 2
    }
})
