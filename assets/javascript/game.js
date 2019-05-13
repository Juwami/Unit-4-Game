// crystals on page value between 1-12
// wins and losses
// random number is between 19-120
// number for each crystal has to stay the same and not changed when clicked

let wins = 0
let losses = 0
let userScore = 0
let winningNumber = 0
let gemValues = []

changeWinningNumber()
resetGemValues()

function changeWinningNumber() {
    num = Math.floor(Math.random() * 120) + 19
    winningNumber = num
    $('#neededScore').html(winningNumber)
}

function resetGemValues() {
    for (i = 0; i < 5; i++) {
        gemValues.push(Math.floor(Math.random() * 12) + 1)
    }
    console.log('gem value ' + gemValues) 
}

$('#blueRupee').on('click', addBlueValue)
$('#greenRupee').on('click', addGreenValue)
$('#orangeRupee').on('click', addOrangeValue)
$('#purpleRupee').on('click', addPurpleValue)
$('#redRupee').on('click', addRedValue)

function compareValues() {
    if (userScore === winningNumber) {
        wins++
        $('#winsText').html('Wins: ' + wins)
        changeWinningNumber()
        gemValues.length = 0
        resetGemValues()
        userScore = 0
    } 
    if (userScore > winningNumber) {
        losses++
        console.log('loss')
        $('#lossesText').html('Losses: ' + losses)
        changeWinningNumber()
        gemValues.length = 0
        resetGemValues()
        userScore = 0
    }
}

function addBlueValue() {
    userScore = userScore + gemValues[0]
    compareValues()
    $('#totalScore').html(userScore)
}

function addGreenValue() {
    userScore = userScore + gemValues[1]
    compareValues()
    $('#totalScore').html(userScore)
}

function addOrangeValue() {
    userScore = userScore + gemValues[2]
    compareValues()
    $('#totalScore').html(userScore)
}

function addPurpleValue() {
    userScore = userScore + gemValues[3]
    compareValues()
    $('#totalScore').html(userScore)
}

function addRedValue() {
    userScore = userScore + gemValues[4]
    compareValues()
    $('#totalScore').html(userScore)
}