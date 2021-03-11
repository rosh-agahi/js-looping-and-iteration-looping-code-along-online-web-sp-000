// Code your solutions in this file
 
function writeCards(recipients) {
  let recipients = [ ];
  let i=0;
  while (i < recipients.length) {
    console.log(`Thank you, ${recipients[i]}, for the wonderful surprise gift!`);
    i++;
  }
 
  return recipients;
}
 
writeCards(recipients);

function countDown(num) {
  while (num > 0) {
    console.log(num--);
  }
  console.log(num);
}