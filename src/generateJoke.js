import axios from 'axios';

export function generateJoke() {
	let config = {
		headers: {
			accept: 'application/json',
		},
	};

	axios
		.get('https://icanhazdadjoke.com', config)
		.then((res) => {
			document.getElementById('jokes').innerHTML = res.data.joke;
		})
		.catch((err) => console.log(err));
}
