const SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
const fs = require('fs');
require('dotenv').config()
const config = require('../config')

const speechToText = new SpeechToTextV1({
  username: String(config.usernamestt),
  password: String(config.passstt),
  url: 'https://stream.watsonplatform.net/speech-to-text/api/'
});

const params = {
  audio: fs.createReadStream(process.cwd() + '/lib/resources/audio-file.flac'),
  content_type: 'audio/wave; rate=48000'
};

module.exports = () => {
  speechToText
    .recognize(params, function (err, res) {
      if (err) {
        console.log(err);

      } else {
        console.log(JSON.stringify(res, null, 2));

      }
    })
}

// or streaming fs   .createReadStream('./resources/speech.wav')
// .pipe(speechToText.createRecognizeStream({content_type: 'audio/l16;
// rate=44100'}))   .pipe(fs.createWriteStream('./transcription.txt'));