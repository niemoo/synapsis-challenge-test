'use client';
import { IoPersonAdd } from 'react-icons/io5';
import AddModal from '@/components/AddModal';
import UsersList from '@/components/UsersList';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '@/components/utils/Header';

const Historypage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://gorest.co.in/public/v2/users?access-token=e835f26cf43cf244c017e2ae7ee7d26c03ae6495750eb08c5a5dccd5ec2d5568');
        setData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="max-w-screen-md mx-auto p-5">
      <Header title="Data History" />
      <AddModal title="Add New Data" icon={<IoPersonAdd className="text-xl" />} />
      <UsersList data={data} />
    </main>
  );
};
export default Historypage;
