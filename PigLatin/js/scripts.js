
// back-end logic

var vowels = ['a','e','i','o','u'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];

var pigSentence = function(word, firstChar) {
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

// front-end logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var word = $("input#sentence").val();
    var firstChar = word.substr(0, 1);
    var result = pigSentence(word, firstChar);
    $("#result").text(result);
  });
});
