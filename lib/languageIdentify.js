var LanguageTranslatorV2 = require('watson-developer-cloud/language-translator/v2');
require('dotenv').config()
const config = require('../config')

var languageTranslator = new LanguageTranslatorV2({
  username: String(config.usernametrans),
  password: String(config.passtrans),
  url: 'https://gateway.watsonplatform.net/language-translator/api/'
});

module.exports = () => {
  languageTranslator.identify({
    text: 'The language translator service takes text input and identifies the language used'
  }, (err, language) => {
    if (err) {
      console.log('error', err);
    } else {
      console.log(JSON.stringify(language.languages[0].language, null, 2))
    }
  })
}
