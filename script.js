// Card Symbols Data
let memoryCard = [
	{
		name: 'japan',
		img:
			'https://images.unsplash.com/photo-1528164344705-47542687000d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8amFwYW5lc2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60'
	},
	{
		name: 'v8-turbo',
		img:
			'https://images.unsplash.com/photo-1566956089777-29a5d4c38fce?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60'
	},
	{
		name: 'ancient-sea',
		img:
			'https://images.unsplash.com/photo-1531257240678-d5b1922e672d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w0NDMzMTF8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=60'
	},

	{
		name: 'elevator',
		img:
			'https://images.unsplash.com/photo-1572177355780-3224aacb86a8?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fHJuU0tESHd3WVVrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60'
	},

	{
		name: 'egypt',
		img:
			'https://images.unsplash.com/photo-1502250493741-939d1c76eaad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5MzQ3MDg3fHxlbnwwfHx8&auto=format&fit=crop&w=1600&q=60'
	},
	{
		name: 'russia',
		img:
			'https://images.unsplash.com/photo-1512495039889-52a3b799c9bc?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw5MzQ3MDg3fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60'
	},
	{
		name: 'waterfall',
		img:
			'https://images.unsplash.com/photo-1487734092093-e5b02908580e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1534&q=80'
	},
	{
		name: 'coral',
		img:
			'https://images.unsplash.com/photo-1534766664852-7dbfbf053c4c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80'
	},
	{
		name: 'fish',
		img:
			'https://images.unsplash.com/photo-1516683037151-9a17603a8dc7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1544&q=80'
	},
	{
		name: 'snow',
		img:
			'https://images.unsplash.com/photo-1614895801321-af6b98adffe3?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5OHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60'
	},
	{
		name: 'galaxy',
		img:
			'https://images.unsplash.com/photo-1614926037384-4159c33e196b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzh8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60'
	},
	{
		name: 'beach',
		img:
			'https://images.unsplash.com/photo-1614867517189-34c259f98b17?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTB8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60'
	}
];

// Duplicate array to create a match for each card
const gameGrid = memoryCard.concat(memoryCard).sort(() => 0.5 - Math.random());
// Make game shuffle cards each load

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 700;

// Get Div with id = 'game';
const game = document.getElementById('game');

// Create Section with class = 'grid'
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
// Append the grid section to the game div
game.appendChild(grid);

// Display card symbols; for each symbol create a div.
gameGrid.forEach((item) => {
	const { name, img } = item;
	// let name = item.name,
	// 	img = item.img;
	// Create a div
	const card = document.createElement('div');
	// Apply a card class to that div:see CSS
	card.classList.add('card');
	// Set the data-name attribute of the div
	card.dataset.name = name;
	const front = document.createElement('div');
	front.classList.add('front');
	const back = document.createElement('div');
	back.classList.add('back');
	back.style.backgroundImage = `url(${img})`;
	grid.appendChild(card);
	card.appendChild(front);
	card.appendChild(back);
});

const match = () => {
	const selected = document.querySelectorAll('.selected');
	selected.forEach((card) => {
		card.classList.add('match');
	});
};

const resetGuesses = () => {
	firstGuess = '';
	secondGuess = '';
	count = 0;

	let selected = document.querySelectorAll('.selected');
	selected.forEach((card) => {
		card.classList.remove('selected');
	});
};

// Add Event Listener to grid
grid.addEventListener('click', function(event) {
	// Event target is thr item clicked
	let clicked = event.target;
	// Do not allow section to be selected only divs in grid
	if (
		clicked.nodeName === 'SECTION' ||
		clicked === previousTarget ||
		clicked.parentNode.classList.contains('selected') ||
		clicked.parentNode.classList.contains('match')
	) {
		return;
	}

	if (count < 2) {
		count++;
		clicked.classList.add('selected');
		if (count === 1) {
			firstGuess = clicked.parentNode.dataset.name;
			clicked.parentNode.classList.add('selected');
		} else {
			secondGuess = clicked.parentNode.dataset.name;
			clicked.parentNode.classList.add('selected');
		}
		// If both guesses are not empty...
		if (firstGuess && secondGuess) {
			// and the first guess matches the second match
			if (firstGuess === secondGuess) {
				setTimeout(match, delay);
			}
			setTimeout(resetGuesses, delay);
		}
		previousTarget = clicked;
	}
});
