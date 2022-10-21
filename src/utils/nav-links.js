import { ImStatsBars } from "react-icons/im";
import { MdQueryStats } from "react-icons/md";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const navLinks = [
  {
    id: 1,
    title: "stats",
    icon: <ImStatsBars />,
    path: "/",
  },
  {
    id: 2,
    title: "All Jobs",
    icon: <MdQueryStats />,
    path: "/all-jobs",
  },
  {
    id: 3,
    title: "Add Job",
    icon: <AiOutlineAppstoreAdd />,
    path: "add-job",
  },
  {
    id: 4,
    title: "Profile",
    icon: <CgProfile />,
    path: "/profile",
  },
];

export default navLinks;
