// crystals on page value between 1-12
// wins and losses
// random number is between 19-120
// number for each crystal has to stay the same and not changed when clicked

let wins = 0
let losses = 0
let userScore = 0
let winningNumber = changeWinningNumber

$('.rupees').on('click', function() {
    $('#blueRupee').on('click', addBlueValue)
    $('#greenRupee').on('click', addGreenValue)
    $('#orangeRupee').on('click', addOrangeValue)
    $('#purpleRupee').on('click', addPurpleValue)
//     $('redRupee').on('click', addRedValue)
//     $('silverRupee').on('click', addSilverValue)
//     $('yellowRupee').on('click', addYellowValue)

if (userScore === winningNumber) {
    wins++
    $('winsText').html('Wins: ' + wins)
    changeWinningNumber()
} else if (userScore > winningNumber) {
    losses++
    $('lossesText').html('Losses: ' + losses)
    changeWinningNumber()
}
})

$('#neededScore').html(winningNumber)

function changeWinningNumber() {
    num = Math.floor(Math.random() * 120) + 19
    return num
}



