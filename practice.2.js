var wordList = [['quick', 'lazy'], ['brown', 'black', 'gray'], ['fox', 'dog']];
var wordList2 = ['One'];
var wordList3 = [['Hi'],['there']];
var wordList4 = [['quick', 'lazy'], ['brown', 'black', 'gray'], ['fox', 'dog'],['thing', 'alien']];

function wordCombine(list) {
  var newList = {};

  if(list.length < 2) {
    console.log("The list is too short to combine!");
  } else {
    for(var j = 0; j<list[0].length; j++) {
      newList[j] = list[0][j];
    }
  }
  var keys = Object.keys(newList);
  var ky = keys.length
  var objAdd = keys.length

  function combine(nList, k) {
    for(var x = 0; x < ky; x++) {
      var objString = newList[x];
      for(var j = 0; j < list[k].length; j++) {
        if(j === x) {
          newList[x] = objString.concat(" "+list[k][j]);
        } else if(newList[x] === objString && j != 0) {
          newList[x] = objString.concat(" "+list[k][j]);
        } else {
          newList[(Object.keys(nList).length)] = objString.concat(" "+list[k][j]);
        }
      }
    }
    ky = Object.keys(newList).length;
    objAdd = Object.keys(newList).length;
  }
  if(list.length >= 2) {
    for(var k = 1; k < list.length; k++) {
      combine(newList, k);
    }
  }
  for(var key in newList) {
    console.log(newList[key]);
  }
};
  
wordCombine(wordList);
wordCombine(wordList2);
wordCombine(wordList3);
wordCombine(wordList4);