# [textShift.net](https://textshift.net/) | a basic online cipher tool

-------------

## usage
applet can be run in a web browser by checking out the repo and opening `index.html` in a web browser

## features
- various cipher options for encrypting / decrypting
- dynamic output when entering either text input or cipherText input
- responsive styling for mobile devices

## cipher options
- shift each character by number
- reverse the text
- swap nth character with offset
- shift nth character by number
- shift offset nth character by number
- reverse text within each partition
- shift characters by partition indices
- swap offset nth character with offset
- shift each character by multiple
- shift nth character by multiple
- shift offset nth character by multiple

## feature wishlist
- cipher types:
  - insert specified text at index
  - insert randomized text at index
  - swap two char ranges
  - insert char range at index
  - nth partitions sequencer
  - shift chars by list of indices
- notes section (cache text field to localStorage object)

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
