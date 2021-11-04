function checkVocal(string){
  let word = string.toLowerCase()
  if(/[aeiouy]/.test(word)){
       return true
    } else {
       return false
    }
  }
const string = prompt('Enter vocal: ');
const result = checkVocal(string);
console.log(result);

console.log(checkVocal('iueoaAAaAA')) //output: true
console.log(checkVocal('iuesdoaAAasfaAA')) //output: false
console.log(checkVocal('iEEuoaAAaAA')) //output: true
console.log(checkVocal('iuesdoaAAasfaAA')) //output: false
console.log(checkVocal('iueoaAIIUUaAA')) //output: true
console.log(checkVocal('iuedoaAAasfaAAmmCCB')) //output: false
