if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}



//songwritingCards section
const cards = [];

function getCardDeck(artist, key){


  
  // specify the path of the CSV file
  let artistPath = artist.split(' ').join('_'); // changes "Domonic Fike to "Domonic_Fike" so can be read in path
  const path = ("./card_data/").concat(artistPath).concat(".csv");
  
  // var file = new File([], path);

  // Papa.parse(path, {
  //   header: true,
  //   dynamicTyping: true,
  //   complete: function(results) {
  //     console.log(results);
  //     cardDeck = results.data;
  //   }
  // });
   let cardDeck;
  
   Papa.parse(path, {
          download: true,
          dynamicTyping: true,
          complete: function(results) {
            cardDeck = results.data;
            // console.log(results.data);     
    }
  })

  console.log("got here");

  return cardDeck;
  // console.log(cardDeck);

  
//   jQuery.ajax({
//     success: function(csv) {
//         const output = Papa.parse(path, {
//           header: true, // Convert rows to Objects using headers as properties
//         });
//         if (output.data) {
//           console.log(output.data);
//         } else {
//           console.log(output.errors);
//         }
//     },
//     error: function(jqXHR, textStatus, errorThrow){
//         console.log(textStatus);
//     }
// });
 

  // return cardDeck;
};

function getCard(){
  
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
  let cardDeck = getCardDeck(artist, "NA");
  console.log(cardDeck);
  let chordProgression = ["i", "IV", "V"];
  let notes = [3,4,1];
  let rhythym = newRhythym(1, genre); //rhythym is a list of objects where each object is a single note, note can either be "normal", "dotted", or "rest"
  let artwork = "inputArtImageURLHere";
  let lyric = "crazy lyric!";
  let voicing = "inputVoicingImageHere";
  let newCard = {genre: genre, chordProgression: chordProgression, notes: notes, rhythym: rhythym, artwork: artwork, lyric: lyric, voicing: voicing};

  console.log("new card created!");
  cards.push(newCard);
  console.log(cards);
  
  return newCard;
}



