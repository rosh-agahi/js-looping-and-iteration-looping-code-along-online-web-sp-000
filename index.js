// Code your solutions in this file
let recipients = [];
 
function writeCards(recipients) {
  for (let i = 0; i < recipients.length; i++) {
    console.log(`Thank you, ${recipients[i]}, for the wonderful birthday surprise!`);
  }
 
  return recipients;
}
 
writeCards(recipients);