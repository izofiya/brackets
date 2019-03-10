
module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 === 0) {
    let result = [];
    let newArray = str.split('');
    for(var j = 0; j < newArray.length; j++){
        for(var i = 0; i < bracketsConfig.length; i++){
            if (result[result.length - 1] === bracketsConfig[i][0] && newArray[j] === bracketsConfig[i][1]) {
              result.pop();
            } else {
                if (newArray[j] === bracketsConfig[i][0]) {
                  result.push(newArray[j]);
                }
            }
        }
    }
    return result.length === 0;
  } else if (str.length % 2 === 1) {
    return false;
}
}