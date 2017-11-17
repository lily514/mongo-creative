angular.module('sound', [])

.controller('MainCtrl', [
'$scope','$http',
function($scope, $http) {
  $scope.songList = [];
  $scope.song = [];
  $scope.audio = [];
  $scope.create = function(song) {
  	return $http.post('/songs', song).success(function(data){
		$scope.songList.push(data);
	});
  };
  $scope.addSong = function(){

	if ($scope.title === '') {return;}
	if ($scope.artist === '') {return;}
	if ($scope.song.length === 0 ) {
		alert("Must start recording to save a song!");
		return;}
	console.log("save song" + $scope.song.toString());

	$scope.create({
		title: $scope.title,
		artist: $scope.artist,
		song: $scope.song
        });
  };
  $scope.getSongs = function() {
	return $http.get('/songs').success(function(data) { 
		$scope.songList = data;
	});
  };
  $scope.playSong = function(song) {
	console.log("playing . . .");
	var i = 1;
	song.song.forEach(function(note) {
	  console.log("delay: "+700*i);
	  setTimeout( 
		function(note) {
        	  console.log(note);
        	  $scope.audio[note].play();
  		}, 700*i, note);  
	  i += 1;
	}); 
  };

  angular.element(document).ready(function () {
	console.log("hello");
	$scope.getSongs();
	var isRecording = false;
	$scope.audio = [
		new Audio('audio/sound_wookie.mp3'),
		new Audio('audio/sound_trap.mp3'),
		new Audio('audio/sound_r2d2.mp3'),
		new Audio('audio/sound_laser.mp3'),
		new Audio('audio/sound_wilhelm.mp3'),
		new Audio('audio/sound_lightsaber.mp3'),
		new Audio('audio/sound_dogfight.mp3')];

	$("#record").click(function(e){
		console.log("start recording");
		$scope.song = []; // emptying out the array so they get a blank slate every time they start recording
		isRecording = true;
		$("#record").prop('disabled', true);
		$("#record").text('Recording...');
		$("#stopRecord").prop('disabled', false);

	});

	$("#stopRecord").click(function(e){
		console.log("stop recording");
		isRecording = false;
		$("#record").prop('disabled', false);
		$("#record").text('Record Song');
                $("#stopRecord").prop('disabled', true);
	});

/*	$("#saveButton").click(function(e){
		console.log("save song" + song.toString());
		//send song array to mongo db
	});*/

	//keys
	$("#C").click(function(e){
		console.log("playing c");
		$scope.audio[0].play();
		if(isRecording){
		 $scope.song.push(0);	//add the sound for C to the array
		}
	});
	$("#D").click(function(e){
		console.log("playing d");
                $scope.audio[1].play();
		if(isRecording){
		  $scope.song.push(1);	//add the sound for D to the array
		}
	});
	$("#E").click(function(e){
		console.log("playing e");
                $scope.audio[2].play();

		if(isRecording){
		 $scope.song.push(2); //add the sound for E to the array
		}
	});
	$("#F").click(function(e){
		console.log("playing f");
                $scope.audio[3].play();
		
		if(isRecording){
		  $scope.song.push(3);  //add the sound for F to the array
		}
	});
	$("#G").click(function(e){
		console.log("playing g");
                $scope.audio[4].play();
		
		if(isRecording){
		  $scope.song.push(4);  //add the sound for G to the array
		}
	});
	$("#A").click(function(e){
		console.log("playing a");
                $scope.audio[5].play();
	
		if(isRecording){
		  $scope.song.push(5); //add the sound for A to the array
		}
	});
	$("#B").click(function(e){
		console.log("playing b");
                $scope.audio[6].play();

		if(isRecording){
		  $scope.song.push[6];//add the sound for B to the array
		}
	});
   });//end of document ready
}//end of function
]); //end of module
