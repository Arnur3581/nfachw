import { GoHomeFill } from "react-icons/go";
import { IoNotificationsOutline, IoPersonOutline } from "react-icons/io5";
import { LuBookmark } from "react-icons/lu";
import { CgMoreO } from "react-icons/cg";
import { RiHashtag } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";

const menuItems = [
  {
    name: "Home",
    icon: GoHomeFill,
    link: "/",
  },
  {
    name: "Explore",
    icon: RiHashtag,
    link: "/",
  },
  {
    name: "Notifications",
    icon: IoNotificationsOutline,
    link: "/",
  },
  {
    name: "Messages",
    icon: MdOutlineMailOutline,
    link: "/",
  },
  {
    name: "Bookmarks",
    icon: LuBookmark,
    link: "/",
  },
  {
    name: "Profile",
    icon: IoPersonOutline,
    link: "/",
  },
  {
    name: "More",
    icon: CgMoreO,
    link: "/",
  },
];

export { menuItems };
