# [textshift.net](https://textshift.net/) | a basic online cipher tool

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
- shift each character by number
- reverse the text
- reverse text within each partition
- swap nth character with offset
- swap offset nth character with offset
- move text subset to index
- sequence by partition
- sequence by every set of x characters
- insert text at index
- insert randomly generated text at index
- insert random Unicode text using step sequence
- insert variable length Unicode text using step sequence

- shift text subset
- shift multiple text subsets
- shift nth character by number
- shift offset nth character by number
- shift characters by partition indices
- shift step sequence characters
- shift each character by multiple
- shift subset of text by multiple
- shift multiple subsets of text by multiple
- shift step sequence characters by multiple
- shift nth character by multiple
- shift offset nth character by multiple

## feature wishlist
- cipher types:
  - swap at step sequence pair
  - move character subset to step sequence indices
  - shift text subset at every step sequence
  - multiplicative shift text subset at every step sequence
  - for every set of characters of size x, shift the specified character indices in each set
  - for every set of characters of size x, multiply the specified character indices in each set
  - copy text subset to index
  - substitution swap 2 characters within text
  - swap at offset of every instance of specified char
- buttons to generate randomized inputs (e.g. index lists)
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

## textShift preview:
<img src="./assets/textshift-preview.png" width="100%" height="auto">
