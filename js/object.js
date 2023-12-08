const playlist = {
  name: "My top playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  trackCount: 3,
};

console.log(playlist);

function logPlaylist(myObject) {
  console.log(myObject.name);
  console.log(myObject.rating);
  console.log(myObject.tracks);
  console.log(myObject.tracks[1]);
  console.log(myObject.trackCount);
  console.log(myObject.public);
}

playlist.public = true;
logPlaylist(playlist);
