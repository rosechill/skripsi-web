import IconSearch from "@/assets/icons/IconSearch";
import React from "react";

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="lg:w-1/4 w-full lg:min-h-12 h-1/4 flex gap-4 items-center"> 
      <IconSearch/>
      <input
        type="text"
        placeholder="Search what you want here..."
        value={value}
        onChange={onChange}
        className="p-2 border-2 border-[#2E3E78] rounded-lg w-full h-12"
      />
    </div>
  );
};

export default SearchBar;
