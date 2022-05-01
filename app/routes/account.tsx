import { ActionFunction, LoaderFunction, json } from "remix";
import { redirect } from 'remix';
import { getUserId } from "~/session.server";

export const loader:LoaderFunction = async ({request}) => {
    const userId = await getUserId(request);
    if (!userId) return redirect('/login');

    return json({});
}

export default function Account() {
    return (
    <div>
        Wait to connect the wallet
    </div>
    )
}