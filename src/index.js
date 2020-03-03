module.exports = function check(string, bracketsConfig) {
  let brackets = bracketsConfig.map(item => item.reduce((acc, cur) => acc + cur));
  let str = string;

  for (let i = str.length; i >= 0 ; i--) {
    brackets.forEach(item => {
      str = str.replace(item, '')
    });
    
    if(str.length === 0) return true;
  }

  return false
}