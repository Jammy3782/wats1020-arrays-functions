// This is the file where you will write the Truncate Words function and related code.

// TODO: Create a Function called truncateWords() that accepts two arguments: 
// longText (a String with several words in it)
// numWords (an Integer that sets the number of words you want in the returned text)

var myFunction = truncateWords(numWeekDays);{
  for (var i=0; i<numWeekDays; i++){
    var truncateWords = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
var myFunction = truncateWords(WeekDays);{
  console.log (truncateWords[WeekDays]);
  console.log('WeekDays! #' + i);   
    
  }
   console.log('End WeekDays from function'); 
}
myFunction(3);
} 
  console.log (WeekDay[days]);
  console.log(hellos[0]);
  console.log(hellos.join)('|')
  
var wordList = 'Monday, Tuesday, Wednesday, Thusrsday, Friday'; 
var WordListArray = wordList.split('');
console.log(wordListArray)[0]; 
var newWordList = wordListArray.join('');
console.log(newWordList);

var shortWordList = wordListArray.splice(0, 3);
console.log ('shortWordList:' + shortWordList);


// TODO: Within the truncateWords() Function, complete the following steps:
// 1. Use the split() function to split the String into an Array
// 2. Use the length attribute to find the number of words in the Array
// 3. Determine how many words should be removed from the String
// 4. Remove those words from the Array
// 5. Add an additional String item to the Array to put an ellipses in: "..."
// 6. Use the join() function to convert the Array back into a String
// 7. Return the truncated String from the Function

// This portion of the script is meant to call and display the result of your Function.
// You do not need to change the following lines, but you may change them if you 
// are experimenting further or pursuing stretch goals.
var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;
var shortText = truncateWords(originalText, wordLimit);
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);

