module.exports = {
  root: true,
  extends: '@react-native',
  //Add this section 
// --------
rules: {
  'prettier/prettier': [
    'error',
    {
      endOfLine: 'auto',
    },
  ],
  // --------
  }
};
