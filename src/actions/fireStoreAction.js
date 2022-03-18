import {
    collection,
    addDoc,
  } from "firebase/firestore";
  import { db } from "../firebase";
  
  export const addUser = async (user) => {
    const userRef = await addDoc(collection(db, "users"), user);
    return userRef;
  };