require('dotenv').config()
const config = require('../config')

console.log(String(config.usernametts))
console.log(String(config.passtts))

const TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1')
const fs = require('fs')

const textToSpeech = new TextToSpeechV1({username: String(config.username), password: String(config.pass), url: 'https://stream.watsonplatform.net/text-to-speech/api/'})

const params = {
  text: 'Hello I am Apoorva Saxena and I am trying to build a translation tool, Anuvaad',
  voice: 'en-US_AllisonVoice', // Optional voice
  accept: 'audio/wav'
}

module.exports = () => {
  textToSpeech
    .synthesize(params, function (err, audio) {
      if (err) {
        console.log(err);
        return;
      }
      textToSpeech.repairWavHeader(audio);
      fs.writeFileSync('audio.wav', audio);
      console.log('audio.wav written with a corrected wav header');
    })
}