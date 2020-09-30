// return a string value with capitalized first characters
function titleCase(str) {
    let words = str.split(" ");
    let newWords = [];
    for (let w of words) {
        newWords.push(w.charAt(0).toUpperCase().concat(w.slice(1).toLowerCase()));
    }
    return newWords.join(' ');  
}

// returns sub arrays from an array
function chunkArrayInGroups(arr, size) {
    let testArray = [...arr];
    let newArray = [];
    for(let i = 0; i < testArray.length; i++){
        newArray.push(arr.splice(0, size));
        if(arr.length <= 0){
            break;
        }
    }
    return newArray;
}

/*feed it a stirng value as args and it will return a new string value using all t
he char values once from the orginal args in random order.*/
const passwordGenerator = function(pass){
    console.log(`orginal password: ${pass}`);
    const length = pass.length;
    pass = pass.split("");
    let final = [];
    for(let i = 0; i < length; i++){
        let random = Math.floor(Math.random() * pass.length);
        final.push(pass[random]);
        pass.splice(random, 1);
    }
    console.log(`new password: ${final.join("")}`);
}
let password = "";
passwordGenerator(password.toLowerCase());


