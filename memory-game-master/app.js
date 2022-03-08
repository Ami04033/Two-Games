document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'hawk',
      img: 'images/hawk.jpg'
    },
    {
      name: 'owl',
      img: 'images/owl.jpg'
    },
    {
      name: 'hummingbird',
      img: 'images/hummingbird.jpg'
    },
    {
      name: 'budgie',
      img: 'images/budgie.jpg'
    },
    {
      name: 'spix_macaw',
      img: 'images/spix_macaw.jpg'
    },
    {
      name: 'peacock',
      img: 'images/peacock.jpg'
    },
    {
      name: 'hawk',
      img: 'images/hawk.jpg'
    },
    {
      name: 'owl',
      img: 'images/owl.jpg'
    },
    {
      name: 'hummingbird',
      img: 'images/hummingbird.jpg'
    },
    {
      name: 'budgie',
      img: 'images/budgie.jpg'
    },
    {
      name: 'spix_macaw',
      img: 'images/spix_macaw.jpg'
    },
    {
      name: 'peacock',
      img: 'images/peacock.jpg'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []
  let lost = false;

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }


  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You have clicked the same image!')
    }
    else if(cardsChosen[0] === cardsChosen[1] && (cardsChosen[0] === 'hawk' || cardsChosen[0] === 'owl')){
      for (let i = 0; i < cardArray.length; i++) {
        cards[i].removeEventListener('click', flipCard);
        cards[i].setAttribute('src', 'images/white.png');
      }
      alert('Sorry, you lost!');
      lost = true;
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2 - 2) {
      for (let i = 0; i < cardArray.length; i++) {
        cards[i].removeEventListener('click', flipCard);
        cards[i].setAttribute('src', 'images/white.png');
      }
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
    if (lost){
      resultDisplay.textContent = 'You lose!';
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    console.log(cardArray[cardId].name);
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
