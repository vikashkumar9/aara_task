import treatwell from "../../assets/treatwell.png";
import home from "../../assets/home.png"
import addTask from "../../assets/addTask.png";
import complaintlist from "../../assets/complaintList.png";
import dashboard from "../../assets/dashboard.png";
import complaint from "../../assets/complaint.png";
import report from "../../assets/report.png";
import search from "../../assets/search.png";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="flex flex-wrap items-center justify-between px-4  pd-3 md:px-16">
        <div className="flex items-center space-x-2 pb-2">
          <img src={treatwell} alt="Logo" height={73} width={80} />
        </div>
        <nav className="hidden space-x-6 md:flex">
          {[
            { src: home, label: "Home", link:"/"},
            { src: addTask, label: "Add Task", link:"/addtask" },
            { src: complaintlist, label: "List", link:"/taskList" },
            { src: search, label: "Search", link:"/taskSearch" },
            { src: report, label: "Reports", link:"/taskReport" },
            { src: complaint, label: "Complains", link:"/complaintList" },
            { src: dashboard, label: "Dashboard", link:"/dashboard" },
          ].map((item, index) => (
            <Link to={item.link} key={index} className="flex flex-col items-center">
              <img src={item.src} height={40} width={40} alt={item.label} />
              <p className="mt-1 text-sm text-[#30879f]">{item.label}</p>
            </Link>
          ))}
        </nav>
        <div className="flex flex-col  space-x-4">
  <div className="flex flex-col ">
    <p className="text-sm text-[#30879f]">miracles healthcare</p>
    <p className="text-sm  text-[#30879f]">Rahul Jha</p>
  </div>
  <button className=" py-1 text-sm font-semibold text-[#30879f] border border-[#30879f] rounded-md hover:bg-teal-50">
    Logout
  </button>
</div>
      </div>
      <nav className="flex flex-wrap justify-center space-x-4 mt-3 md:hidden">
        {[
          { src: home, label: "Home",link:"/" },
          { src: addTask, label: "Add Task",link:"/addtask" },
          { src: complaintlist, label: "List" , link:"/taskList"},
          { src: search, label: "Search",link:"/taskSearch" },
          { src: report, label: "Reports" , link:"/taskReport" },
          { src: complaint, label: "Complains" , link:"/complaintList"},
          { src: dashboard, label: "Dashboard" },
        ].map((item, index) => (
          <Link to={item.link}  key={index} className="flex flex-col items-center">
            <img src={item.src} height={30} width={30} alt={item.label} />
            <p className="mt-1 text-xs text-[#30879f]">{item.label}</p>
          </Link>
        ))}
      </nav>
    </header>
  );
}
