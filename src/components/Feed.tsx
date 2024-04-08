"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearchChange = (e) => {};

  return (
    <section className="feed">
      <form action="" className="relative w-full flex-center">
        <input
          type="text"
          className="search_input peer"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
        />
      </form>
    </section>
  );
};

export default Feed;
