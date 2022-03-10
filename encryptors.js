/* Declare and export the functions here.you 
can assign module.exports to an object of the 
exported values:
*/
// Encryption Functions

const caesarCipher = (str, amount = 0) => {
    if (amount < 0) {
      return caesarCipher(str, amount + 26);
    }
    let output = '';
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      // O método match() retorna uma correspondência 
      //entre uma string com uma expressão regular.
      if (char.match(/[a-z]/i)) {
      // O método charCodeAt() retorna um número inteiro entre 0 e 65535 
      //que representa a unidade de código UTF-16 no índice fornecido.   
        let code = str.charCodeAt(i);
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + amount) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + amount) % 26) + 97);
        }
      }
      output += char;
    }
    return output;
  };
  
  const symbolCipher = (str) => {
    const symbols = {
      'i': '!',
      '!': 'i',
      'l': '1',
      '1': 'l',
      's': '$',
      '$': 's',
      'o': '0',
      '0': 'o',
      'a': '@',
      '@': 'a',
      'e': '3',
      '3': 'e',
      'b': '6',
      '6': 'b'
    }
  
    let output = '';
    for (let i = 0; i < str.length; i++) {
      let char = str.toLowerCase()[i];
  
      if (symbols[char]) {
        output += symbols[char]
      } else {
        output += char;
      }
    }
    return output;
  }
  
  const reverseCipher = (sentence) => {
    /*O método split() divide uma String em uma lista ordenada
     de substrings, coloca essas substrings em um array e 
     retorna o array. A divisão é feita procurando um padrão, 
     onde o padrão é fornecido como o primeiro parâmetro na 
     chamada do método.*/
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
    /*O método reverse() inverte os itens de um array. O primeiro 
    elemento do array se torna o último e o último torna-se o primeiro.
     */  
      words[i] = words[i].split('').reverse().join('');
    }
     return words.join(' ');
  };
  
  /*The module.exports in Node.js is used to export
   any literal, function or object as a module. 
   It is used to include JavaScript file into node.js applications.
    The module is similar to variable that is used to represent 
    the current module and exports is an object that is exposed as a module.
  */
  module.exports = {
    caesarCipher,
    symbolCipher,
    reverseCipher
  };
  
  