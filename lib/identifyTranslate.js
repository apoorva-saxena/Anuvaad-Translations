var LanguageTranslatorV2 = require('watson-developer-cloud/language-translator/v2');
require('dotenv').config()
const config = require('../config')

var languageTranslator = new LanguageTranslatorV2({
  username: String(config.usernametrans),
  password : String(config.passtrans),
  url: 'https://gateway.watsonplatform.net/language-translator/api/'
});

languageTranslator.translate({
  text: 'A sentence must have a verb',
  source: 'en',
  target: 'es'
}, function (err, translation) {
  if (err) {
    console.log('error:', err);
  } else {
    console.log(JSON.stringify(translation, null, 2));
  })

  languageTranslator.identify({
    text: 'The language translator service takes text input and identifies the language use' +
        'd.'
  }, function (err, language) {
    if (err) {
      console.log('error:', err);
    } else {
      console.log(JSON.stringify(language, null, 2));
    }
  });