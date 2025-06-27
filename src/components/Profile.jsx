import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const createdAt = user.metadata?.creationTime
    ? new Date(user.metadata.creationTime).toLocaleDateString()
    : "N/A";
  return (
    <div className="max-w-md mx-auto mt-10 bg-base-100 shadow-lg rounded-xl p-6">
      <div className="flex flex-col items-center">
        <div className="avatar mb-4">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src={user.photoURL || ""}
              alt={user.displayName || "User"}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-primary">
          {user.displayName || "Unnamed User"}
        </h2>
        <p className="text-sm text-gray-500">{user.email}</p>

        <div className="mt-6 w-full text-left">
          <h3 className="text-lg font-semibold mb-2 text-neutral">
            Profile Info
          </h3>
          <ul className="space-y-2">
            <li>
              <strong>Email Verified:</strong>{" "}
              {user.emailVerified ? "✅ Yes" : "❌ No"}
            </li>
            <li>
              <strong>Account Created:</strong> {createdAt}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
