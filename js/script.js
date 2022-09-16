
// asking the user how many cookies they want
let cookieStart = Number(prompt("How many cookies would you like to start off with?"))



/* variable needs to be let because the value
 is changing as it increases the number of cookies; it can't be const */
let i = cookieStart;
document.getElementById("result").innerHTML = `You have ${i} cookie(s)`;
function increase() {
  i++
  document.getElementById("result").innerHTML = `You have ${i} cookie(s)`

}

function decrease(){
  i--;
  document.getElementById('result').innerHTML = `You have ${i} cookie(s)` ;
  if (i <= 0){
    //added upgrade; if the user decreases at 0; an alert message will occur 
    i++
    alert("You have no more cookies :(")
 }
}
