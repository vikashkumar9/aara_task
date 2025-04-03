import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Addtask from "./pages/addtask/Addtask";
import TaskList from "./pages/taskList/TaskList";
import TaskSearch from "./pages/taskSearch/TaskSearch";
import TaskReport from "./pages/taskReport/TaskReport";
import ComplaintList from "./pages/complaintList/ComplaintList";
import Dashboard from "./pages/dashboard/Dashboard";
import Complaint from "./pages/complaint/Complaint";
import ComplainTaskList from "./pages/complaint/ComplainTaskList";
import ComplainTaskSearch from "./pages/complaint/ComplainTaskSearch";
import ComplaintDashboard from "./pages/complaint/ComplaintDashboard";
import ProtectedRoute, { PublicRoute } from "./routes/ProtectedRoute"; // Import the protected route

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<PublicRoute element={<Login />} />} />

{/* Protected Routes */}
        <Route path="/" element={<ProtectedRoute element={<Home />} />}/>
        <Route path="/addtask" element={<ProtectedRoute element={<Addtask />} />} />
        <Route path="/taskList" element={<ProtectedRoute element={<TaskList />} />} />
        <Route path="/taskSearch" element={<ProtectedRoute element={<TaskSearch />} />} />
        <Route path="/taskReport" element={<ProtectedRoute element={<TaskReport />} />} />
        <Route path="/complaintList" element={<ProtectedRoute element={<ComplaintList />} />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />

        {/* Complaint Section (Protected) */}
        <Route path="/complaint" element={<ProtectedRoute element={<Complaint />} />} />
        <Route path="/complaint/taskList" element={<ProtectedRoute element={<ComplainTaskList />} />} />
        <Route path="/complaint/taskSearch" element={<ProtectedRoute element={<ComplainTaskSearch />} />} />
        <Route path="/complaint/dashboard" element={<ProtectedRoute element={<ComplaintDashboard />} />} />
      </Routes>
    </Router>
  );
}

export default App;
