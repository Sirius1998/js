const caesarCipher = function(text, change){
    const upper = [];
    const lower = [];

    for(let i = 0; i < text.length; i++){
        if(text[i] === text[i].toUpperCase()){
            upper.push(text[i]);
        }
        else{
            lower.push(text[i]);
        }
    }

    const upperAscii = upper.map((x) => x.charCodeAt(0));
    const lowerAscii = lower.map((x) => x.charCodeAt(0));
    let uRes = "";
    let lRes = "";
    let result = "";

    for(let i = 0; i < upper.length; i++){
        let uAscii = upperAscii[i] + change;
        if(uAscii > 90){
            let value = Math.abs(90 - uAscii);
            if(value === 1){
                value = 65;
                let result = String.fromCharCode(value);
                lRes += result;
            }
            else{
                value += 65;
                let result = String.fromCharCode(value);
                lRes += result;
            }
        }
        else{
            result = String.fromCharCode(uAscii);
            uRes += result;
        }
    }

    for(let i = 0; i < lower.length; i++){
        let lAscii = lowerAscii[i] + change;
        if(lAscii > 122){
            let value = Math.abs(122 - lAscii);

            if(value === 1){
                value = 97;
                let result = String.fromCharCode(value);
                lRes += result;
            }
            else{
                value += 97;
                let result = String.fromCharCode(value);
                lRes += result;
            }
        }
        else{
            result = String.fromCharCode(lAscii);
            lRes += result;
        }
    }
    const cipher = uRes.concat(lRes);
    console.log(cipher);
};

caesarCipher("Zbvcyt", 1);