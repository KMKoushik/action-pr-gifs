const { features, fixes, defaults } = require('./giphy');


/**
 * @param {Array} gifArray
 *
 * @returns {String}
 */
const getGifUrl = (gifArray) => gifArray[Math.floor(Math.random() * gifArray.length)];


/**
 * @param {String} prTitle
 *
 * @returns {String}
 */
const generateGif = (prTitle) => {
  let gifArray = defaults;

  if (prTitle.match(/Feat|FEAT|feat/)) {
    gifArray = features;
  } else if (prTitle.match(/Fix|FIX|fix/)) {
    gifArray = fixes;
  }

  return `![Gif](${getGifUrl(gifArray)})`;
};

module.exports = generateGif;
