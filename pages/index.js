import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter Cloe</title>
        <meta name="description" content="We are" />
        <link rel="icon" href="/favico.ico" />
      </Head>

      <main className="flex min-h-screen max-w-7xl mx-auto ">
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}

        {/* Widget */}

        {/* Model */}
      </main>
    </div>
  );
}
