//Find number of characters
function NumberOfCharacters(str) {
    let result = {}
    for (let char of str) {
        char = char.toLowerCase()
        if(isAlphaNumerc(char)){
          result[char] = ++result[char] || 1  
        } 
    }
    return result
}

function isAlphaNumerc(character){
    let code = character.charCodeAt(0)
    if(!(code > 47 && code < 58) &&  //Checks between 0 and 9
        !(code > 64 && code < 91) && //checks for lowercase alpha
        !(code >96 && code < 123)){
          return false  
        } 
        return true
}

NumberOfCharacters('hello my name is sumair AND!')