import * as XLSX from 'xlsx';

const ExportToExcel = (id, type, fn) => {
  var elt = document.getElementById(id);
  var wb = XLSX.utils.table_to_book(elt, { sheet: 'sheet1' });
  return XLSX.writeFile(wb, fn || 'MySheetName.' + (type || 'xlsx'));
};

export default ExportToExcel;
