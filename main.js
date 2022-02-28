const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnop';
const number = '0123456789'

let settingLength = 16;

function generateString(length) {
  let result = '';
  const uppercaseLength = uppercase.length;
  const lowercaseLength = lowercase.length;
  const numberLength = number.length;
  for ( let i = 0; i < length; i++ ) {
    result += 'https://discord.gift/';
    for ( let i = 0; i < 16; i++ ) {
      let randInt = Math.floor(Math.random() * 3);
      if (randInt === 0) {
        result += uppercase.charAt(Math.floor(Math.random() * uppercaseLength));
      } else {
        if (randInt === 1) {
          result += lowercase.charAt(Math.floor(Math.random() * lowercaseLength));
        } else {
          if (randInt === 2) {
            result += number.charAt(Math.floor(Math.random() * numberLength));
          }
        }
      }
    }
    result += '\n';
  }
  return result;
}

function start(lengthsetting) {
  const raw = (generateString(lengthsetting));
  const str = raw;
  const text = document.querySelector(".text");
  const input = document.querySelector(".input");
  
  function populateText(str) {
    str.split("").map(letter => {
      const span = document.createElement("span");
      span.innerText = letter;
      text.appendChild(span);
    });
  }
  populateText(str);
}

function updateSettings() {
  if (document.getElementById("lengthInput").value.length == 0) {
    window.alert('Please input values in the setting boxes before generating a level.')
  } else {
    let settingLength = document.getElementById("lengthInput").value;
    start(settingLength);
  }
}
