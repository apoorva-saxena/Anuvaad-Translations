require('dotenv').config()
const config = require('../config')

console.log(String(config.usernametts))
console.log(String(config.passtts))

const TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1')
const fs = require('fs')

const textToSpeech = new TextToSpeechV1({
  username: String(config.usernametts),
  password: String(config.passtts),
  url: 'https://stream.watsonplatform.net/text-to-speech/api/'
})

const params = {
  text: 'Hello I am Shashank Khare and I never help my wife with anything, I would rather sit in the bathroom for hours than to help my wife',
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