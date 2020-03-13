const generateGif = require('../src/gifGenerator');
const { features, fixes, defaults } = require('../src/giphy');

const getGifUrl = (prTitle) => {
  const gifMsg = generateGif(prTitle);
  return gifMsg.substring(7, gifMsg.length - 1);
};

describe('Gif generator', () => {
  test('Generate gif for feature PR', () => {
    expect(features.includes(getGifUrl('Feature pr'))).toBe(true);
    expect(features.includes(getGifUrl('feature pr'))).toBe(true);
    expect(features.includes(getGifUrl('Feat pr'))).toBe(true);
    expect(features.includes(getGifUrl('[Feat] pr'))).toBe(true);
    expect(features.includes(getGifUrl('feat pr'))).toBe(true);
  });

  test('Generate gif for fix PR', () => {
    expect(fixes.includes(getGifUrl('Fix pr'))).toBe(true);
    expect(fixes.includes(getGifUrl('fix pr'))).toBe(true);
    expect(fixes.includes(getGifUrl('[fix] pr'))).toBe(true);
    expect(fixes.includes(getGifUrl('[Fix] pr'))).toBe(true);
  });

  test('Generate gif for other PR', () => {
    expect(defaults.includes(getGifUrl('Random  pr'))).toBe(true);
  });
});
