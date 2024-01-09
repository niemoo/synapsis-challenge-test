'use client';

import { Button, Dialog } from '@material-tailwind/react';
import axios from 'axios';
import { useState } from 'react';

const DeleteModal = ({ icon, title, userID }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const handleDeleteDataUser = async () => {
    try {
      const res = await axios.delete(`https://gorest.co.in/public/v2/users/${userID}?access-token=e835f26cf43cf244c017e2ae7ee7d26c03ae6495750eb08c5a5dccd5ec2d5568`);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button onClick={handleOpen} title="Add New User" className={`bg-red-400 hover:bg-red-700 flex items-center gap-2 rounded-md p-3 border border-gray-500 w-fit`}>
        {icon}
        <h3>{title}</h3>
      </button>

      <Dialog open={open} handler={handleOpen} className="font-inter">
        <div className="p-5">
          <h1>Are you sure delete this user?</h1>
          <div className="flex justify-end mt-5">
            <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
              <span>Cancel</span>
            </Button>
            <Button
              className="bg-green-500 hover:bg-green-700"
              onClick={() => {
                handleOpen();
                handleDeleteDataUser();
              }}
            >
              <span>Confirm</span>
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default DeleteModal;
