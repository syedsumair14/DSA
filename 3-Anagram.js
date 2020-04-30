function isAnagram(str1, str2){
    if(str1.length !== str2.length) return false

    let stringOne = {}
    let stringTwo = {}

    for(char of str1){
        stringOne[char] = (stringOne[char] || 0) + 1
    }

    for(char of str2){
        stringTwo[char] = (stringTwo[char] || 0) + 1
    }

    for(key in stringOne){
        if(stringTwo[key] !== stringOne[key]) return false
    }

    return true
}

isAnagram('texttwisttime', 'timetwisttext')