let option;
let result;
//to save result permanet use localstorage.getItem to save the value then use method of get.parse to use the data 
let getitem = localStorage.getItem('savewin')
let convert = JSON.parse(getitem)
console.log(convert)

let win =
//here una fanya kusave ile value au number ambayo imeseviwa kwa 
// localstorage then una sema kama ndani ya local
//storage number au alisha cheza basi akibonya tena button za kucheza 
// isianze upya aendelee ila kama ndo mara ya kwanza
//ndo iwe playerwin = 0, computer = 0 , score = 0 ndo maana ya kuweka 
//  JSON.parse(localStorage.getItem('savewin')) ||
     JSON.parse(localStorage.getItem('savewin')) ||
 {
      playerwin : 0,
      computerwin : 0,
      score : 0,
 }
let lost = 0
let btnDisable = document.getElementById('btn')
function computer(){
    let compMov = Math.floor(Math.random() * 3) + 1
    if(compMov ===  1){
        option = 'rock'
    }
    else if(compMov === 2){
        option = 'paper'
    }
    else if(compMov === 3){
        option = 'scissor'
    }
}

function playgame(playerselection){
     computer()
    if(playerselection === 'rock'){
        if(option === 'rock'){
            result = 'draw'
            lost = 0

        }
        else if(option === 'paper'){
            result = 'loss'
            lost+=1
            document.querySelector('.comp-score').innerHTML =  `Comp: ${win.computerwin += 1}`
            //if(lost === 1){
                //btnDisable.disabled = true
                //disable 
           // }
        }
        else if(option === 'scissor'){
            result = 'win'
            lost = 0
            document.querySelector('.middle-score').innerHTML = `Score: ${win.score+=0.5}`
           document.querySelector('.player-score').innerHTML = `Player: ${win.playerwin += 1}`
        }
    }
    else if(playerselection === 'paper'){
        if(option === 'rock'){
            result = 'win'
            lost = 0
           document.querySelector('.player-score').innerHTML = `Player: ${win.playerwin += 1}`
           document.querySelector('.middle-score').innerHTML = `Score: ${win.score+=0.5}`
           
        }
        else if(option === 'paper'){
            result = 'draw'
            lost = 0
        }
        else if(option === 'scissor'){
            result = 'loss'
            lost+=1
            document.querySelector('.comp-score').innerHTML =  `Comp: ${win.computerwin += 1}`
            
        }
    }
    else if(playerselection === 'scissor'){
        if(option === 'rock'){
            result = 'loss'
            lost += 1
            document.querySelector('.comp-score').innerHTML =  `Comp: ${win.computerwin += 1}`
            
        }
        else if(option === 'paper'){
            result = 'win'
            lost = 0
           document.querySelector('.player-score').innerHTML =  `Player: ${win.playerwin += 1}`
           document.querySelector('.middle-score').innerHTML = `Score: ${win.score+=0.5}`
        }
        else if(option === 'scissor'){
            result = 'draw'
            lost = 0
        }
    }
        console.log(result)
        document.querySelector('.result-line').innerHTML =`You: ${result}` 
        document.getElementById('1').innerHTML = `Bot : ${option}`
        document.getElementById('2').innerHTML = `Human: ${playerselection}`
        localStorage.setItem('savewin',JSON.stringify(win))
}

function reset(){
    localStorage.removeItem('savewin')
    document.querySelector('.player-score').innerHTML =  `Player: ${win.playerwin = 0}`
    document.querySelector('.comp-score').innerHTML =  `Comp: ${win.computerwin = 0}`
    document.querySelector('.middle-score').innerHTML = `Score: ${win.score = 0}`
    
}
document.querySelector('.comp-score').innerHTML =  `Comp: ${convert.computerwin }`
document.querySelector('.player-score').innerHTML =  `Player: ${convert.playerwin}`
document.querySelector('.middle-score').innerHTML = `Score: ${convert.score}`

//How to play
function show(){
   let par = document.getElementById('playrules')
    if(par.style.display === "none"){
        par.style.display = 'flex'
    }
    else{
        par.style.display = "none"
    }
}
console.log(document.body)