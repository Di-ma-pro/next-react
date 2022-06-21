import MainLayout from "../layouts/MainLayout";
import Head from "next/head";
import ErrorLayout from "../layouts/ErrorLayout";

export default function ErrorNotFound() {
    return (
        <ErrorLayout>
            <h1>404</h1>
            <h4>Через 5 секунд вы будете перенправлены на главную</h4>
        </ErrorLayout>
    )
}