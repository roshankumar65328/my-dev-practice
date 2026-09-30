let response: any = '42'     // 42 likhne ke baad bhi ye response ka type 'any' hi rehne dega

let numericLength: number = (response as string).length    // normal response.lengh ki jageh hum (response as string) likhkar hum guarantee lete hai ki bhai ye string hi hai, it is called forcefully type assertion


type Book = {
    name: string;
};

let bookString = '{"name": "The game changer"}';
let bookObject = JSON.parse(bookString) as Book    // JSON.parse -> string to object conversion, ab oject to ban gaya lekin sabhi object to 'Book' type ke honge nahi to 'as' assume karta hai ki isko 'Book' type ka maano, isme "name" variable bhi hai/wese name nhi hota tab bhi ye maan leta, type Assertion hai lekin actual checking nahi krta

console.log(bookObject);

const inputElement = document.getElementById("username") as HTMLInputElement;

let value: any  // TypeScript, is variable ka type check mat karo. Mujhe jo karna hai karne do

value = "chai"
value = [1,2,3]
value = 2.5
value.toUpperCase()    // production me jaake error dega kyuki '2.5' ka 'toUpperCase' method hota hi nahi

let newValue: unknown   // TypeScript, mujhe abhi nahi pata ki is variable ke andar kya hai. Isliye pehle check karo, phir operation karna.

newValue = "chai"
// newValue = [1,2,3]
// newValue = 2.5
// newValue.toUpperCase()   // TypeScript -> Bhai, tujhe kaise pata ki newValue string hai? agar '2.5' hui to 'toUpperCase' kaise chalega

if(typeof newValue === "string"){  // type 'unknown' dalne ke baad, type check karne ke baad hi uspe method laga sakte hai
    newValue.toUpperCase(); 
}

try{

}catch(error){
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error", error);
}


const data: unknown = "Noni Kumar"
const serData: string = data as string

  
type Role = "admin" | "user"

function redirectBasedOnRole(role: Role): void {
    if(role === "admin"){
        console.log("Redirecting to Dashboard");
        return
    }
    if(role === "user"){
        console.log("Redirecting to User Dashboard")
        return
    }
    role;
}

redirectBasedOnRole("admin")
redirectBasedOnRole("user")


function neverReturn(): never{  // Ye function normally kabhi complete nahi hoga aur kabhi koi value return nahi karega
    while(true){}       // never ending loop like our server never ends
}