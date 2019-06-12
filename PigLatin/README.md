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
| since they do not contain consonants or vowels.                            | Example Input: 3                 | Example Output: 3                         |
| The program adds "ay" to single-letter words beginning with a vowel.       | Example Input: i                 | Example Output: iay                       |
| The program adds "way" to single-letter words beginning with a consonants. | Example Input: d                 | Example Output: dway                      |

| since they do not start with consonants or vowels in a word.               | Example Input: 3dad              | Example Output: 3dad                      |
| The program adds "ay" to multi-letter word beginning with a vowel.         | Example Input: island            | Example Output: islanday                  |
| The program adds "way" to multi-letter word beginning with a consonants.   | Example Input: dad               | Example Output: dadway                    |

| since they do not start with consonants or vowels in a words.              | Example Input: 3dad are bugs     | Example Output: 3dad areay bugsway        |
| The program adds "ay" to multi words beginning with a vowel.               | Example Input: island is awesome | Example Output: islanday isay awesomeay   |
| The program adds "way" to multi words beginning with a consonants.         | Example Input: dad is so cool    | Example Output: dadway isay soway coolway |

| The program does nothing to non-alphabetical characters,             | Example Input: 2              | Example Output:Please enter letters                |                                                                      |                               |

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
