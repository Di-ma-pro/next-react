import { useRouter } from "next/router"
import MainLayout from "../../layouts/MainLayout"

export default function ({user}) {
    const {query} = useRouter()
    
    return (
        <MainLayout keywords={'user-page'}>
            <h1>Пользователь {query.id}</h1>
            <div>Name: {user.name}</div>
        </MainLayout>
    )
}

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()

    return {
        props: {user},
    }
}