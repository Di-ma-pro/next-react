import Link from "next/dist/client/link"
import MainLayout from "../layouts/MainLayout";

const users = ({ users }) => {

    return (
        <MainLayout keywords={'users'}>
            <h1>Users</h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            <a>{user.name}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </MainLayout>
    )
}

export default users;

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return {
        props: { users },
    }
}