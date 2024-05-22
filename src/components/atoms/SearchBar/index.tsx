import IconSearch from "@/assets/icons/IconSearch";
import { Input } from "@nextui-org/react";
import React from "react";

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <Input
      classNames={{
        base: "h-12 desktop:w-1/4 w-3/4",
        mainWrapper: "h-full",
        input: "text-small",
        inputWrapper:
          "h-full font-normal bg-[#fff] border-2 border-[#2E3E78] rounded-lg",
      }}
      placeholder="Type to search..."
      size="md"
      value={value}
      onChange={onChange}
      startContent={<IconSearch />}
      type="search"
    />
  );
};

export default SearchBar;
