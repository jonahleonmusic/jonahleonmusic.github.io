if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}



//songwritingCards section
const cards = [];
function newRhythym(length, genre){
  let newRhythym = [{noteValue: .25, noteType: "normal"}, {noteValue: .125, noteType: "rest"}, {noteValue: .125, noteType: "normal"}, {noteValue: .5, noteType: "normal"}];

  //check if valid rhythym is created
  var noteCount = 0;
  console.log(noteCount);
  for (let i = 0; i < newRhythym.length; i++) {
    noteCount += newRhythym[i].noteValue;
  }

  if (noteCount % 1 == 0) { ///if note count is a whole integer (1 bar, 2 bars, 3 bars in length)
    return noteCount;
  } else {
    console.log("invalid rhythym");
  }
  /////---------------------------
  
}
function newCard (genre, key) {
  console.log("hi");
  let chordProgression = ["i", "IV", "V"];
  let notes = [3,4,1];

  //rhythym is a list of objects where each object is a single note, note can either be "normal", "dotted", or "rest"
  let rhythym = newRhythym(1, genre);
  let artwork = "inputArtImageURLHere";
  let lyric = "crazy lyric!";
  let voicing = "inputVoicingImageHere";
  let newCard = {genre: genre, chordProgression: chordProgression, notes: notes, rhythym: rhythym, artwork: artwork, lyric: lyric, voicing: voicing};

  console.log("new card created!);
  cards.push(newCard);
  console.log(cards);
  return newCard;
}



