import { useEffect, useState } from "react";
import type { Route } from "../+types/profile";
import Navigation from "../components/Navigation";
import { useUserStore } from "../store/userStore";

interface User {
  id: string;
  name: string;
  email: string;
}

interface EditedUser {
  name: string;
  email: string;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "User Profiles" },
    { name: "description", content: "View and manage user profiles" },
  ];
}

export default function ProfilePage() {
  const { users, deleteUser, updateUser, fetchUsers } = useUserStore();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedUser, setEditedUser] = useState<EditedUser>({
    name: "",
    email: "",
  });

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleEdit = (user: User) => {
    setEditingId(user.id);
    setEditedUser({ name: user.name, email: user.email });
  };

  const handleUpdate = () => {
    if (editingId !== null) {
      updateUser(editingId, editedUser);
      setEditingId(null);
    }
  };

  return (
    <div className="p-4">
      <Navigation />
      <h1 className="text-2xl font-bold mb-4">Registered Users</h1>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul className="space-y-4">
          {users.map((user: User) => (
            <li key={user.id} className="p-3 border rounded-md">
              {editingId === user.id ? (
                <div className="flex flex-col space-y-2">
                  <input
                    className="border p-1 rounded"
                    type="text"
                    value={editedUser.name}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, name: e.target.value })
                    }
                  />
                  <input
                    className="border p-1 rounded"
                    type="email"
                    value={editedUser.email}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, email: e.target.value })
                    }
                  />
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={handleUpdate}
                  >
                    Update
                  </button>
                </div>
              ) : (
                <div className="flex justify-between items-center">
                  <span>
                    <strong>{user.name}</strong> - {user.email}
                  </span>
                  <div>
                    <button
                      className="mr-2 bg-yellow-500 text-white px-2 py-1 rounded"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
