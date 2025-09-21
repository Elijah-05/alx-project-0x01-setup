import UserCard from "@/components/common/UserCard"
import { UserProps } from "@/interfaces"

const Users: React.FC<UserProps[]> = ({ posts }) => {
    return <div>
       {posts.map((user: UserProps) => <UserCard {...user}  />)}
    </div>
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

export default Users