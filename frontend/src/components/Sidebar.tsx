import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import {
  LayoutDashboard,
  Factory,
  Truck,
  Package,
  Users,
  Warehouse,
  ChevronDown,
  ChevronRight,
  Folder,
  Bell,
  FileText,
} from "lucide-react";

function Sidebar() {
  const location = useLocation();

  const [showAdmin, setShowAdmin] =
    useState(true);

  const [
    showStoreConfig,
    setShowStoreConfig,
  ] = useState(true);

  return (
    <div
      className="
      w-72
      min-h-screen
      bg-[#111827]
      border-r
      border-gray-700
      text-white
      flex
      flex-col
      "
    >
      {/* Logo */}

      <div
        className="
        p-6
        border-b
        border-gray-700
        "
      >
        <h1
          className="
          text-3xl
          font-bold
          text-green-500
          "
        >
          SCMS
        </h1>

        <p
          className="
          text-sm
          text-gray-400
          mt-1
          "
        >
          Supply Chain Management System
        </p>
      </div>

      {/* Navigation */}

      <div
        className="
        flex-1
        p-4
        overflow-y-auto
        "
      >
        <p
          className="
          text-xs
          uppercase
          text-gray-500
          mb-3
          px-3
          "
        >
          Main Navigation
        </p>

        <div className="flex flex-col gap-2">

          {/* Dashboard */}

          <Link
            to="/dashboard"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              location.pathname === "/dashboard"
                ? "bg-green-600 text-white"
                : "hover:bg-gray-800 text-gray-300"
            }`}
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          {/* Store Transactions */}

          <button
            className="
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-lg
            text-gray-300
            hover:bg-gray-800
            "
          >
            <Folder size={20} />
            Store Transactions
          </button>

          {/* Admin */}

          <button
            onClick={() =>
              setShowAdmin(!showAdmin)
            }
            className="
            flex
            items-center
            justify-between
            px-4
            py-3
            rounded-lg
            text-gray-300
            hover:bg-gray-800
            "
          >
            <div className="flex items-center gap-3">
              <Folder size={20} />
              Admin
            </div>

            {showAdmin ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </button>

          {/* Admin Submenu */}

          {showAdmin && (
            <div className="ml-4">

              <button
                onClick={() =>
                  setShowStoreConfig(
                    !showStoreConfig
                  )
                }
                className="
                flex
                items-center
                justify-between
                w-full
                px-4
                py-2
                rounded-lg
                text-gray-300
                hover:bg-gray-800
                "
              >
                <span>
                  Store Configuration
                </span>

                {showStoreConfig ? (
                  <ChevronDown size={14} />
                ) : (
                  <ChevronRight size={14} />
                )}
              </button>

              {showStoreConfig && (
                <div
                  className="
                  ml-4
                  mt-2
                  flex
                  flex-col
                  gap-1
                  "
                >
                  <Link
                    to="/store"
                    className={`flex items-center gap-2 px-3 py-2 rounded ${
                      location.pathname === "/store"
                        ? "bg-green-600"
                        : "hover:bg-gray-800"
                    }`}
                  >
                    <Warehouse size={16} />
                    Store
                  </Link>

                  <Link
                    to="/employee"
                    className={`flex items-center gap-2 px-3 py-2 rounded ${
                      location.pathname === "/employee"
                        ? "bg-green-600"
                        : "hover:bg-gray-800"
                    }`}
                  >
                    <Users size={16} />
                    Employee
                  </Link>

                  <Link
                    to="/material"
                    className={`flex items-center gap-2 px-3 py-2 rounded ${
                      location.pathname === "/material"
                        ? "bg-green-600"
                        : "hover:bg-gray-800"
                    }`}
                  >
                    <Package size={16} />
                    Material
                  </Link>

                  <Link
                    to="/supplier"
                    className={`flex items-center gap-2 px-3 py-2 rounded ${
                      location.pathname === "/supplier"
                        ? "bg-green-600"
                        : "hover:bg-gray-800"
                    }`}
                  >
                    <Truck size={16} />
                    Supplier
                  </Link>

                  <Link
                    to="/manufacturer"
                    className={`flex items-center gap-2 px-3 py-2 rounded ${
                      location.pathname === "/manufacturer"
                        ? "bg-green-600"
                        : "hover:bg-gray-800"
                    }`}
                  >
                    <Factory size={16} />
                    Manufacturer
                  </Link>
                </div>
              )}

              {/* Create Indent */}

              <Link
                to="/indent"
                className={`flex items-center gap-2 px-4 py-2 rounded mt-2 ${
                  location.pathname === "/indent"
                    ? "bg-green-600"
                    : "hover:bg-gray-800"
                }`}
              >
                <FileText size={16} />
                Create Indent
              </Link>

              {/* Notifications */}

              <Link
                to="/notifications"
                className={`flex items-center gap-2 px-4 py-2 rounded ${
                  location.pathname === "/notifications"
                    ? "bg-green-600"
                    : "hover:bg-gray-800"
                }`}
              >
                <Bell size={16} />
                Notifications
              </Link>

            </div>
          )}

          {/* MIS */}

          <button
            className="
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-lg
            text-gray-300
            hover:bg-gray-800
            "
          >
            <Folder size={20} />
            MIS
          </button>

        </div>
      </div>

      {/* Footer */}

      <div
        className="
        p-4
        border-t
        border-gray-700
        text-center
        "
      >
        <p
          className="
          text-xs
          text-gray-500
          "
        >
          SCMS v1.0
        </p>
      </div>
    </div>
  );
}

export default Sidebar;