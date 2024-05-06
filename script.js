let game = true;
let player = "X";
let xScore = 0;
let oSocre = 0;
let tie = 0;
let currentPlayer;

const table = document.querySelector(".table");
const play_1 = document.getElementById('play_1');
const play_2 = document.getElementById('play_2');
const tie2 = document.getElementById('tie');
const replay = document.getElementById('replay');
const Restart = document.getElementById('Restart');
play_1.textContent = xScore;
play_2.textContent = oSocre;
tie2.textContent = tie;
// console.log('Table:', table);
const p2= document.querySelector('.p2');
p2.textContent = `Now player-${player} moves`;


// Get all cells in the table
const cells = table.getElementsByTagName('td');
console.log('Cells:', cells);
function startgame (){
  if(game){
    for (let i = 0; i < cells.length; i++) {
      cells[i].addEventListener('click', clickHandler);
    }
    }
}

startgame();

// Add event listener to each cell
function clickHandler(event){
    // // Access the content of the clicked cell
    // const cellContent = event.target.innertext;
    // console.log('Clicked cell content:', cellContent);
    // // Do something with the cell content
    event.target.textContent = player;
    console.log(event.target.textContent); 
    if(cells[0].textContent===player && cells[1].textContent ===player && cells[2].textContent===player)
    {
    alert(`Player-${player} wins`);
    game = false;
    currentPlayer = player;
    if(player === "X")
    {
    play_1.textContent = ++xScore;
    }else
    {
      play_2.textContent = ++oSocre; 
    }
    }
    else if(cells[3].textContent===player && cells[4].textContent ===player && cells[5].textContent===player)
    {
      alert(`Player-${player} wins`);
      game = false;
      currentPlayer = player;
      if(player === "X")
      {
      play_1.textContent = ++xScore;
      }else
      {
        play_2.textContent = ++oSocre; 
      }
      }
    else if(cells[6].textContent===player && cells[7].textContent ===player && cells[8].textContent===player)
    {
      alert(`Player-${player} wins`);
      game = false;
      currentPlayer = player;
      if(player === "X")
      {
      play_1.textContent = ++xScore;
      }else
      {
        play_2.textContent = ++oSocre; 
      }
      }
    else if(cells[0].textContent===player && cells[3].textContent ===player && cells[6].textContent===player)
    {
      alert(`Player-${player} wins`);
      game = false;
      currentPlayer = player;
      if(player === "X")
      {
      play_1.textContent = ++xScore;
      }else
      {
        play_2.textContent = ++oSocre; 
      }
      }
    else if(cells[1].textContent===player && cells[4].textContent ===player && cells[7].textContent===player)
    {
      alert(`Player-${player} wins`);
      game = false;
      currentPlayer = player;
      if(player === "X")
      {
      play_1.textContent = ++xScore;
      }else
      {
        play_2.textContent = ++oSocre; 
      }
      }
    else if(cells[2].textContent===player && cells[5].textContent ===player && cells[8].textContent===player)
    {
      alert(`Player-${player} wins`);
      game = false;
      currentPlayer = player;
      if(player === "X")
      {
      play_1.textContent = ++xScore;
      }else
      {
        play_2.textContent = ++oSocre; 
      }
      }
    else if(cells[0].textContent===player && cells[4].textContent ===player && cells[8].textContent===player)
    {
      alert(`Player-${player} wins`);
      game = false;
      currentPlayer = player;
      if(player === "X")
      {
      play_1.textContent = ++xScore;
      }else
      {
        play_2.textContent = ++oSocre; 
      }
      }
    else if(cells[2].textContent===player && cells[4].textContent ===player && cells[6].textContent===player)
    {
      alert(`Player-${player} wins`);
      game = false;
      currentPlayer = player;
      if(player === "X")
      {
      play_1.textContent = ++xScore;
      }else
      {
        play_2.textContent = ++oSocre; 
      }
      }
      else {
        // Check for tie
        let isTie = true;
        for (let cell of cells) {
          if (cell.textContent === '') {
            isTie = false;
            break;
          }
        }
        if (isTie) {
          alert('It\'s a tie!');
          game = false;
          if(currentPlayer === "X")
      {
        currentPlayer = "O";
      p2.textContent = `Now player-${currentPlayer} moves`;
      }
      else
      {
        currentPlayer = "X";
      p2.textContent = `Now player-${currentPlayer} moves`;
    }
          tie2.textContent = ++tie;
        }
      }
      // Remove event listener and break loop if game is over
  if (!game) {
    for (let i = 0; i < cells.length; i++) {
      cells[i].removeEventListener('click', clickHandler);
    }
  }
      if(player === "X")
      {
      player = "O";
      p2.textContent = `Now player-${player} moves`;
      }
      else
      {
      player = "X";
      p2.textContent = `Now player-${player} moves`;
    }

} 

replay.addEventListener("click",function(e){
  e.preventDefault();
  game = true;
  player = currentPlayer;
  p2.textContent = `Now player-${player} moves`;
  for (let cell of cells){
    cell.textContent = '';
  }
  startgame();
})

Restart.addEventListener("click", function (e) {
  window.location.href = "index.html";
})