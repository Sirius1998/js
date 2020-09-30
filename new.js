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


