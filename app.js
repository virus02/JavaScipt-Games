var score, rScore, aPlayer, gamePlay, wScore;
init();
function winningScore()(){
    wScore=document.querySelector('.final-score').value;
}   
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlay && wScore >= 0) {
        var dice = Math.floor(Math.random() * 6 + 1);
        var diceImg = document.querySelector('.dice');
        diceImg.style.display = 'block';
        diceImg.src = "pics/dice-" + dice + ".png";
        if (dice > 1) {
            rScore += dice;
            document.querySelector('#current-' + aPlayer).textContent = rScore;
        } else {
            nextPlayer();
        }
    }
});
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlay) {
        score[aPlayer] += rScore;
        document.getElementById('score-' + aPlayer).textContent=score[aPlayer];
        console
        if (score[aPlayer] >= wScore) {
            document.getElementById('name-' + aPlayer).textContent = "Winner!"
            document.querySelector('.player-'+ aPlayer +'-panel').classList.add('winner');
            document.querySelector('.player-'+ aPlayer +'-panel').classList.remove('active');
            document.querySelector('.dice').style.display = 'none';
            gamePlay = false;
        }else{
            nextPlayer();
        }
    }
});
document.querySelector('.btn-new').addEventListener('click', init);
function nextPlayer(){
    aPlayer === 0 ? aPlayer = 1 : aPlayer = 0;
    rScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
};
function init(){
    score=[0,0];
    rScore=0;
    aPlayer=0;
    document.querySelector('.final-score').value = '';
    document.getElementById("score-0").textContent='0';
    document.getElementById("score-1").textContent='0';
    document.getElementById("current-0").textContent='0';
    document.getElementById("current-1").textContent='0';
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active'); 
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');   
    gamePlay = true;
}