

var AudioArr = new Array("./laugh.mp3", "./monke.mp3","./slip.mp3");  

AudioArr.forEach(function(item, index, array)
{
    console.log(item, index);
});
console.log(AudioArr);

function RandomCham()
{

var RandomAudio = Math.floor(Math.random() * AudioArr.length);
console.log(RandomAudio);
var audioElement = new Audio(AudioArr[RandomAudio]);
console.log(audioElement);

audioElement.play();
}
