import React from "react";

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search what you want here..."
      value={value}
      onChange={onChange}
      className="p-2 border-2 border-[#2E3E78] rounded-lg lg:w-1/4 w-full lg:h-12 h-1/4"
    />
  );
};

export default SearchBar;