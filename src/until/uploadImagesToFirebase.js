import {ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { imgDB } from "./config";

// Function to upload multiple image files to Firebase
const uploadImagesToFirebase = async (files) => {

  const imageUrls = [];

  await Promise.all(
    files.map(async (file) => {
      const storageRef = ref(imgDB, `images/${file.name}`);
      await uploadBytes(storageRef, file);
      const imageUrl = await getDownloadURL(storageRef);
      imageUrls.push(imageUrl);
    })
  );

  return imageUrls.join(' ');
};
export default uploadImagesToFirebase;