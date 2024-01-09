'use client';

import { Button, Dialog } from '@material-tailwind/react';
import axios from 'axios';
import { useState } from 'react';

const EditModal = ({ icon, title, userID, oldName, oldEmail, oldGender, oldStatus }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState('male');
  const [status, setStatus] = useState('active');

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleEditDataUser = async () => {
    try {
      const res = await axios.put(`https://gorest.co.in/public/v2/users/${userID}?access-token=e835f26cf43cf244c017e2ae7ee7d26c03ae6495750eb08c5a5dccd5ec2d5568`, {
        name: name || oldName,
        email: email || oldEmail,
        gender: gender || oldGender,
        status: status || oldStatus,
      });

      window.location.reload();
    } catch (err) {
      console.log(userID);
      console.error(`Error : ${err}`);
    }
  };

  return (
    <div>
      <button onClick={handleOpen} title="Add New User" className={`bg-green-400 hover:bg-green-600 flex items-center gap-2 rounded-md p-3 border border-gray-500 w-fit`}>
        {icon}
        <h3>{title}</h3>
      </button>

      <Dialog open={open} handler={handleOpen} className="font-inter">
        <form className="flex flex-col gap-5 p-5">
          <h1 className="font-bold text-black">EDIT DATA USER</h1>
          <input label="Name" placeholder={oldName} onChange={handleNameChange} className="text-black p-2 border border-gray-500 rounded-md" />
          <input label="Email" placeholder={oldEmail} onChange={handleEmailChange} className="text-black p-2 border border-gray-500 rounded-md" />
          <select label="Select Gender" onChange={handleGenderChange} defaultValue={oldGender} className="p-2 border border-gray-500 rounded-md">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select label="Select Status" onChange={handleStatusChange} defaultValue={oldStatus} className="p-2 border border-gray-500 rounded-md">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <div className="flex justify-end">
            <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
              <span>Cancel</span>
            </Button>
            <Button
              className="bg-green-500 hover:bg-green-700"
              onClick={() => {
                handleOpen();
                handleEditDataUser();
              }}
            >
              <span>Confirm</span>
            </Button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default EditModal;
