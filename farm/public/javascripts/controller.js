$(document).ready(function(){
	var isRecording = false;
	var song[] = []; //array for the noises

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
		if(isRecording){
			//add the sound for C to the array
		}
	}):
	$("#D").click(function(e){
		if(isRecording){
			//add the sound for D to the array
		}
	});
	$("#E").click(function(e){
		if(isRecording){
			//add the sound for E to the array
		}
	});
	$("#F").click(function(e){
		if(isRecording){
			//add the sound for F to the array
		}
	});
	$("#G").click(function(e){
		if(isRecording){
			//add the sound for G to the array
		}
	});
	$("#A").click(function(e){
		if(isRecording){
			//add the sound for A to the array
		}
	});
	$("#B").click(function(e){
		if(isRecording){
			//add the sound for B to the array
		}
	});
