// Code your solutions in this file
const recipients = ["Ada", "Brendan", "Ali"];
 
function writeCards(recipients) {
  for (let i = 0; i < recipients.length; i++) {
    console.log(`Thank you, ${recipients[i]}, for the wonderful birthday gift`);
  }
 
  return recipients;
}
 
writeCards(recipients);