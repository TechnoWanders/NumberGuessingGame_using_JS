const button = document.querySelector('button');
const newgame = document.getElementById('news');
let tries = 0;
let randomNumber = Math.floor(Math.random() * 101); // Generates a number between 0 and 100
let old_guess = [];
newgame.style.display = 'none';
button.addEventListener('click', check);
newgame.addEventListener('click', refresh);

function check() {
    const input = document.getElementById('enter');
    const num = parseInt(input.value); // Use value instead of textContent for input fields
    console.log(num); console.log(randomNumber);
    const block0 = document.getElementById('RESULT');
    const block1 = document.getElementById('OLD_GUESSES');

    old_guess.push(num);
    block1.textContent = `${old_guess.join(',')}`;
    
    if (num === randomNumber && tries <= 10) {
        input.disabled = true;
        button.disabled = true;
        newgame.style.display = 'inline';
        block0.style.color = 'green';
        block0.textContent = 'Congratulations!';
    } else if (tries < 10) {
        //block0.textContent = 'Try again!';
        newgame.style.display = 'none';
        block0.style.color = "red";
        if(num>randomNumber){
            block0.textContent = 'Too high!';
        }
        else{
            block0.textContent = 'Too low!';
        }
        tries++;
    } else {
        block0.textContent = 'Game Over!';
        button.disabled = true;
        newgame.style.display = 'inline';
    }

    input.value= '';
}

function refresh(){
    location.reload();
}
