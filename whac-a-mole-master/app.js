const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const cat = document.querySelector('.cat')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let losePsition
let currentTime = 60
let timerId = null
let lost = false;

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
    square.classList.remove('cat')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  let randomLoseSquare = squares[Math.floor(Math.random() * 9)];
  randomLoseSquare.classList.add('cat');

  hitPosition = randomSquare.id
  losePsition = randomLoseSquare.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  if (square.id == losePsition) {
      result--
      score.textContent = result
      losePsition = null
    }
  })
})


function moveMole() {
  timerId = setInterval(randomSquare, 500)
}

function moveCat() {
  timerId = setInterval(randomSquare, 500)
}

moveCat()
moveMole()

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime
 
  if (currentTime == 0) {
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    alert('GAME OVER! Your final score is ' + result)
  }
 
}
 
 
let countDownTimerId = setInterval(countDown, 1000)