if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}



//songwritingCards section


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createHTMLElement(card){
  let artist = card[0];
  let genre = card[1];
  let rhythym = card[2]
  let artURL = card[3];
  let lyric = card[4];
  let voicingURL = card[5];
  let chords = card[6];
  let notes = card[7];
  
 
  const cardContainer = document.createElement("div");

  //create lyric header element
  const lyricHeader = document.createElement("h2");
  const lyricText = document.createTextNode(lyric);
  lyricHeader.appendChild(lyricTect);

  cardContainer.appendChild(lyricHeader);

  
  
};
function showCard(cards){
  let card = [];
  //creates new original card
  for (let i = 0; i < cards[0].length; i++) {
    card.push(cards[getRandomInt(cards.length) + 1][i]);
  };

  console.log(card);

  createHTMLElement(card);
};

function newRhythym(length, genre){

  //if note is > 0 and < 10, noteValue = note, and noteType = "normal
  //if note is < 0, then noteValue = note * -1, and noteType = "rest"
  //if note is > 10, then noteValue = note - 10, and noteType = "dotted"
  let newRhythym = [{noteValue: .25, noteType: "normal"}, {noteValue: .125, noteType: "rest"}, {noteValue: .125, noteType: "normal"}, {noteValue: .5, noteType: "normal"}];

  //check if valid rhythym is created
  var noteCount = 0;
  console.log(noteCount);
  for (let i = 0; i < newRhythym.length; i++) {
    noteCount += newRhythym[i].noteValue;
  };

  if (noteCount % 1 == 0) { ///if note count is a whole integer (1 bar, 2 bars, 3 bars in length)
    return noteCount;
  } else {
    console.log("invalid rhythym");
  }
  /////---------------------------
  
}
function newCard (artist, key) {
  // specify the path of the CSV file
  let artistPath = artist.split(' ').join('_'); // changes "Domonic Fike to "Domonic_Fike" so can be read in path
  const path = ("./card_data/").concat(artistPath).concat(".csv");
  
  //gets deck of cards then calls showCard to pick a card then show it on html
   Papa.parse(path, {
          download: true,
          dynamicTyping: true,
          complete: function(results) {
            showCard(results.data);
    }
  })
  // let cardDeck = getCardDeck(artist, "NA");
  // console.log(cardDeck);
  // let chordProgression = ["i", "IV", "V"];
  // let notes = [3,4,1];
  // let rhythym = newRhythym(1, genre); //rhythym is a list of objects where each object is a single note, note can either be "normal", "dotted", or "rest"
  // let artwork = "inputArtImageURLHere";
  // let lyric = "crazy lyric!";
  // let voicing = "inputVoicingImageHere";
  // let newCard = {genre: genre, chordProgression: chordProgression, notes: notes, rhythym: rhythym, artwork: artwork, lyric: lyric, voicing: voicing};
}



