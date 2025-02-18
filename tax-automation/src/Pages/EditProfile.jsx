import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { db, storage } from "../Firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const EditProfile = () => {
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [profilePicURL, setProfilePicURL] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setName(userDoc.data().name);
          setProfilePicURL(userDoc.data().profilePic || "");
        }
      }
    };
    fetchUserData();
  }, [user]);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const storageRef = ref(storage, `profilePics/${user.uid}`);
    await uploadBytes(storageRef, file);

    const downloadURL = await getDownloadURL(storageRef);
    setProfilePicURL(downloadURL);

    // Update Firestore with new profile picture URL
    await updateDoc(doc(db, "users", user.uid), { profilePic: downloadURL });
    alert("Profile picture updated!");
  };

  const handleSave = async () => {
    if (!name) return;

    setLoading(true);
    await updateDoc(doc(db, "users", user.uid), { name });
    setLoading(false);
    alert("Profile updated successfully!");
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      {profilePicURL && <img src={profilePicURL} alt="Profile" width={100} />}
      <input type="file" onChange={handleImageUpload} />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSave} disabled={loading}>
        {loading ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );
};

export default EditProfile;
