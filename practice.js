let month = 11 ;
        let monthName ;
         switch (month) {
            case 1:
                 monthName="January";
                break;
         
          case 2:
                 monthName="Febuary";
                break;
         
            case 3:
                 monthName="March";
                break;
         
            case 4:
                 monthName="April";
                break;
         
            case 5:
                 monthName="May";
                break;
         
            case 6:
                 monthName="Jane";
                break;
         
            case 7:
                 monthName="July";
                break;
            case 8:
                 monthName="August";
                break;
            case 9:
                 monthName="September";
                break;
            case 10:
                 monthName="Octobar";
                break;
            case 11:
                 monthName="November";
                break;
            case 12:
                 monthName="December";
                break;
         
            default:
            monthName = "Invalid Month";
                break;

            }
            console.log(monthName)
    
    let n = 4
   let divide = (n%2===0 && n%3===0)? n+ " is divisibal by both 2 and 3":
   (n%3===0)? n + " is divsible by 3 but not 2" :
   (n%2===0)? n + " is divsible 2 but not 3" :
   n+ " is not divisibal by both 2 and 3";

console.log(divide)

let age = 1
let canDrive = (age<18)?"You cannot drive":
(age>=18)?"Youu can drive ":
"Write vlid age . ";
console.log(canDrive)


