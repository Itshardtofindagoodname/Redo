import React, { useState } from 'react';

const ImageUploader = ({ onImageSelected, defaultImage, label, text }) => {
  const [selectedImage, setSelectedImage] = useState(defaultImage);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
        onImageSelected(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const avatarChange = label === 'Avatar' ? 'border-black h-32 w-32 rounded-full overflow-hidden' : 'border-gray-500';
  const hobbyChange = label === 'Hobby' ? 'h-80 w-80 rounded-3xl overflow-hidden' : '';
  const bannerChange = label === 'Banner' ? 'h-44 w-full rounded overflow-hidden' : '';

  return (
    <div
      className={`relative ${bannerChange} ${hobbyChange} bg-gray-100 bg-cover bg-center border-2 ${avatarChange} flex items-center justify-center cursor-pointer`}
      onClick={() => document.getElementById(`${label}FileInput`).click()}
    >
      <input
        type="file"
        id={`${label}FileInput`}
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
      {selectedImage && (
        <img
          src={selectedImage}
          alt="Selected"
          className="w-full h-full object-cover"
        />
      )}
      {!selectedImage && <p className="text-center">{text}</p>}
    </div>
  );
};

const User = () => {
  const [bannerImage, setBannerImage] = useState(null);
  const [avatarImage, setAvatarImage] = useState(null);
  const [hobbyImage, setHobbyImage] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    console.log('Submitted');
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <div className="w-full font-bold text-lg">
        <ImageUploader
          onImageSelected={(image) => setBannerImage(image)}
          defaultImage={bannerImage}
          label="Banner"
          text="Banner Image"
        />
      </div>
      <div className="absolute left-2 top-5 text-sm">
        <ImageUploader
          onImageSelected={(image) => setAvatarImage(image)}
          defaultImage={avatarImage}
          label="Avatar"
          text="Choose Profile Picture"
        />
      </div>
      <div className="mt-10 font-medium text-base">
        <ImageUploader
          onImageSelected={(image) => setHobbyImage(image)}
          defaultImage={hobbyImage}
          label="Hobby"
          text="Upload a Picture of you doing anything you like"
        />
      </div>
      {bannerImage && avatarImage && hobbyImage && !isSubmitted && (
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default User;
