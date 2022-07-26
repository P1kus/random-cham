

var AudioArr = new Array("./laugh.mp3", "./monke.mp3","./slip.mp3");  

AudioArr.forEach(element => console.log(element)); //listuje co jest w AudioArr

function RandomCham()
{
var RandomAudio = Math.floor(Math.random() * AudioArr.length);
console.log(RandomAudio); // Do sprawdzania co sie wylosowało, zwraca index z arraya

var audioElement = new Audio(AudioArr[RandomAudio]); //przypisuje do konstruktora audio wartość pod wylosowanym wyzej indexem
console.log(audioElement); // Do sprawdzania co sie wylosowało, juz jako audio do grania i string

audioElement.play(); //magia:)
}
