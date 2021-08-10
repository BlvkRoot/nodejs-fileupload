(function(_document){
  // Caching the Dom
  let fileUploadInput = _document.querySelector('#upload-file');

  // Function Implementations
  const handleFileInputChange = (file) => {
    let ajax = new XMLHttpRequest();
    ajax.upload.addEventListener('progress', handleUploadProgress, false);
    ajax.open('POST', '/file/upload');
    ajax.send(file.target.files);
  }

  const handleUploadProgress = (progress) => {
    console.log('Progress ', progress.loaded);
  }

  // Binding events
  fileUploadInput.addEventListener('change', handleFileInputChange);

})(document);