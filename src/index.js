import { generateJoke } from './generateJoke';
import './style/main.scss';
import smile from './assets/smiling-emoji.jpg';
const image = document.getElementById('emoji');
image.src = smile;
generateJoke();

document.getElementById('btn').addEventListener('click', generateJoke);
