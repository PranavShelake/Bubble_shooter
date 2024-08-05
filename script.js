let BubbleContainer = document.querySelector("#BubbleContainer");
let hit = document.querySelector("#hit");
let time = document.querySelector("#time");
let result =document.querySelector("#result");
let pannel=document.querySelector("#pannel");
let again=document.querySelector("#again");
let Time_Over=document.querySelector("#Time_Over");
let start=document.querySelector("#start");
let show_information=document.querySelector("#show_information");
let info=document.querySelector("#info");
let againButton = document.querySelector("#again");

function create_Bubbles() {
    let allBubbles = '';
    for (let i = 0; i < 98; i++) {
        let randomNum = Math.round(Math.random() * (9 - 1) + 1);
        allBubbles += `<div class='bubble' data-hit-value='${randomNum}'>${randomNum}</div>`;
    }
    BubbleContainer.innerHTML = allBubbles;
    attachEventListeners();
}

let hitNum = 0;
function create_Hit() {
    hitNum = Math.round(Math.random() * (9 - 1) + 1);
    hit.innerHTML = `Hit<div class='dynamic-box'>${hitNum}</div>`;
}

let current_score = 0;
function Score() {
    let score = document.querySelector("#score");
    score.innerHTML = `Score<div class='dynamic-box'>${current_score}</div>`;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function Timer() {
    let timeInSeconds = 30;
    for (let i = timeInSeconds; i >= 0; i--) {
        time.innerHTML = `Timer<div class='dynamic-box'>${i}</div>`;
        await sleep(1000);
    }
    pannel.setAttribute("class","none");
    BubbleContainer.setAttribute('class', 'none');
    result.innerHTML = `Your Score is  ${current_score}`;
    result.setAttribute('class','result');
    Time_Over.setAttribute("class","Time_Over");
    again.setAttribute('class','result');
}


// Function to attach event listeners to bubbles
function attachEventListeners() {
    const hitBubbles = document.querySelectorAll('.bubble');
    hitBubbles.forEach(hitBubble => {
        hitBubble.addEventListener('click', (e) => {
            if (e.target.textContent == hitNum) {
                current_score += 10;
            }
            else{
                current_score -= 10;
            }
            Score(); // Update score display
            create_Hit();
            create_Bubbles(); // Create new bubbles after hit
        });
    });
}

// Initialize the game

function start_game() {
    show_information.setAttribute('class','none');
    info.setAttribute('class','none');
    start.setAttribute("class","none");
    pannel.setAttribute("class","pannel");
    BubbleContainer.setAttribute('class', 'BubbleContainer');
    current_score = 0; // Reset score
    create_Bubbles();
    create_Hit();
    Score();
    Timer();
    againButton.setAttribute('class', 'none');
}


function show_info(){
    show_information.setAttribute('class','show_info');
}
