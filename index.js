
//Create the jukebox object
function Jukebox(albumName) {

    this.albumName = albumName;
    this.audioPlayer = document.getElementById("audio-player");
    this.audioSrc = document.querySelector("#audio-player source");
    this.currentSong = 0;
    this.queue = [];

    this.addSong = function(song) {
        this.queue.push(song);
    }

    this.playAudio = function () { 
        this.audioPlayer.play(); 
    } 

    this.pauseAudio = function() { 
        this.audioPlayer.pause(); 
    }

    this.loadFirst = function() {
        this.audioSrc.src = this.queue[0].source;
        this.audioPlayer.load();
    }

    //Create a method to cycle through the array of songs

    // this.playNext = function() {
    //     this.audioSrc.src = this.queue[1].source;
    //     this.audioPlayer.load();
    // }

}

//Add a function to store the song artist, title and source
function Song(artist, title, source) {
    this.artist = artist;
    this.title = title;
    this.source = source;

    this.currentTrack = document.querySelector("#trackname").innerHTML = "Artist - " + this.artist + ", Song Title - " + this.title;
}

    

var playlist1 = new Jukebox("Wishlist");

playlist1.addSong(new Song("Battery Operated Orchestra", "Highland", "Battery_Operated_Orchestra_-_01_-_Wish_List_Highland.mp3"));
playlist1.loadFirst();
playlist1.addSong(new Song("Battery Operated Orchestra", "Faslane", "Battery_Operated_Orchestra_-_03_-_Wish_List_Faslane.mp3"));
playlist1.loadFirst();


console.log(playlist1.queue);
