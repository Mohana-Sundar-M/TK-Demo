// src/Profile.tsx
import React, { ReactNode } from "react";

import "./profile.css";
import ProfileHead from "../../components/profile-header/ProfileHead";
import SideMenu from "../../components/layout/right-navbar/SideMenu";

interface ProfileProps {
  children: ReactNode;
};

const Profile: React.FC<ProfileProps> = ({children}) => {
  return (
      <div className="min-w-full">
        <ProfileHead />
        <div className=" min-h-svh flex md:flex-row bg-gray-100 cu500:px-10 md-px-20 pt-4 pt-3 rounded-lg flex-col gap-4 py-4">
          <SideMenu />
          <div className="w-full h-fit">
            {children}
          </div>
        </div>
      </div>
  );
};

export default Profile;
