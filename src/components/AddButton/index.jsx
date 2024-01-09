import { useState } from 'react';
import { IoPersonAdd } from 'react-icons/io5';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const AddButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="mb-5">
      <button
        className="flex items-center gap-2 bg-green-400 hover:bg-green-500 rounded-md p-3 border border-gray-500 w-fit"
        onClick={() => setIsDialogOpen(true)}
      >
        <IoPersonAdd className="text-xl" />
        <h3>Add New Data</h3>
      </button>

      {isDialogOpen && (
        <Dialog onClose={() => setIsDialogOpen(false)}>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default AddButton;
