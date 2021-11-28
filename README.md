# [textshift.net](https://textshift.net/) | a basic online cipher tool

<img src="./assets/textshift-preview.png" width="100%" height="auto">

-------------

## usage
applet can be run in a web browser by checking out the repo and opening `index.html` in a web browser

## features
- various cipher options for encoding / decoding
  - cipher text functions such as shift, swap, insert, move, reverse, multiply, sequence
  - cipher text selection such as by partition, nth chars, index range, step sequence, character set, offset
- dynamic output when entering either text input or cipherText input
- responsive styling for mobile devices
- notes section which uses localStorage
- error handling for specific unicode characters

## cipher options
(1) shift each character by number | 
(2) reverse the text | 
(3) reverse text within each partition | 
(4) swap nth character with offset | 
(5) swap offset nth character with offset | 
(6) swap character pairs using step sequence | 
(7) sequence by partition | 
(8) sequence by every set of x characters | 
(9) move text subset to index | 
(10) move multiple text subsets to indices
(11) insert text at index | 
(12) insert distributed text at indices | 
(13) insert distributed text using step sequence
(14) insert randomized text at index | 
(15) insert randomized distributed text at indices | 
(16) insert randomized text using step sequence | 
(17) insert variable-sized, randomized text using step sequence | 
(18) shift text subset | 
(19) shift multiple text subsets | 
(20) shift nth character by number | 
(21) shift offset nth character by number | 
(22) shift step sequence characters | 
(23) shift text subsets using step sequence | 
(24) shift characters by partition indices | 
(25) shift each character by multiple | 
(26) shift subset of text by multiple | 
(27) shift multiple subsets of text by multiple | 
(28) shift nth character by multiple | 
(29) shift offset nth character by multiple | 
(30) shift step sequence characters by multiple | 
(31) shift text subsets by multiple using step sequence | 
(32) shift characters by partition indices by multiple

## feature wishlist
- cipher types:
  - sequence by every set of x characters with step sequence skip
  - sequence by every set of x characters at step sequence (allow intersecting sets)
  - sequence by every set of x characters at indices (allow intersecting sets, requires sort before sequence)
  - switch instances of character pair
  - switch instances of multiple character pairs
  - sequence by selected partition sets
- documentation page to visualize encoding using example text

## tips
a complex cipher can be made by combining different ciphers together. this can be done by taking the
cipher text output and entering it as text input to another cipher and then repeating the same process with other
ciphers. to decode the cipher text, the cipher text is entered into the ciphers' cipher text field in the 
reverse order in which they were applied.

```

example: if i were to shift all the text characters by 5, 
and then take the cipher text output and encode it by shifting every 3rd character by 9, 
and then take the resulting output and and then encoding it by shifting every 5th character by 16, 
i can decode the cipher text by working backwards:

this is done by entering the cipher text into the cipher text field and 
decoding it using the third cipher (shift every 5th character by 16), 
and take the decoded text and decoding it using the second cipher (shift every 3rd character by 9), 
and take the decoded text and decoding it using the first cipher (shift all the text characters by 5).

```
