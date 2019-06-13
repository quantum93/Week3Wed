
// ------------------------------------------- back-end logic ----------------------------------------------------

// "const" means non-changing variable....We are not allowing change the element of array in "const" type variable.

const vowels = ['a','e','i','o','u'];
const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];

// pigWord function consists of three for loop part for vowels, numbers, and consonants, respectively.
// This function takes first character of each word in english sentence and the word in english sentence itself.
// And it returns new word based on each pig latin rule in the instruction page.

var pigWord = function(word, firstChar, secondChar) {
  for (var i=0; i<=vowels.length; i++) {
    if (firstChar === vowels[i]) {
      return word + "way";
    }
  }

  for (var i=0; i<=numbers.length; i++) {
    if (firstChar === numbers[i]) {
      return word;
    }
  }

// The if condition in consonants is for the word of the first consonant with vowels in middle of it.
// We define empty vaiable (indexes) in order to store the whole index of word.
// And then, we store index of every vowels and use the first index only for pig latin rule in the instruction.
// The else if condition in consonants is the word of the first q with u vowels followed by first q.

  for (i=0; i<=consonants.length; i++) {
    if (firstChar != 'q') {
      var indexes = [];
      for (var i = 0; i < word.length; i++) {
        if (word.slice(i, i+1) === 'a' || word.slice(i, i+1) === 'e' || word.slice(i, i+1) === 'i' || word.slice(i, i+1) === 'o' || word.slice(i, i+1) === 'u') {
          indexes.push(i);
        }
      }
      return word.slice(1, word.length)+ word.slice(consonants[i], 1) + "ay";
    } else if (firstChar === 'q' && secondChar === 'u') {
      return word.slice(2, word.length) + firstChar + secondChar + "ay";
    }
  }

};

// The pigWord function only works for one word. Then we need a function to take sentence as an input and return translated word in array.
// In here, we define two variable for first and second character of each word in sentence array.
// For sentence array, we do forEach loop and call pigWord function to translate each word in pig latin.
// That result is stored in arrayResults array and was sent to the front-end logic.
// We check its logic with such as "popcorn", "sport", "queen", "squeal", and "lux" word.

var arrayToWord = function(sentence) {
  var arrayResults = []
  sentence.forEach(function(word) {
    var firstChar = word.substr(0, 1);
    var secondChar = word.substr(1, 1);
    var wordResult = pigWord(word, firstChar, secondChar);
    // console.log(wordResult);
    // console.log(typeof wordResult);
    arrayResults.push(wordResult)
    // console.log(arrayResults);
  });
  return arrayResults;
};

// --------------------------------- front-end logic -----------------------------------------------------

// In front-end, we take user's input from prompt as a form of string.
// We convert it to the form of array and send it to arrayToWord.
// The result of arrayToWord is stored in convertedSentence. This is communication between front and back-end logic.
// However, the array form of convertedSentence should be transformed to the string type.
// For that one, we do forEach() loop with append keyword to show it in resut.
// The space " " is for the space between each word in "pig latin" translated ones.
// Finally, it looks like a sentence in string format.

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
