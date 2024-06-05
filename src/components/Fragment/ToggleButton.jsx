import React, { useState, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";

const ToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(theme === "dark");

  useEffect(() => {
    // Saat komponen dimuat, cek nilai penyimpanan lokal
    const storedTheme = localStorage.getItem("theme");
    setIsChecked(storedTheme === "dark");
  }, []);

  const handleCheckboxChange = () => {
    const newCheckedStatus = !isChecked;
    setIsChecked(newCheckedStatus);
    const newTheme = newCheckedStatus ? "dark" : "light";

    setTheme(newTheme);
    // Simpan status tema ke penyimpanan lokal
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
       <label className='group autoSaverSwitch relative inline-flex cursor-pointer select-none items-center'>
        <input
          type='checkbox'
          name='autoSaver'
          className='sr-only'
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`slider mr-1 flex h-[15px] w-[29px] items-center rounded-full p-1 duration-200 ${
            isChecked ? 'bg-neutral-400 group-hover:bg-white duration-200' : 'bg-zinc-400 group-hover:bg-black duration-200' 
          }`}
        >
          <span
            className={`dot h-[9px] w-[9px] rounded-full bg-zinc-50 dark:bg-neutral-950 duration-200 ${
              isChecked ? '' : 'translate-x-3'
            }`}
          ></span>
        </span>
        <span className='label flex items-center text-md font-medium'>
         <span className='pl-1'> {isChecked ? <p className="text-zinc-400 group-hover:text-white duration-200">Dark</p> : <p className="text-zinc-600 group-hover:text-black duration-200">Light</p> } </span>
        </span>
      </label>
    </>
  );
};

export default ToggleButton;
