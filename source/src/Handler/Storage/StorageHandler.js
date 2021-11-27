import {
  getStorage,
  ref,
  getDownloadURL,
} from 'firebase/storage';

export function downloadAvatar(imgName) {
  console.log(imgName);

  const storage = getStorage();
  getDownloadURL(ref(storage, `images/${imgName}.jpg`))
    .then((url) => {
      // `url` is the download URL for 'images/stars.jpg'

      // This can be downloaded directly:
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open("GET", url);
      xhr.send();

      // Or inserted into an <img> element
      const img = document.getElementById("Avatar_Image");
      img.setAttribute("src", url);
    })
    .catch((error) => {
      console.error(error.message);
    });
}
