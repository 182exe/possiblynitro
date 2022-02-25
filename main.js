const vowels = 'aeiou';
const consonents = 'bcdfghjklmnprstvw';
const rares = 'qxzy';

var settingLength = 15;
var settingTime = 3;

function generateString(length) {
  let result = '';
  const vowelsLength = vowels.length;
  const consonentsLength = consonents.length;
  const raresLength = rares.length;
  for ( let i = 0; i < length; i++ ) {
    let randInt = Math.floor(Math.random() * 19);
    if (randInt === 0) {
      result += rares.charAt(Math.floor(Math.random() * raresLength));
      result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
      result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
      result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
      result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
    } else {
      if (randInt === 1) {
        result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
        result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
        result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
        result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
        result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
      } else {
        if (randInt === 2) {
          result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
          result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
          result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
          result += rares.charAt(Math.floor(Math.random() * raresLength));
        } else {
          if (randInt === 3) {
            result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
            result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
            result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
            result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
            result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
            result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
          } else {
            if (randInt === 4) {
              result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
              result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
              result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
            } else {
              if (randInt === 5) {
                result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
              } else {
                if (randInt === 6) {
                  result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                  result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                  result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                  result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                  result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                  result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                  result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                  result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                  result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                } else {
                  if (randInt === 7) {
                    result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                    result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                    result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                    result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                    result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                    result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                  } else {
                    if (randInt === 8) {
                      result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                      result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                      result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                    } else {
                      if (randInt === 9) {
                        result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                        result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                        result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                        result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                      } else {
                        if (randInt === 10) {
                        result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                        result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                        result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                        result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                        result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                        result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                        } else {
                          if (randInt === 11) {
                            result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                            result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                            result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                            result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                            result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                            result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                            result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                            result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                            result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                            result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                            result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                          } else {
                            if (randInt === 12) {
                              result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                              result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                              result += rares.charAt(Math.floor(Math.random() * raresLength));
                              result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                              result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                              result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                              result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                            } else {
                              if (randInt === 13) {
                                result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                                result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                                result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                                result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                                result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                                result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                                result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                                result += rares.charAt(Math.floor(Math.random() * raresLength));
                              } else {
                                if (randInt === 14) {
                                  result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                                  result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                                  result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                                  result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                                  result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                                } else {
                                  if (randInt === 15) {
                                    result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                                    result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                                    result += rares.charAt(Math.floor(Math.random() * raresLength));
                                  } else {
                                    if (randInt === 16) {
                                      result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                                      result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                                      result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                                    } else {
                                      if (randInt === 17) {
                                        result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                                        result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                                      } else {
                                        if (randInt === 18) {
                                          result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                                          result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
                                          result += consonents.charAt(Math.floor(Math.random() * consonentsLength));
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  randInt2 = Math.floor(Math.random() * 5);
  if (randInt2 === 0) {
    let randInt3 = Math.floor(Math.random() * 6);
    if (randInt3 === 0) {
      result += '!';
      result += ' ';
    } else {
      if (randInt3 === 1) {
        result += '.';
        result += ' ';
      } else {
        if (randInt3 === 2) {
          result += '?';
          result += ' ';
        } else {
          if (randInt3 === 3) {
            result += ',';
            result += ' ';
          } else {
            if (randInt3 === 4) {
              result += ',';
              result += ' ';
            } else {
              if (randInt3 === 5) {
                result += '.';
                result += ' ';
              }
            }
          }
        }
      }
    }
  } else {
    result += ' ';
  }
  }
  return result;
}

function start(lengthsetting,timesetting) {
  const raw = (generateString(lengthsetting));
  const raw2 = raw.trim();
  const raw3 = raw2 + '.'
  const str = raw3.charAt(0).toUpperCase() + raw3.slice(1);
  const text = document.querySelector(".text");
  const input = document.querySelector(".input");
  const progressBar = document.querySelector(".progress-bar");
  
  var time = str.length / timesetting;
  var totalTime = Math.round(time);
  var css = time+"s animate linear";
  var javatime = time*1000;
  
  let timer = null;
  
  const charEls = [];
  
  function populateText(str) {
    str.split("").map(letter => {
      const span = document.createElement("span");
      span.innerText = letter;
      text.appendChild(span);
      charEls.push(span);
    });
  }
  populateText(str);
  
  function resetCharEls() {
    charEls.map(charEl => {
      charEl.classList.remove("correct");
      charEl.classList.remove("wrong");
    });
  };
  
  input.addEventListener("input", () => {
    if (!timer) {
      progressBar.classList.add("active");
      document.getElementById('progress-bar').style.animation = css;
      timer = setTimeout(() => {
        if (confirm("You ran out of time! You can close this notification to continue typing or press OK to retry.") === true) {
          location.reload()
        } else {
          //nothing
        }
      }, javatime);
    }
    const val = input.value;
    resetCharEls();
    let errorCount = 0;
    let correctCount = 0;
    val.split("").map((letter, i) => {
      if (letter === str[i]){
        charEls[i].classList.add("correct");
        correctCount = correctCount + 1
      } else {
        charEls[i].classList.add("wrong");
        errorCount = errorCount + 1
      };
    });
    if (val.length >= str.length || val.length === str.length) {
      if (errorCount === 1) {
        var resultText = "Well Done! You completed the test within the time limit of " + totalTime + " seconds with " + errorCount + " error!\n\nPress OK to restart and reload the page."
      } else {
        var resultText = "Well Done! You completed the test within the time limit of " + totalTime + " seconds with " + errorCount + " errors!\n\nPress OK to restart and reload the page."
      }
      if (confirm(resultText) === true) {
        location.reload()
      } else {
        //nothing
      }
      clearTimeout(timer);
    }
  });
}

function updateSettings() {
  if (document.getElementById("timeInput").value.length == 0 || document.getElementById("lengthInput").value.length == 0) {
    window.alert('Please input values in the setting boxes before generating a level.')
  } else {
    var settingLength = document.getElementById("lengthInput").value;
    var settingTime = document.getElementById("timeInput").value;
    start(settingLength,settingTime);
  }
}

//ok no more functions lol
