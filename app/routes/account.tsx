import { ActionFunction, LoaderFunction, json, useLoaderData } from "remix";
import { redirect, Link } from 'remix';
import { getUserId, logout } from "~/session.server";

export const loader:LoaderFunction = async ({request}) => {
    const userId = await getUserId(request);
    if (!userId) return redirect('/login');

    return json({request});
}

export default function Account() {
    const { request } = useLoaderData()
    return (
    <div>
        Wait to connect the wallet or <Link to="/logout">logout</Link>
    </div>
    )
}