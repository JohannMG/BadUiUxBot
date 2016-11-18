function filenameToNewJson(filename) {

    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream(filename)
    });
    var wordsByFirstLetter = {};

    console.log("Using: " + filename);

    lineReader.on('line', function readLine(line){
        if (line.length < 4) {
            return;
        }

        var firstletter = line[0].toUpperCase();
        if (wordsByFirstLetter[ firstletter ] === undefined) {
            wordsByFirstLetter[ firstletter ] = [];
        }
        wordsByFirstLetter[ firstletter ].push( line ); 
    });

    lineReader.on('close', function closeReading(){
        var strOutput = JSON.stringify(wordsByFirstLetter);
        require('fs').writeFile('jsonOutput.json', strOutput, function(err, data){
            console.log("Write Complete");

            if (err) {
                console.log("err: " + err);
                return;
            }
            console.log(data);
        });
    });
}


//fs.writeFile('/etc/doesntexist', 'abc', function (err,data) {


module.exports =  filenameToNewJson;
/**
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('file.in')
});

lineReader.on('line', function (line) {
  console.log('Line from file:', line);
});
 */