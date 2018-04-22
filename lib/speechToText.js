var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var fs = require('fs');
require('dotenv').config()
const config = require('../config')

var speechToText = new SpeechToTextV1({
  username: String(config.usernamestt),
  password: String(config.passstt),
  url: 'https://stream.watsonplatform.net/speech-to-text/api/'
});

var params = {
  // From file
  audio: fs.createReadStream('./resources/speech.wav'),
  content_type: 'audio/l16; rate=44100'
};

speechToText.recognize(params, function (err, res) {
  if (err) 
    console.log(err);
  else 
    console.log(JSON.stringify(res, null, 2));
  }
);

// or streaming
fs
  .createReadStream('./resources/speech.wav')
  .pipe(speechToText.createRecognizeStream({content_type: 'audio/l16; rate=44100'}))
  .pipe(fs.createWriteStream('./transcription.txt'));