/* In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc. */

function alphabetPosition(text) {
  let alphabet = " abcdefghijklmnopqrstuvwxyz";
  let tab = text.split("");
  let result = "";
  tab.map(e => {
    if (alphabet.indexOf(e.toLowerCase()) != -1 && e != " ") {
      result += alphabet.indexOf(e.toLowerCase()) + " ";
    }
  });
  return result.substring(0, result.length - 1);
}



/* Best Version */

function alphabetPosition(text) {
    return text
      .toUpperCase()
      .match(/[a-z]/gi)
      .map( (c) => c.charCodeAt() - 64)
      .join(' ');
  }