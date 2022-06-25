var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{

document.getElementById("textbox").innerHTML = "";
recognition.start();

}

recognition.onresult = function(event) {

console.log(event);

var Content = event.results[0][0].transcript;
if(Content =="take my selfie");
{console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    speak();
}



}

function speak() {

var synth = window.speechSynthesis;
speak_data = "Taking your Selfie in 5 seconds";
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camera);

setTimeout(function()
{
img_id="selfie1";
    take_snapshot();

    save()
}, 5000);

setTimeout(function()
{
img_id="selfie2";
    take_snapshot();

    save()
}, 10000);

setTimeout(function()
{
img_id="selfie3";
    take_snapshot();

    save()
}, 15000);

}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot()
{
console.log(img_id);

    Webcam.snap(function(data_uri) {
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="camera-1.jpeg" src="'+data_uri+'">';

        }

        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="camera-2.jpg" src="'+data_uri+'">';

        }

        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="camera-3.jpg" src="'+data_uri+'">';

        }
        

    });

}

function save()
{
link = document.getElementById("link");
image = document.getElementById("camera-1.jpeg").src;
link.href = image;
link.click();
}