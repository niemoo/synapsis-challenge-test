import { FaUserEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import Button from '@/components/Button';
import EditModal from '../EditModal';

const UsersList = ({ data }) => {
  return (
    <section className="flex flex-col gap-5">
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
            <Button title="Edit Data" icon={<FaUserEdit />} modal={EditModal} className="bg-green-400 hover:bg-green-600" oldName={user.name} oldEmail={user.email} oldGender={user.gender} oldStatus={user.status} userID={user.id} />
            <Button title="Delete Data" icon={<MdDeleteForever />} modal={EditModal} className="bg-red-400 hover:bg-red-700" oldName={user.name} oldEmail={user.email} oldGender={user.gender} oldStatus={user.status} userID={user.id} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default UsersList;
