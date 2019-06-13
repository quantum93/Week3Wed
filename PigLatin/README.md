# Pig Latin Translator

#### A webpage created to Pig Latin sentence from a plain English sentence. 6/12/2019

#### By **Tae Lee and Mike Lofgren**

## Description

A webpage created with jQuery, CSS and HTML to translate an English sentence to a Pig Latin sentence.
This webpage utilizes jQuery with switch statements and CSS styles for hide and show.
A user inputs a sentence without numbers or special characters.
It runs the input through the back end logic and returns a sentence of Pig Latin from a plain English sentence.

### Specs
| Spec                                                                       | Input                            | Output                                    |
| :------------------------------------------------------------------------- | :------------------------------- | :---------------------------------------- |
| since they do not contain consonants or vowels.                            | 3                                | 3                                         |
| The program adds "ay" to single-letter words beginning with a vowel.       | i                                | iay                                       |
| The program adds "way" to single-letter words beginning with a consonants. | d                                | dway                                      |
| since they do not start with consonants or vowels in a word.               | 3dad                             | 3dad                                      |
| The program adds "ay" to multi-letter word beginning with a vowel.         | island                           | islanday                                  |
| The program adds "way" to multi-letter word beginning with a consonants.   | dad                              | dadway                                    |
| make array of words for user input of string type sentence.                | 3dad are bugs                    | ['3dad','are','bugs']                     |
| make arrayToWord function                                                  | 3dad are bugs                    | 3dad areay bugsway                        |
| In that function, define firstChar of each word                            | 3dad are bugs                    | 3dad 3 are a bugs b                       |
| we call pigWord function to translate each word by definition.             | 3dad are bugs                    | 3dad areay bugsway                        |
| we define empty array to store the result of pigWord function.             | 3dad are bugs                    | ['3dad', 'areay', 'bugsway']              |
| we return that array to front-end logic                                    |                                  |                                           |
| In front-end, we use forEach loop to re-narrate each element of array to   |                                  |                                           |    
| make string type result. (use append rather than text to avoid overwrite)  | ['3dad', 'areay', 'bugsway']     | 3dad areay bugsway                        |
| For word beginning with consonants, find index of vowel in word            | thread                           | index of e                                |
| return word + consonants[i] + ....+ consonants[index of vowel] + 'ay'      | thread                           | threadthray                               |
...
...
| since they do not start with consonants or vowels in multiple words.       | 3dad are bugs                    | 3dad areway oolcay                        |
| The program adds "way" to multiple words beginning with a vowel.           | island is awesome                | islandway isway awesomeway                |
| The program move consonant to the end of word and adds "ay" to multiple    |                                  |                                           |
| words beginning with a consonants.                                         | dad is so cool                   | adday isway osay oolcay                   |
...
...
| Everything works well!                                                     | my mom is amazing queen          | ymay ommay isway amazingway eenquay       |

Check logic for consonants case with "popcorn", "sport", "queen", "squeal", "lux".

## Setup/Installation Requirements

1. To run this program, clone repository from this GitHub.
2. Open file in a web browser such as Google Chrome.
3. Type an English sentence without numbers or special characters and click the "Translate!" button.
4. It tells you a Pig Latin sentence based on your plain English.
5. The bootstrap file should be under "css" folder of project and jQuery file should be under "js" directory.

## Known Bugs
* No known bugs at this time.

## Technologies Used
  * HTML
  * CSS (bootstrap 3.3.7 which is available in https://getbootstrap.com/docs/3.3/)
  * Javascript
  * jQuery-3.4.1 (https://jquery.com/download/)

## Support and contact details

If there are any questions, bugs or concerns, please contact mikeylofgren@gmail.com or taebumlee@gmail.com

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2017 **Tae Lee and Mike Lofgren**
