const ImageNameFromUrl = (links) => {
  const decode = decodeURIComponent(links);

  const linkName = decode?.split('/');
  const name = linkName[linkName.length - 1];
  const imgName = name.split('-')[0];
  const ext = name.split('.')[1];

  if (imgName.length > 40) {
    const out = `${imgName.substring(0, 40) + '....' + ext}`;
    return out;
  } else {
    const out = `${imgName + '.' + ext}`;
    return out;
  }
};

export default ImageNameFromUrl;
