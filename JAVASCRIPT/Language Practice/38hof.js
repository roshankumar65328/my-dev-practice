// hof - Higher Order Functions
// aisa function jo parameter me (function) accept kare, parent function higher order fn hoga
//  or
// aisa function jo return me function de, it is different from closures- closure must has to use its parent variable


function abcd1 (){    // agar parameter me fn lega to HOF h

}
abcd1(function(){})   // fn ke parameter me fn  ->  HOF h


function abcd2 (){    
    return function (){     // fn ke return me fn  -> HOF h , not must to use parent variable like cloures
    }
}


var arr = [1,2,3,4,5];
arr.forEach(function(e){
    console.log(e);
})

