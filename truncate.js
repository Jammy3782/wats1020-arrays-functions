// This is the file where you will write the Truncate Words function and related code.
// TODO: Create a Function called truncateWords() that accepts two arguments: 
// longText (a String with several words in it)
// numWords (an Integer that sets the number of words you want in the returned text)


// function called truncateWords. 

var truncateWords = function(longText, numWords){
// TODO: Within the truncateWords() Function, complete the following steps:
// 1. Use the split() function to split the String into an Array
console.log(longText);
var textArray = longText.split(" ");
console.log(textArray);
// 2. Use the length attribute to find the number of words in the Array
var arrayLength = textArray.length;
console.log(arrayLength);
// 3. Determine how many words should be removed from the String
var removeWords = arrayLength - numWords; 
console.log(removeWords);
// 4. Remove those words from the Array
textArray.splice(numWords, removeWords);
console.log(textArray);
// 5. Add an additional String item to the Array to put an ellipses in: "..."
textArray.push("...");
console.log(textArray);
// 6. Use the join() function to convert the Array back into a String
var stringText = textArray.join(" ");
console.log(stringText);
// 7. Return the truncated String from the Function
return stringText;
  
 
}








// This portion of the script is meant to call and display the result of your Function.
// You do not need to change the following lines, but you may change them if you 
// are experimenting further or pursuing stretch goals.
var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;
var shortText = truncateWords(originalText, wordLimit);
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);

