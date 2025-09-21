import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({id, name, username, email, address, phone, website, company }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name} ({username})</h2>
        <p className="text-gray-600">{email}</p>
      </div>
      <div className="text-gray-600 mb-4">
        <p><strong>Address:</strong> {address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Website:</strong> {website}</p>
        <p><strong>Company:</strong> {company.name} - {company.catchPhrase}</p>
      </div>
    </div>
  );
}

export default UserCard;