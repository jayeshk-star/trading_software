import JSZip from 'jszip';
import saveAs from 'save-as';
import JSZipUtils from 'jszip-utils';

const downloadMultipleFiles = async (links) => {
  const zip = new JSZip();
  const zipFilename = 'documents.zip';
  try {
    const promises = links.map(async (link) => {
      const urlArr = link.split('%');
      const filename = urlArr[urlArr.length - 1];

      const file = await JSZipUtils.getBinaryContent(link);
      await zip.file(filename, file, { binary: true });
    });
    await Promise.all(promises);
  } catch (error) {
    console.log(error);
  }

  zip
    .generateAsync({ type: 'blob' })
    .then(function (content) {
      saveAs(content, zipFilename);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default downloadMultipleFiles;
