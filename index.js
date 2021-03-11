// Code your solutions in this file
const recipients = ["Lisa", "Kaitlin", "Jan"];
 
function writeCards(recipients) {
  let i=0;
  while (i < recipients.length) {
    console.log(`Thank you, ${recipients[i]}, for the wonderful surprise gift!`);
    i++;
  }
 
  return recipients;
}
 
writeCards(recipients);