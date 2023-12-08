const playlist = {
  name: "My top playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  trackCount: 3,

  changeName(newName) {
    this.name = newName;
  },
  increaseRating() {
    this.rating++;
  },
  updateTrackCount() {
    this.trackCount = this.tracks.length;
  },
  getTrackCount() {
    this.updateTrackCount();
    return this.trackCount;
  },
  addTrack(newTrack) {
    this.tracks.push(newTrack);
    this.updateTrackCount();
  },
  setRating(newRating) {
    this.rating = newRating;
  },
};

playlist.changeName("Test name");

console.log(playlist.name);

playlist.increaseRating();

console.log(playlist.rating);

console.log(playlist.getTrackCount());
