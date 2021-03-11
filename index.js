// Code your solutions in this file
const recipients = ["Lisa", "Kaitlin", "Jan"];
 
function writeCards(recipients) {
  for (let i = 0; i < recipients.length; i++) {
    console.log(`Thank you, ${recipients[i]}, for the wonderful birthday surprise!`);
  }
 
  return recipients;
}
 
writeCards(recipients);