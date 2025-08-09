interface Details{
    author:string;
    year:number
}
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details:Details;
}
const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details:{
        author:'Ed Sheeran',
        year:2014
    }
}
const song = "krisma";
const {song: anotherSong,songDuration,details: {author},details} = audioPlayer
// re estructurar
const {year} = details
console.log(song,songDuration,author,year,anotherSong);