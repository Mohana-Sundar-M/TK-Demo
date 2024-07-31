import React from "react";
import Header from "../../components/theaters(nedd to resctructure)/Header";
import SearchBar from "../../components/theaters(nedd to resctructure)/SearchBar";
import { TheaterList } from "../../components/theaters(nedd to resctructure)/TheaterList";

const Theater: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <SearchBar />
      <TheaterList />
    </div>
  );
};

export default Theater;
