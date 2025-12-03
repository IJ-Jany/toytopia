import React, { use, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';

const Profile = () => {
  const { user, auth } = use(AuthContext);

  const [name, setName] = useState(user?.displayName);
  const [photo, setPhoto] = useState(user?.photoURL);

  const handleDetailsUpdate = (e) => {
    e.preventDefault();
    const newName = e.target.name.value;
    const newPhoto = e.target.photo.value;

    if (!newName) {
      Swal.fire("Please enter your name");
      return;
    }
    if (!newPhoto) {
      Swal.fire("Please provide a photo URL");
      return;
    }

    updateProfile(auth.currentUser, { displayName: newName, photoURL: newPhoto })
      .then(() => {
        setName(newName);
        setPhoto(newPhoto);
        Swal.fire("Profile updated successfully");
      })
      .catch(error => {
        Swal.fire(error.message);
      });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-3xl p-8 border border-purple-100">
      <title>Tytopia - Profile</title>

      {/* Profile Header */}
      <div className="text-center mb-8">
        <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-purple-300 shadow-md">
          <img src={photo} alt="User" className="w-full h-full object-cover" />
        </div>

        <h1 className="font-bold text-2xl text-purple-700 mt-4">{name}</h1>
        <p className="text-gray-500 text-sm">{user?.email}</p>
      </div>

      {/* Form Card */}
      <div className="bg-purple-50 p-6 rounded-2xl shadow-inner border border-purple-200">
        <form onSubmit={handleDetailsUpdate}>
          
          {/* Name Input */}
          <div className="mb-5">
            <label className="font-semibold text-gray-700">Name</label>
            <input
              name="name"
              className="mt-1 w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition text-gray-700"
              type="text"
              placeholder="Enter your name"
            />
          </div>

          {/* Photo Input */}
          <div className="mb-5">
            <label className="font-semibold text-gray-700">Photo URL</label>
            <input
              name="photo"
              className="mt-1 w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition text-gray-700"
              type="text"
              placeholder="Paste your photo URL"
            />
          </div>

          {/* Submit Button */}
          <button className="w-full bg-purple-500 text-white font-bold py-2 rounded-xl hover:bg-purple-600 transition shadow-md">
            Update Profile
          </button>

        </form>
      </div>
    </div>
  );
};

export default Profile;
