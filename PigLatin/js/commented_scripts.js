
// back-end logic

const vowels = ['a','e','i','o','u'];
const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];

var pigWord = function(word, firstChar) {
  for (var i=0; i<=vowels.length; i++) {
    if (vowels[i] === firstChar) {
      return word + "ay";
    }
  }
  for (var i=0; i<=numbers.length; i++) {
    if (numbers[i] === firstChar) {
      return word;
    }
  }
  for (i=0; i<=consonants.length; i++) {
    if (consonants[i] === firstChar) {
      return word + "way";
    }
  }
};

var arrayToWord = function(sentence) {
  var arrayResults = []
  sentence.forEach(function(word) {
    var firstChar = word.substr(0, 1);
    var wordResult = pigWord(word, firstChar);
    // console.log(wordResult);
    // console.log(typeof wordResult);
    arrayResults.push(wordResult)
    // console.log(arrayResults);
  });
  return arrayResults;
};

// front-end logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    //user input
    var userInput = $("#sentence").val();
    var sentence = userInput.split(' ');
    var convertedSentence = arrayToWord(sentence);
    // var result = pigWord(word, firstChar);
    convertedSentence.forEach(function(element){
      $("#result").append(element + " ");
    })
  });
});


// back-end logic

// const vowels = ['a','e','i','o','u'];
// const numbers = ['0','1','2','3','4','5','6','7','8','9'];
// const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
//
// var pigWord = function(word, firstChar) {
//   for (var i=0; i<=vowels.length; i++) {
//     if (vowels[i] === firstChar) {
//       return word + "ay";
//     }
//   }
//   for (var i=0; i<=numbers.length; i++) {
//     if (numbers[i] === firstChar) {
//       return word;
//     }
//   }
//   for (i=0; i<=consonants.length; i++) {
//     if (consonants[i] === firstChar) {
//       return word + "way";
//     }
//   }
// };
//
// var arrayToWord = function(sentence) {
//   return sentence.map(function(word) {
//     var firstChar = word.substr(0, 1);
//     var wordResult = pigWord(word, firstChar);
//     return wordResult;
//   });
//
// };
//
// // front-end logic
// $(document).ready(function() {
//   $("form#pig-latin").submit(function(event) {
//     event.preventDefault();
//     var userInput = $("#sentence").val();
//     var sentence = userInput.split(' ');
//     var convertedSentence = arrayToWord(sentence);
//     // var result = pigWord(word, firstChar);
//     $("#result").text(convertedSentence);
//   });
// });
