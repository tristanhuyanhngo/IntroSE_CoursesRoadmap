import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// function uploadImage(myImg,uploadBtn,removeBtn) {
//     var files = [];
//     var reader = new FileReader();

//     var input = document.createElement('input')
//     input.type = 'file'
    
//     input.onchange = e =>
//     {
//         files = e.target.files;
//         var extention = GetExtName(files[0]);
//         var name = GetFileName(files[0]);

//         reader.readAsDataURL(files[0]);
//     }
    
//     reader.onload = function()
//     {
//         myImg.src = reader.result;
//     }

//     uploadBtn.onclick = function()
//     {
//         input.click();
//     }

//     function GetFileExt(file)
//     {
//         var temp = file.name.split('.');
//         var ext = temp.slice(())
//     }
// }