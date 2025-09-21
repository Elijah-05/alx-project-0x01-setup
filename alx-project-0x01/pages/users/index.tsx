import { useState } from "react";
import Header from "@/components/layout/Header"
import { PostData, UserData, UserProps } from "@/interfaces"
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";

const Users: React.FC<UserProps[]> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState<UserData | null>(null);


  const handleAddUser = (newPost: UserData) => {
    setPost({ ...newPost, id: posts.length + 1 });
  };

  return (
     <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className=" text-2xl font-semibold">User Content</h1>
          <button onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button>
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {
            posts.map((post: UserProps, key: number) => (
              <UserCard {...post} key={key} />
            ))
          }
        </div>
      </main>

      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Users;