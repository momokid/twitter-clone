import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

const Feed = () => {
  const posts =[
    {
      id:1,
      name:"Anwar Sadat Ayub",
      username:"momokid",
      img:"/images/post-1.jpg",
      userImg:"/images/profile.jpg",
      text:"This is my first post",
      timestamp:"2 hours ago"
    },
    {
      id:2,
      name:"Hassan Alhassan",
      username:"walida",
      img:"/images/service-4.jpg",
      userImg:"/images/walida-profile.jpg",
      text:"Beautiful view!",
      timestamp:"43 minutes ago"
    }
  ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {
        posts.map(post=> <Post key={post.id} post={post}/>)
      }
    </div>
  );
};

export default Feed;
