import treatwell from "../../assets/treatwell.png";
import home from "../../assets/home.png"
import complaintlist from "../../assets/complaintList.png";
import dashboard from "../../assets/dashboard.png";
// import report from "../../assets/report.png";
import search from "../../assets/search.png";
import { Link } from "react-router-dom";
export default function ComplaintHeader() {
  return (
    <header className="bg-white shadow">
      <div className="flex flex-wrap items-center justify-between px-4  pd-3 md:px-16">
        <div className="flex items-center space-x-2 pb-2">
          <img src={treatwell} alt="Logo" height={73} width={80} />
        </div>
        <nav className="hidden space-x-6 md:flex">
          {[
            { src: home, label: "Home", link:"/complaint"},
            { src: complaintlist, label: "Complaints", link:"/complaint/taskList" },
            { src: search, label: "Search", link:"/complaint/taskSearch" },
            { src: dashboard, label: "Dashboard", link:"/complaint/dashboard" },
          ].map((item, index) => (
            <Link to={item.link} key={index} className="flex flex-col items-center">
              <img src={item.src} height={40} width={40} alt={item.label} />
              <p className="mt-1 text-sm text-[#30879f]">{item.label}</p>
            </Link>
          ))}
        </nav>
        <div className="pr-4">
  <img src="https://complaint.treatwellapp.com/img/login_user.png" alt='user' height={40} width={40}/>
</div>
      </div>
      <nav className="flex flex-wrap justify-center space-x-4 mt-3 md:hidden">
        {[
         { src: home, label: "Home", link:"/complaint"},
         { src: complaintlist, label: "Complaints", link:"/complaint/taskList" },
         { src: search, label: "Search", link:"/complaint/taskSearch" },
         { src: dashboard, label: "Dashboard", link:"/complaint/dashboard" },
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

