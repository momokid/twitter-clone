import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Home | Twitter Clone</title>
        <meta name="description" content="We are" />
        <link rel="icon" href="/twitter-icon.png" />
      </Head>

      <main className="flex min-h-screen  mx-auto ">
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
          <Feed/>

        {/* Widget */}
          <Widgets/>

        {/* Model */}
      </main>
    </div>
  );
}
