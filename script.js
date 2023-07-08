const cardArray = [
    {
        name: 'fries',
        img: './images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: './images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: './images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: './images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: './images/milkshake.png',
    },
    {
        name: 'pizza',
        img: './images/pizza.png',
    },
    {
        name: 'fries',
        img: './images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: './images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: './images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: './images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: './images/milkshake.png',
    },
    {
        name: 'pizza',
        img: './images/pizza.png',
    },
];

( () => {
    for (let i = cardArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = cardArray[i];
        cardArray[i] = cardArray[j];
        cardArray[j] = k;
    }
})();

const grid = document.querySelector('.grid');
const result = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];

const createGrid = () => {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', './images/blank.png');
        card.setAttribute('data-id', i);
        //card.setAttribute('alt', ' ');
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
};

function flipCard () {
    let cardId = this.getAttribute('data-id');
    cardsChosenIds.push(cardId);
    const cardFlipped = cardArray[cardId].name;
    cardsChosen.push(cardFlipped);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length == 2) {
        setTimeout(checkMatch, 500);
    }
};

function checkMatch () {
    const cards = document.querySelectorAll('img');
    const cardOneId = cardsChosenIds[0];
    const cardTwoId = cardsChosenIds[1];

    if (cardOneId == cardTwoId) {
        cards[cardOneId].setAttribute('src', './images/blank.png');
        cards[cardTwoId].setAttribute('src', './images/blank.png') 
    }
    else  if (cardsChosen[0] === cardsChosen[1]) {
        cards[cardOneId ].setAttribute('src', './images/white.png');
        cards[cardTwoId].setAttribute('src', './images/white.png');
        cards[cardOneId].removeEventListener('click', flipCard);
        cards[cardTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    }
    else {
        cards[cardOneId].setAttribute('src', './images/blank.png');
        cards[cardTwoId].setAttribute('src', './images/blank.png');
    }

    cardsChosen.length = 0;
    cardsChosenIds.length = 0;
    result.innerHTML = cardsWon.length;
    if (cardsWon.length === (cardArray.length/2)) {
        result.innerHTML = "Done!";
    }
}

createGrid();