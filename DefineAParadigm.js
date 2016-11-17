function userParadigmGenerator(){
    this.wordsByFirstLetter = require ('./jsonOutput.json'); 
}

userParadigmGenerator.prototype.getNewInsight = function(){
    const newletter = this.getRandomUppercaseLetter()
    var insight = ""
    insight = insight + "#UI: " + this.getRandomWordStartingWithLetter(newletter);
    insight = insight + "\r";
    insight = insight + "#UX: " + this.getRandomWordStartingWithLetter(newletter);
    return insight;
};

userParadigmGenerator.prototype.getRandomWordStartingWithLetter = function(letter){
    const min = 0; 
    const max = this.wordsByFirstLetter[letter].length;
    var index = Math.floor(Math.random() * (max - min)) + min;
    return this.wordsByFirstLetter[letter][ index ];
};

userParadigmGenerator.prototype.getRandomUppercaseLetter = function() {
  min = 65;
  max = 90;
  var num = Math.floor(Math.random() * (max - min)) + min;
  return String.fromCharCode(num)
};

module.exports = userParadigmGenerator; 