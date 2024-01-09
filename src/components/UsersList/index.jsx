import { FaUserEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import Button from '@/components/Button';
import EditModal from '../EditModal';
import DeleteModal from '../DeleteModal';

const UsersList = ({ data }) => {
  return (
    <section className="flex flex-col gap-5 mt-5">
      {data?.map((user) => (
        <div key={user.id} className="border border-gray-500 rounded-md p-5 shadow-md">
          <div>
            <h2 className="font-semibold mb-2">{user.name}</h2>
            <h3 className="text-sm text-gray-500">Id : {user.id}</h3>
            <h3 className="text-sm text-gray-500">Email : {user.email}</h3>
            <h3 className="text-sm text-gray-500">Gender : {user.gender}</h3>
            <h3 className="text-sm text-gray-500">Status : {user.status}</h3>
          </div>
          <div className="flex gap-5 mt-5">
            <EditModal title="Edit Data" icon={<FaUserEdit />} userID={user.id} oldName={user.name} oldEmail={user.email} oldGender={user.gender} oldStatus={user.status} />
            <DeleteModal title="Delete Data" icon={<MdDeleteForever />} userID={user.id} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default UsersList;
