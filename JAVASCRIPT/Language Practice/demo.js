let peoples = {
    roshan: "",
    prithvi: "",
    popo: ""
};

for(const key in peoples){
    const currMarks = prompt("enter the student's marks");
    peoples[key] = currMarks;
    
    
}
console.log(peoples);