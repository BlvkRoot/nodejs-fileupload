(function(_document){
  // Caching the Dom
  let fileUploadInput = _document.querySelector('#upload-file');
  let uploadForm = _document.querySelector('form#form-upload');
  let progressBar = _document.querySelector('#progress');
  let uploadBtn = _document.querySelector('#upload-btn');
  let fileList = [];
  let imageBase64 = "";

  // Function Implementations
  const handleFileInputChange = (file) => {
    // Set fileList
    fileList = file.target.files;

    // Enable Upload button
    uploadBtn.removeAttribute('disabled');
  }

  const handleUploadProgress = (event) => {
    let progressPercentage = Math.round((event.loaded / event.total) * 100);
    progressBar.value = progressPercentage; //Set progress bar value
    console.log('Percentage ', progressPercentage);

  }

  const handleFormUpload = async (event) => {
    event.preventDefault();
    const { name, type } = fileList[0];

    let fileReader = new FileReader();

    fileReader.onload = () => {
      imageBase64 = fileReader.result;
      
      console.log(imageBase64);
      
      let ajax = new XMLHttpRequest();
      ajax.upload.addEventListener('progress', handleUploadProgress, false);
      ajax.open('POST', '/file/upload');
      ajax.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      ajax.send(JSON.stringify({filename: `${name}`, mime: `${type}`, imageBase64: `${imageBase64}`}));
    }

    fileReader.readAsDataURL(fileList[0]);
    
    // Disable upload button after successfull upload
    uploadBtn.setAttribute('disabled', 'disabled');

  }

  // Binding events
  fileUploadInput.addEventListener('change', handleFileInputChange);
  uploadForm.addEventListener('submit', handleFormUpload);

})(document);