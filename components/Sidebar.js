import Image from "next/Image";
import SidebarMenuItem from "./SidebarMenuItem";
import { DotsHorizontalIcon, HomeIcon} from "@heroicons/react/solid";
import {BellIcon, BookmarkIcon, HashtagIcon, InboxIcon,ClipboardIcon, UserIcon, DotsCircleHorizontalIcon} from "@heroicons/react/outline";

function Sidebar() {
  console.log('From Sidebar Component')
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
      {/* Twitter logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1" >
        <Image
          alt="twittwer logo"
          src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/twitter_logo_blue.png.twimg.768.png"
          width="50"
          height={50}
        ></Image>
      </div>
      {/* Menu */}
        <div className="mt-4 mb-2.5 xl:items-start">
            <SidebarMenuItem text="Home" Icon={HomeIcon} active />
            <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
            <SidebarMenuItem text="Notifications" Icon={BellIcon} />
            <SidebarMenuItem text="Message" Icon={InboxIcon} />
            <SidebarMenuItem text="Bookmark" Icon={BookmarkIcon} />
            <SidebarMenuItem text="List" Icon={ClipboardIcon} />
            <SidebarMenuItem text="Profile" Icon={UserIcon} />
            <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
        </div>
      {/* Button */}
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>

      {/* Mini Profile */}
        <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
                <img 
                    src="/images/profile.jpg" 
                    alt="user-profile" 
                    className="rounded-full h-10 w-10 xl:mr-2"
                />
                <div className="leading-5 hidden xl:inline">
                    <h4 className="font-bold">Anwar Sadat Ayub</h4>
                    <p className="text-gray-500">@momokid</p>
                </div>
                <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline"/>
        </div>

    </div>
  );
}

export default Sidebar;
