onmessage = function (e){
    const ans = e.data.reduce((acc, item) => acc+item,0);   // ye add karega same reduce hi h, don't panic when see (,0) , 0 accumulator ki pehli value h
    this.postMessage(ans);   // send data to main js file, this ke sath call matlab worker's global context ki baat ho rhi h
}
