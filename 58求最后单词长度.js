var lengthOfLastWord = function(s) {
    let res= []
    let str = s.trim()
    for(let j = str.length - 1 ; j >=0; j--) {
        if(str[j] == ' ') {
            break
        }else {
            res.unshift(str[j])
        }
    }
    console.log('res.length', res.length)
    return res.length
};
lengthOfLastWord("   fly me   to   the moon  ")