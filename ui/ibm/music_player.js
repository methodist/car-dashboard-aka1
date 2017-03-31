var audioObj = new Audio();

function start_music(type){
    var url = "audio/Take_Five.wav";
    if ( type == "jazz" ) {
       url = "audio/Take_Five.wav";
    }
    if ( type == "rock" ) {
       url = "audio/Hotel_California.wav";
    }
    
    audioObj.pause();
    audioObj = new Audio(url);
    audioObj.play();
}

function stop_music(){
    audioObj.pause();
}

