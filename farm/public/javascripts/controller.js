$(document).ready(function(){
	console.log("hello");
	var isRecording = false;
	var song = []; //array for the noises
	var audio = [
		new Audio('audio/sound_wookie.mp3'),
		new Audio('audio/sound_trap.mp3'),
		new Audio('audio/sound_r2d2.mp3'),
		new Audio('audio/sound_laser.mp3'),
		new Audio('audio/sound_wilhelm.mp3'),
		new Audio('audio/sound_lightsaber.mp3'),
		new Audio('audio/sound_dogfight.mp3')];

	$("#record").click(function(e){
		song = []; // emptying out the array so they get a blank slate every time they start recording
		isRecording = true;
	});

	$("#stopRecord").click(function(e){
		isRecording = false;
	});

	$("#save").click(function(e){
		//send song array to mongo db
	});

	//keys
	$("#C").click(function(e){
		console.log("playing c");
		audio[0].play();
		if(isRecording){
		  song.push(0);	//add the sound for C to the array
		}
	});
	$("#D").click(function(e){
		console.log("playing d");
                audio[1].play();
		if(isRecording){
		  song.push(1);	//add the sound for D to the array
		}
	});
	$("#E").click(function(e){
		console.log("playing e");
                audio[2].play();

		if(isRecording){
		  song.push(2); //add the sound for E to the array
		}
	});
	$("#F").click(function(e){
		console.log("playing f");
                audio[3].play();
		
		if(isRecording){
		  song.push(3);  //add the sound for F to the array
		}
	});
	$("#G").click(function(e){
		console.log("playing g");
                audio[4].play();
		
		if(isRecording){
		  song.push(4);  //add the sound for G to the array
		}
	});
	$("#A").click(function(e){
		console.log("playing a");
                audio[5].play();
	
		if(isRecording){
		  song.push(5); //add the sound for A to the array
		}
	});
	$("#B").click(function(e){
		console.log("playing b");
                audio[6].play();

		if(isRecording){
		  song.push[6];//add the sound for B to the array
		}
	});
});
