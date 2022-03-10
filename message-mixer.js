// command line: node message-mixer.js caesar 4
// command line: node message-mixer.js symbol
// command line: node message-mixer.js reverse

// Import the functions from encryptors.js here.
const encryptors = require('./encryptors.js');

const {caesarCipher, symbolCipher, reverseCipher} = encryptors;

// User Input / Output Logic
/////////////////////////////////////////////

const encryptionMethod = getEncryptionMethod();
/*The process.stdin property is an inbuilt application programming
 interface of the process module which listens for the user input.
  The stdin property of the process object is a Readable Stream. 
  It uses on() function to listen for the event.
*/
process.stdin.on('data', (userInput) => {
  displayEncryptedMessage(encryptionMethod, userInput);
});

/* Helper function for determining which cipher method
the user chose when they ran the program. */
function getEncryptionMethod() {
  let encryptionMethod;
  
  /*The process.argv property is an inbuilt application 
  programming interface of the process module which is used 
  to get the arguments passed to the node.js process when 
  run in the command line.*/
  const encryptionType = process.argv[2];  
  if (encryptionType === 'symbol') {
    encryptionMethod = symbolCipher;
  } else if (encryptionType === 'reverse') {
    encryptionMethod = reverseCipher;
  } else if (encryptionType === 'caesar') {
    let amount = Number(process.argv[3]);
    // A função isNaN() determina se o valor é NaN ou não. 
    if (Number.isNaN(amount)) {
      /*Both process.stdout.write and console.log in NodeJS have basic 
      functionality to display messages on the console. Basically 
      console.log implement process.stdout.write while process.stdout.write 
      is a buffer/stream that will directly output in our console. */
      process.stdout.write(`Try again with a valid amount argument. \n`)
      process.exit();  
    }
    encryptionMethod = (str) => caesarCipher(str, amount);
  } 
  else {
    process.stdout.write(`Try again with a valid encryption type. \n`)
    process.exit();
  }

  process.stdout.write('Enter the message you would like to encrypt...\n> ');
  return encryptionMethod;
}

/* Helper function for displaying the encrypted message to the user. */
function displayEncryptedMessage(encryptionMethod, userInput) {
  let str = userInput.toString().trim();    
  let output = encryptionMethod(str);
  process.stdout.write(`\nHere is your encrypted message:\n> ${output}\n`)
  process.exit();
}
