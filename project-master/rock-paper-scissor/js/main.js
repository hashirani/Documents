var score = 0;
var userChoice = '';
const mainsection = document.getElementById('mainsection');
const resultsection = document.getElementById('resultsection');
const userPaper = document.getElementById('userPaper');
const userRock = document.getElementById('userRock');
const userScissors = document.getElementById('userScissors')
const computerPaper = document.getElementById('computerPaper');
const computerRock = document.getElementById('computerRock');
const results = document.getElementById('results');
const computerScissors = document.getElementById('computerScissors');
const rules = document.getElementById('rules')

paper = () => {
    userChoice = 1;
    playGame()
    resultMode()
    userPaper.classList.remove('hidden')
}


scissors = () => {
    userChoice = 2;
    resultMode()
    playGame()
    userScissors.classList.remove('hidden')
}


rock = () => {
    userChoice = 3;
    resultMode()
    playGame()
    userRock.classList.remove('hidden')
}

// //////////////////////////////////////////result mode  //////////////////////////////////////////////

resultMode = () =>{
    resultsection.classList.remove('hidden')
    mainsection.classList.add('hidden')
}

//////////game decision/////////////////

playGame = () => {

    var computer = (Math.floor(Math.random() * 3)) + 1
    /***************if computers choose paper */
    if (computer == 1 ){ //1 is paper

        if( userChoice == 2){
            result = 'You win'
            scorePlus()
        } 
        
        else if( userChoice == 3){
            result= 'You loose'
            scoreMinus()
        } 

        else{
            result = 'Same choice'
        } 

        computerPaper.classList.remove('hidden')
    } 
    /***************if computers choose scissors */

    else if (computer == 2 ){ // 2 is scissors

        if( userChoice == 3){
            result = 'You win'
            scorePlus()
        } 
        
        else if( userChoice == 1){
            result= 'You loose'
            scoreMinus()
        } 

        else{
            result = 'Same choice'
        } 

        computerScissors.classList.remove('hidden')
    } 
    /***************if computers choose rock */

    else if (computer == 3 ){ // 3 is rock

        if( userChoice == 1){
            result = 'You win'
           scorePlus()
        } 
        
        else if( userChoice == 2){
            result= 'You loose'
            scoreMinus()
        } 

        else{
            result = 'Same choice'
        }

        computerRock.classList.remove('hidden')

    } 

/*****************display game decision */

    results.innerHTML = result;
}

/************************************* increase the score if players wins*/
scorePlus = () =>{
    score++
    localStorage.setItem("score", score);
    updateScore()
}

/************************************* DECRESES the score if players LOSS*/
scoreMinus = () =>{
    score--
    if (score < 0){
        score = 0;
    }
    localStorage.setItem("score", score);
    updateScore()
}

/********************update score in DOM */
updateScore = () =>{
    document.getElementById('point').innerHTML =  localStorage.getItem("score")

}

updateScore()

/************************************start New Game  */

newGame = () =>{
    score = 0
    userRock.classList.add('hidden')
    userPaper.classList.add('hidden')
    userScissors.classList.add('hidden')
    computerScissors.classList.add('hidden')
    computerPaper.classList.add('hidden')
    computerRock.classList.add('hidden')

    resultsection.classList.add('hidden')
    mainsection.classList.remove('hidden')
    localStorage.setItem("score", score);
    updateScore()
}

///////////////////////////////////////////// Play Again/////////////////////////////////////////////////

playAgain =() =>{
    userRock.classList.add('hidden')
    userPaper.classList.add('hidden')
    userScissors.classList.add('hidden')
    computerScissors.classList.add('hidden')
    computerPaper.classList.add('hidden')
    computerRock.classList.add('hidden')

    resultsection.classList.add('hidden')
    mainsection.classList.remove('hidden')
   
}

/*********************************Show rules ***************************/

showRules =() =>{
    rules.style.top='0'
}


/*******hide rule */
closeRules =() =>{
    rules.style.top='110%'
}


/*************score logic */