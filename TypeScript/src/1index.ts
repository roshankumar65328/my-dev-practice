function greet(person: string): string {
    return `Hello ${person}, Welcome to this new era..`
}

const username: string = "Roshan Kumar";
console.log(greet(username));



// sabhi error ko ignore karke sirf iss file ko chalana hai to
// npx tsc --ignoreConfig src/1index.ts 
// uper wale code se compile ussi folder me karega specific file ko

// node src/1index.js



// npx tsc 
// Agar rootDir , outDir set hai to isse src wale file ke sabhi file ek sath compile ho jayegi 

// node dist/1index.js 