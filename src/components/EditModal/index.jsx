'use client';

import { Button, Dialog, DialogFooter, Input } from '@material-tailwind/react';
import axios from 'axios';
import { useState } from 'react';

const EditModal = ({ open, handleOpen, oldName, oldEmail, oldGender, oldStatus }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState('male');
  const [status, setStatus] = useState('active');

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

  const handleAddDataUser = async () => {
    try {
      if (!name || !email || !gender || !status) {
        alert('Please fill in all required fields.');
        return;
      }
      const res = await axios.post('https://gorest.co.in/public/v2/users?access-token=e835f26cf43cf244c017e2ae7ee7d26c03ae6495750eb08c5a5dccd5ec2d5568', { name: name, email: email, gender: gender, status: status });

      console.log(res);
      if (res.status == 201) {
        alert('success');
      }
      //   window.location.reload();
    } catch (err) {
      console.error(`Error : ${err}`);
    }
  };

  return (
    <Dialog open={open} handler={handleOpen} className="font-inter">
      <form className="flex flex-col gap-5 p-5">
        <h1 className="font-bold text-black">EDIT DATA USER</h1>
        <Input label="Name" onChange={handleNameChange} required />
        <Input label="Email" onChange={handleEmailChange} required />
        <select label="Select Gender" onChange={handleGenderChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select label="Select Status" onChange={handleStatusChange}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </form>

      <DialogFooter className="font-inter">
        <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
          <span>Cancel</span>
        </Button>
        <Button
          variant="gradient"
          color="green"
          onClick={() => {
            handleOpen();
            handleAddDataUser();
          }}
        >
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default EditModal;
