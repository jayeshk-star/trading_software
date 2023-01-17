import theme from './theme';
const tableColor = (index) => {
  const result = index % 2 === 0 ? `${theme.tableRowColor}` : `#FFFFFF`;
  return result;
};

export default tableColor;
