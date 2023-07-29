/// 1 ///

const theEvent = "Birthday";
const names = ["Guadalupe", "Ollie", "Aki"];
function writeCards(p_names, p_event) {
  const f_messages = [];
  for (let i = 0; i < p_names.length; i++) {
    f_messages.push(
      `Thank you, ${p_names[i]}, for the wonderful ${p_event} gift!`
    );
  }
  return f_messages;
}
const messages = writeCards(names, theEvent);

/// 2 ///
const number = 10;
function countDown(p_number) {
  let i = p_number;
  while (i >= 0) {
    console.log(i);
    i--;
  }
}
countDown(number);
