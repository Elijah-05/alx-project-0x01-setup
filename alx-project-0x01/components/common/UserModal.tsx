import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    id: Date.now(),
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const key = name.split(".")[1];
      setUser((prev: UserData) => ({
        ...prev,
        address: { ...prev.address, [key]: value },
      }));
    } else if (name.startsWith("geo.")) {
      const key = name.split(".")[1];
      setUser((prev: UserData) => ({
        ...prev,
        address: {
          ...prev.address,
          geo: { ...prev.address.geo, [key]: value },
        },
      }));
    } else if (name.startsWith("company.")) {
      const key = name.split(".")[1];
      setUser((prev: UserData) => ({
        ...prev,
        company: { ...prev.company, [key]: value },
      }));
    } else {
  setUser((prev: UserData) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input name="name" value={user.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Username</label>
            <input name="username" value={user.username} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input name="email" value={user.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone</label>
            <input name="phone" value={user.phone} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Website</label>
            <input name="website" value={user.website} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Street</label>
              <input name="address.street" value={user.address.street} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Suite</label>
              <input name="address.suite" value={user.address.suite} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">City</label>
              <input name="address.city" value={user.address.city} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Zipcode</label>
              <input name="address.zipcode" value={user.address.zipcode} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Geo Lat</label>
              <input name="geo.lat" value={user.address.geo.lat} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Geo Lng</label>
              <input name="geo.lng" value={user.address.geo.lng} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Company Name</label>
              <input name="company.name" value={user.company.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Catch Phrase</label>
              <input name="company.catchPhrase" value={user.company.catchPhrase} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">BS</label>
              <input name="company.bs" value={user.company.bs} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600 hover:text-gray-800">Cancel</button>
            <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;