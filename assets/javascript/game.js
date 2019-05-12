// crystals on page value between 1-12
// wins and losses
// random number is between 19-120
// number for each crystal has to stay the same and not changed when clicked

let wins = 0
let losses = 0
let userScore = 0
let winningNumber = changeWinningNumber
let gemValues = []

$('#neededScore').html(winningNumber)

function changeWinningNumber() {
    num = Math.floor(Math.random() * 120) + 19
    return num
}

function resetGemValues() {
    for (i=0; i<5; i++) {
        gemValues.push(Math.floor(Math.random() * 12)+ 1)
        }
}

for (i=0; i<5; i++) {
gemValues.push(Math.floor(Math.random() * 12)+ 1)
}
// Below line is for testing gemValues
console.log(gemValues)

$('#blueRupee').on('click', addBlueValue)
$('#greenRupee').on('click', addGreenValue)
$('#orangeRupee').on('click', addOrangeValue)
$('#purpleRupee').on('click', addPurpleValue)
$('#redRupee').on('click', addRedValue)


// if (userScore === winningNumber) {
//     wins++
//     $('winsText').html('Wins: ' + wins)
//     changeWinningNumber()
// } else if (userScore > winningNumber) {
//     losses++
//     $('lossesText').html('Losses: ' + losses)
//     changeWinningNumber()
// }

function addBlueValue() {
    userScore = userScore + gemValues[0]
    $('#totalScore').html(userScore)
}
function addGreenValue() {
    userScore = userScore + gemValues[1]
    $('#totalScore').html(userScore)
}
function addOrangeValue() {
    userScore = userScore + gemValues[2]
    $('#totalScore').html(userScore)
}
function addPurpleValue() {
    userScore = userScore + gemValues[3]
    $('#totalScore').html(userScore)
}
function addRedValue() {
    userScore = userScore + gemValues[4]
    $('#totalScore').html(userScore)
}