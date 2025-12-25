interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 35,
  song: "Mess",
  details: {
    author: "Ed Sherea",
    year: 2025,
  },
};
const song = "NewSong";

const { song: anotherSond, songDuration: Duration, details } = audioPlayer;
const {author} = details;

console.log("Song:", anotherSond);
console.log("Duration:", Duration);
console.log("Autor:", author);
export {};
