window.addEventListener("scroll", ()=>{
    let scrolledTop = window.scrollY;     // window.scrollY Page ke top se aap kitne pixels neeche scroll kar chuke hain. Example: 500px
    let totalHeight = document.documentElement.scrollHeight;    // document.documentElement.scrollHeight Poore document ki total height, including the part outside the viewport. Example: 3000px
    let visibleHeight = window.innerHeight;     // window.innerHeight Browser viewport mein ek baar mein jitna page visible hai. Example: 1000px
    let scrollableHeight = totalHeight - visibleHeight;

    let percentage = scrolledTop / scrollableHeight * 100;
    document.querySelector(".pgr").style.width = percentage + "%"
})