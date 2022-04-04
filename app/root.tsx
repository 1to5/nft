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

import tailwindStylesheetUrl from "./styles/tailwind.css";
import fontStylesheetUrl from "./styles/fonts.css";
import { getUser } from "./session.server";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: fontStylesheetUrl },
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "preconnect", href: 'https://fonts.googleapis.com'},
    { rel: "preconnect", href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous'},
    { rel: "stylesheet", href: 'https://fonts.googleapis.com/css2?family=Quicksand&display=swap'},
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
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
