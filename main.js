var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start(){

  document.getElementById("textbox").innerHTML = "";
  Recognition.start();

}

Recognition.onresult = function run(event){

  console.log(event);
  content = event.results[0][0].transcript;
  console.log(content);

  document.getElementById("textbox").innerHTML = content;

  if(content == "take my selfie"){

    console.log("Taking Selfie") ;
    speak();
    

  }

  

}

function speak(){

  var synth = window.speechSynthesis;

  speak_data = "Taking Your Selfie In 5 Seconds";

  var utterThis  = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

  Webcam.attach(Camera);

  setTimeout(function(){

   TakeMySnapshot();
   save();

  },5000);

}

Webcam.set({

  width:360,
  height:250,
  image_format:'png',
  png_quality : 90

});

Camera = document.getElementById("camera");

function TakeMySnapshot(){

  Webcam.snap(function(data_uri){

    document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+ data_uri + '">';

  });

}

function save(){

  link = document.getElementById("link");

  img = document.getElementById("selfie_image").src;

  link.href = img;
  link.click();

}