import { useNavigate } from "react-router-dom";
import { logout } from "../services/authService";

import {
  Home,
  Lock,
  Bell,
} from "lucide-react";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const openNotifications = () => {
    navigate("/notifications");
  };

  return (
    <div
      className="
      h-16
      bg-[#1f2937]
      border-b
      border-gray-700
      px-6
      flex
      items-center
      justify-between
      shadow
      "
    >
      {/* Left Side */}

      <div>
        <h1
          className="
          text-xl
          font-bold
          text-white
          "
        >
          Supply Chain Management System
        </h1>

        <p
          className="
          text-xs
          text-gray-400
          "
        >
          Inventory & Resource Management
        </p>
      </div>

      {/* Right Side */}

      <div
        className="
        flex
        items-center
        gap-3
        "
      >
        <div
          className="
          text-right
          "
        >
          <p
            className="
            text-white
            font-medium
            "
          >
            Admin
          </p>

          <p
            className="
            text-xs
            text-gray-400
            "
          >
            System Administrator
          </p>
        </div>

        {/* Avatar */}

        <div
          className="
          w-10
          h-10
          rounded-full
          bg-green-600
          flex
          items-center
          justify-center
          font-bold
          text-white
          "
        >
          A
        </div>

        {/* Notification */}

        <button
          onClick={openNotifications}
          className="
          relative
          bg-yellow-500
          hover:bg-yellow-600
          p-2
          rounded
          "
        >
          <Bell size={18} />

          {/* Future Notification Count */}

          <span
            className="
            absolute
            -top-2
            -right-2
            bg-red-600
            text-white
            text-[10px]
            w-5
            h-5
            rounded-full
            flex
            items-center
            justify-center
            "
          >
            0
          </span>
        </button>

        {/* Home */}

        <button
          className="
          bg-blue-600
          hover:bg-blue-700
          p-2
          rounded
          "
        >
          <Home size={18} />
        </button>

        {/* Lock */}

        <button
          className="
          bg-gray-700
          hover:bg-gray-600
          p-2
          rounded
          "
        >
          <Lock size={18} />
        </button>

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="
          bg-red-600
          hover:bg-red-700
          px-4
          py-2
          rounded
          text-white
          "
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;