let songIndex = 0;
let pp = 0;
start = true;

const artist = document.getElementById("artist");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const blurbg = document.getElementById("blur_bg");
const track = document.getElementById("song");
const prev_button = document.getElementById("prev");
const playpause_button = document.getElementById("playpause");
const next_button = document.getElementById("next");

const songs = [
    {
        name : "song-1",
        title : "All 4 Nothing",
        artist : "Lauv"
    },
    {
        name : "song-2",
        title : "Lean On (feat. MØ)",
        artist : "Major Lazer & DJ Snake"
    },
    {
        name : "song-3",
        title : "Eastside",
        artist : "Benny Blanco, Halsey & Khalid"
    },
    {
        name : "song-4",
        title : "changes",
        artist : "XXXTENTATION"
    },
    {
        name : "song-5",
        title : "Shape Of You",
        artist : "Ed Sheeran"
    },
    {
        name : "song-6",
        title : "Summertime Sadness",
        artist : "Lana Del Rey"
    },
    {
        name : "song-7",
        title : "Kissing Other People",
        artist : "Lennon Stella"
    },
]

playpause_button.addEventListener("click", playpause_music);
function playpause_music(){
    if(pp == 0){
        pp = 1;
        track.play();
        playpause_button.src = `./images/pause_icon.png`;
        if(start == true){
            start = false;
            update_details();
        }
    }
    else{
        pp = 0;
        track.pause();
        playpause_button.src = `./images/play_icon.png`;
    }
};

function update_details(){
    artist.textContent = `${songs[songIndex].artist}`;
    title.textContent = `${songs[songIndex].title}`;
    cover.src = `./images/${songs[songIndex].name}.jpeg`;
    blurbg.style.backgroundImage = `url('./images/${songs[songIndex].name}.jpeg')`;
    track.src = `./songs/${songs[songIndex].name}.mp3`;
    track.play();
    playpause_button.src = `./images/pause_icon.png`;

}

setInterval(if_ended, 1000);
function if_ended(){
    if(track.ended){
       playpause_button.src = `./images/play_icon.png`;
    }
}

prev_button.addEventListener("click", prev_music);
function prev_music(){
    songIndex = (songs.length + songIndex - 1) % songs.length;
    update_details();
}
next_button.addEventListener("click", next_music);
function next_music(){
    songIndex = (songIndex + 1)% songs.length;
    update_details();
}