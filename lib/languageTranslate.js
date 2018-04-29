var LanguageTranslatorV2 = require('watson-developer-cloud/language-translator/v2');
require('dotenv').config()
const config = require('../config')

var languageTranslator = new LanguageTranslatorV2({
  username: String(config.usernametrans),
  password: String(config.passtrans),
  url: 'https://gateway.watsonplatform.net/language-translator/api/'
});


module.exports = () => {
  languageTranslator.translate({
text : 'A sentence must have a verb',
source : 'en',
target : 'es'
  }, (err, translation) => {
    if(err) {
      console.log("error: ", err)
    } else {
      console.log(JSON.stringify(translation, null, 2))
    }
  })
}
