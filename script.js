//Selection
const dropArea = document.querySelector('.drag-area'),
dragText = dropArea.querySelector('header'),
button = dropArea.querySelector('button'),
input = dropArea.querySelector('input');

let file; // This Global variable and we will insert mult Fun

button.onclick  = () =>{
    input.click() //if user click on the button then the input also clicked
}

input.addEventListener('change', ()=>{
    // getting user select file and [0] this means if user select multiple file then we'll select only the first one
    file = this.files[0]
    dropArea.classList.add('active')
    showFile() //call  the Fun
})

//If The User Drag the File Over DropArea
dropArea.addEventListener('dragover', (e)=>{
    e.preventDefault()
    // console.log('File is Over DropArea');
    dropArea.classList.add('active')
    dragText.textContent = 'Release  to Upload File'
})

//If The User leave the File From DropArea
dropArea.addEventListener('dragleave', ()=>{
    // console.log('File is outSite The DropArea');
    dropArea.classList.remove('active')
    dragText.textContent = 'Drag & Drop to Upload File'
})

//If The User Drop the File on DropArea
dropArea.addEventListener('drop', (e)=>{
    e.preventDefault()
    // console.log('File dropped on DropArea');
    // getting user select file and [0] this means if user select multiple file then we'll select only the first one
    file = e.dataTransfer.files[0]
    // console.log(file);
   showFile() //call  the Fun
})

function showFile(){
    let fileType = file.type
    console.log(fileType);

    let validExtension = ['image/jpeg', 'image/jpg', 'image/png'] //adding some valid image
    if(validExtension.includes(fileType)){
        
       let fileReader = new FileReader()  //Create new FileReader Object
       fileReader.onload = () => {
          let fileURL = fileReader.result;  // passing user file Source in fileURL variable
          console.log(fileURL);
          let tag = `<img src='${fileURL}'>`
          dropArea.innerHTML = tag
          dropArea.classList.add('nonBorder')
        }
        fileReader.readAsDataURL(file)
    }else{
        alert("This is not an Image File")
        dropArea.classList.remove('active')
        dragText.textContent = 'Release  to Upload File'
    }
}