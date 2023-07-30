"use client";
import React, { useState } from "react";
import { SearchManuFacturer } from ".";
import Image from "next/image";

const SearchButton = ({ otherClasses }: { otherClasses?: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/assets/magnifying-glass.svg"
      alt=""
      width={20}
      height={20}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer.trim() === "" && model.trim() === "") {
      return alert("Please provide some input");
    }
  };

  return (
    <form className="searcbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManuFacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/assets/model-icon.png"
          alt=""
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          placeholder="Model"
          className="searchbar__input"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <SearchButton otherClasses="hidden sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
