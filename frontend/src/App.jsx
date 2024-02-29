import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import UserDashboard from "./pages/user/UserDashboard";
import Page404notfound from "./pages/404notFound/Page404notfound";
import Dashboard from "./pages/admin/Dashboard";
import ProtectedAdminRoute from "./components/Routes/ProtectedAdminRoute";
import KitchenWaste from "./pages/KitchenWaste/KitchenWaste";
import ButterflyLifeCycle from "./pages/ButterflyLifeCycle";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Page404notfound />} />
        <Route path="/kitchen-waste" element={<KitchenWaste />} />
        <Route path="/test" element={<ButterflyLifeCycle />} />

        <Route path="/user-dashboard" element={<ProtectedRoute />}>
          <Route path="user" element={<UserDashboard />} />
        </Route>

        <Route path="/admin-dashboard" element={<ProtectedAdminRoute />}>
          <Route path="admin" element={<Dashboard />} />
        </Route>

      </Routes>
    </>
  );
};

export default App;
