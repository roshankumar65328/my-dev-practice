// Question of assigning the house of students
// The Magical Sorting Hat:
// Imagine you are creating a magical sorting hat for a wizard school. 
// Implement a JavaScript function that takes an array of student names 
// and assigns them to one of the four houses 
// (Gryffindor (length less than 6), Hufflepuff(length less than 8), 
// Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) 
// based on the length of their names.


let students = ["rosh","ram","emanual","ravindranathan","tutankhamun","khalnayak","deeljeet","asmitamenriya"]

let houses = []

for(const student of students){
    if(student.length < 6){
        houses.push("Gryffinder")
    }else if(student.length > 8 & student.length <11){
        houses.push("Hufflepuff")
    }
    else if(student.length > 11 & student.length <14){
        houses.push("Ravenclaw")
    }else{
        houses.push("Slytherin")
        
    }
}

console.log(houses);
// console.log(typeof(houses));   // object

