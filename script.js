let birthdayphrases = ["Today is mom's birthday", "Today is Nekesa's birthday", "Today is Aunty Adosh's birthday",
"Today is Mama's birthday"];



let findbirthday = (param) =>{

    switch (param) {
        case "17th of August": console.log(birthdayphrases[1]);
            
            break;

            case "2nd of December": console.log(birthdayphrases[2]);
            
            break;

            case "4th of May": console.log(birthdayphrases[0]);
            
            break;
    
        default: console.log(birthdayphrases[3])
            break;
    }
}

findbirthday('25th of January');