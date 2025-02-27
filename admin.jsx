import React, { useState } from "react";

const Admin= () => {
  const [profileImage, setProfileImage] = useState(null);
  const [actions, setActions] = useState([ ]);

  // Handle Image Upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file)); // Preview uploaded image
    }
  };

  return (
    <div className="dashboard">
      

      {/* Main Content */}
      <main className="main-content">
        <h1>Admin Dashboard</h1>

        {/* Profile Upload */}
        <div className="profile-section">
          <h2>Upload Profile Image</h2>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {profileImage && <img src={profileImage} alt="Profile Preview" className="profile-image" />}
        </div>

        {/* Action Log */}
        <div className="action-log">
          <h2>Recent Actions</h2>
          <ul>
            {actions.map((action, index) => (
              <li key={index}>{action}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Admin;
