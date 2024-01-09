import { IoPersonAdd } from 'react-icons/io5';

const AddBar = () => {
  return (
    <div className="mb-5">
      <button className="flex items-center gap-2 bg-green-400 hover:bg-green-500 rounded-md p-3 border border-gray-500 w-fit">
        <IoPersonAdd className="text-xl" />
        <h3>Add New Data</h3>
      </button>
    </div>
  );
};
export default AddBar;
