let number = 1;

const handleRandomize = () => {
	document
		.querySelectorAll('.dice')
		.forEach((el) => el.classList.add('hidden'));
	number = Math.ceil(Math.random() * 6);
	switch (number) {
		case 1:
			document.getElementById('dice1').classList.remove('hidden');
			break;
		case 2:
			document.getElementById('dice2').classList.remove('hidden');
			break;
		case 3:
			document.getElementById('dice3').classList.remove('hidden');
			break;
		case 4:
			document.getElementById('dice4').classList.remove('hidden');
			break;
		case 5:
			document.getElementById('dice5').classList.remove('hidden');
			break;
		case 6:
			document.getElementById('dice6').classList.remove('hidden');
			break;
	}
};

const handleText = () => {
	document.querySelector('.result').innerHTML = number;
};

handleRandomize();
handleText();

const handleClick = () => {
	handleRandomize();
	handleText();
};

document.querySelector('.resultBox').addEventListener('click', handleClick);
document
	.querySelectorAll('.dice')
	.forEach((el) => el.addEventListener('click', handleClick));
