import JSZip from 'jszip';
import JSZipUtils from 'jszip-utils';
import saveAs from 'save-as';

async function DownloadMultipleFolderAsZip(folders, folderName) {
  // Create a new JSZip instance
  const zip = new JSZip();

  // Add each folder and its files to the zip file
  const zipFilename = `${folderName}.zip`;

  const folderPromises = folders.map(async (folder) => {
    // Create a new folder in the zip file
    const zipFolder = zip.folder(folder.name);

    // Add each file to the folder

    try {
      const promises = folder.files.map(async (link) => {
        const file = await JSZipUtils.getBinaryContent(link.url);
        await zipFolder.file(`${link.name}`, file, { base64: true });
        // zipFolder.file(data);
      });
      await Promise.all(promises);
    } catch (error) {
      console.log(error);
    }

    // folder.files.forEach(async (file) => {
    //   zipFolder.file(file.name, file.url);
    // });
  });
  await Promise.all(folderPromises);

  zip
    .generateAsync({ type: 'blob' })
    .then(function (content) {
      saveAs(content, zipFilename);
    })
    .catch((err) => {
      console.log(err);
    });

  // Generate the zip file
  //   zip
  //     .generateAsync({ type: 'blob' })
  //     .then((content) => {
  //       // Create a URL for the zip file
  //       const url = URL.createObjectURL(content);

  //       // Create a new anchor element
  //       const link = document.createElement('a');

  //       // Set the href and download attributes of the anchor element
  //       link.href = url;
  //       link.download = `${folderName}.zip`;

  //       // Append the anchor element to the document
  //       document.body.appendChild(link);

  //       // Click the anchor element to trigger the download
  //       link.click();

  //       // Remove the anchor element from the document
  //       document.body.removeChild(link);

  //       // Revoke the URL for the zip file
  //       URL.revokeObjectURL(url);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
}

export default DownloadMultipleFolderAsZip;
