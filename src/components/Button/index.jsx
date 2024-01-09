'use client';

import { useState } from 'react';

const Button = ({ title, icon, modal: ModalComponent, className, oldName, oldEmail, oldGender, oldStatus, userID }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="mb-5">
      <button onClick={handleOpen} title="Add New User" className={`${className} flex items-center gap-2 rounded-md p-3 border border-gray-500 w-fit`}>
        {icon}
        <h3>{title}</h3>
      </button>
      <ModalComponent open={open} handleOpen={handleOpen} oldName={oldName} oldEmail={oldEmail} oldGender={oldGender} oldStatus={oldStatus} />
    </div>
  );
};
export default Button;
