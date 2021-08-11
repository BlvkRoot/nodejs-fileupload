(function(_document){
  // Caching the Dom
  let fileUploadInput = _document.querySelector('#upload-file');
  let uploadForm = _document.querySelector('form#form-upload');
  let progressBar = _document.querySelector('#progress');
  let fileList = [];

  // Function Implementations
  const handleFileInputChange = (file) => {
    // Set fileList
    fileList = file.target.files;
  }

  const handleUploadProgress = (event) => {
    let progressPercentage = Math.round((event.loaded / event.total) * 100);
    progressBar.value = progressPercentage;
    console.log('Percentage ', progressPercentage);

  }

  const handleFormUpload = async (event) => {
    event.preventDefault();

    console.log(fileList[0]);
    let ajax = new XMLHttpRequest();
    ajax.responseType.
    ajax.upload.addEventListener('progress', handleUploadProgress, false);
    ajax.open('POST', '/file/upload');
    ajax.send({file: 'Ola'});

  }

  // Binding events
  fileUploadInput.addEventListener('change', handleFileInputChange);
  uploadForm.addEventListener('submit', handleFormUpload);

})(document);