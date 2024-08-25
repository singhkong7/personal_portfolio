import React, { useState } from "react";

const CustomDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="w-100 mx-10">
      <select
        value={selectedLanguage}
        onChange={handleChange}
        className="w-full p-1 border border-slate-400 bg-slate-950 text-white mx-5"
      >
        <option value="English" className="flex items-center text-white">
          English
        </option>
        <option value="Hindi" className="flex items-center text-white">
          Hindi
        </option>
      </select>
    </div>
  );
};

export default CustomDropdown;
