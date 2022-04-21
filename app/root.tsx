import {
  json,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { LinksFunction, MetaFunction, LoaderFunction } from "remix";
import { useCatch } from "@remix-run/react";
import {useState} from 'react';

import NotFound from './routes/404.jsx';
import Nav from './routes/navbar.jsx';
import Footer from './routes/components/footer.jsx';

import tailwindStylesheetUrl from "./styles/tailwind.css";
import fontStylesheetUrl from "./styles/fonts.css";
import { getUser } from "./session.server";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: fontStylesheetUrl },
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "preconnect", href: 'https://fonts.googleapis.com'},
    { rel: "preconnect", href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous'},
    { rel: "stylesheet", href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap'},
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "NFT",
  viewport: "width=device-width,initial-scale=1",
});


type LoaderData = {
  user: Awaited<ReturnType<typeof getUser>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  return json<LoaderData>({
    user: await getUser(request),
  });
};

export default function App() {
  const [theme, setTheme] = useState('');

  function toggleTheme() {
    theme === "" ? setTheme("dark") : setTheme("")
  }

  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className={`h-full ${theme}`}>
        <Nav/>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Footer/>
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        {/* add the UI you want your users to see */}
        <Nav/>
        <div className='bg-blue-100 dark:bg-blue-600 h-full w-full'>
          <NotFound/>
        </div>
        <Scripts />
      </body>
    </html>
  );
}


export function CatchBoundary() {
  const caught = useCatch();

  return (
    <div>
      <h1>Caught</h1>
      <p>Status: {caught.status}</p>
      <pre>
        <code>{JSON.stringify(caught.data, null, 2)}</code>
      </pre>
    </div>
  );
}