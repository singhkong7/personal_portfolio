import React, { useState } from "react";
import Switch from "react-switch";
import CustomDropdown from "./CustomDropDown";

function Header() {
  const [darkModeStatus, setDarkModeStatus] = useState(false);

  const handleModeStatus = () => {
    setDarkModeStatus((prevStatus) => !prevStatus);
  };

  return (
    <div className="flex-1 flex row p-5 mx-1 justify-between">
      <h1 className="text-rose-600 font-bold text-xl">Priyansh's Portfolio</h1>
      <div className="flex-2 flex row align-middle justify-between">
        <CustomDropdown/>
          <Switch
            onChange={handleModeStatus}
            checked={darkModeStatus}
            offColor="#ff0000"
            onColor="#808080"
            onHandleColor="#fff"
            offHandleColor="#fff"
            uncheckedIcon={false}
            checkedIcon={false}
          />
      </div>
    </div>
  );
}

export default Header;
