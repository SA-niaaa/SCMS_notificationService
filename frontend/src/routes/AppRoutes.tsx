// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Supplier from "../pages/supplier/Supplier";
// import Material from "../pages/material/Material";

// import Login from "../pages/Login/Login";
// import Dashboard from "../pages/dashboard/Dashboard";
// import Manufacturer from "../pages/manufacturer/Manufacturer";
// import Employee from "../pages/employee/Employee";
// // import Employee from "../pages/employee/Employee";
// import Store from "../pages/store/Store";


// function AppRoutes() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/supplier" element={<Supplier />} />
//         <Route path="/material" element={<Material />} />
//         <Route path="/" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route
//   path="/store"
//   element={<Store />}
// />
//         <Route path="/manufacturer" element={<Manufacturer />} />

//         <Route
//   path="/employee"
//   element={<Employee />}
// />

// <Route
//   path="/employee"
//   element={<Employee />}
// />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default AppRoutes;
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Login from "../pages/Login/Login";
// import Dashboard from "../pages/dashboard/Dashboard";
// import Supplier from "../pages/supplier/Supplier";
// import Material from "../pages/material/Material";
// import Manufacturer from "../pages/manufacturer/Manufacturer";
// import Employee from "../pages/employee/Employee";
// import Store from "../pages/store/Store";

// function AppRoutes() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         <Route path="/" element={<Login />} />

//         <Route
//           path="/dashboard"
//           element={<Dashboard />}
//         />

//         <Route
//           path="/supplier"
//           element={<Supplier />}
//         />

//         <Route
//           path="/material"
//           element={<Material />}
//         />

//         <Route
//           path="/manufacturer"
//           element={<Manufacturer />}
//         />

//         <Route
//           path="/employee"
//           element={<Employee />}
//         />

//         <Route
//           path="/store"
//           element={<Store />}
//         />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default AppRoutes;
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

// import Login from "../pages/Login/Login";
// import Dashboard from "../pages/dashboard/Dashboard";
// // import Supplier from "../pages/supplier/Supplier";
// import SupplierPage from "../pages/supplier/Supplier";
// import Material from "../pages/material/Material";
// import Manufacturer from "../pages/manufacturer/Manufacturer";
// import Employee from "../pages/employee/Employee";
// import Store from "../pages/store/Store";

// import ProtectedRoute from "./ProtectedRoute";

// function AppRoutes() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         <Route
//           path="/"
//           element={<Login />}
//         />

//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />

//         {/* <Route
//           path="/supplier"
//           element={
//             <ProtectedRoute>
//               <Supplier />
//             </ProtectedRoute>
//           }
//         /> */}
//         <Route
//   path="/supplier"
//   element={<SupplierPage />}
// />

//         <Route
//           path="/material"
//           element={
//             <ProtectedRoute>
//               <Material />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/manufacturer"
//           element={
//             <ProtectedRoute>
//               <Manufacturer />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/employee"
//           element={
//             <ProtectedRoute>
//               <Employee />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/store"
//           element={
//             <ProtectedRoute>
//               <Store />
//             </ProtectedRoute>
//           }
//         />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default AppRoutes;
import Indent from "../pages/indent/Indent";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "../pages/Login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import SupplierPage from "../pages/supplier/Supplier";
import Material from "../pages/material/Material";
import Manufacturer from "../pages/manufacturer/Manufacturer";
import Employee from "../pages/employee/Employee";
import Store from "../pages/store/Store";
import Notification from "../pages/notification/Notification";

import ProtectedRoute from "./ProtectedRoute";
import Register
from "../pages/register/Register";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/supplier"
          element={
            <ProtectedRoute>
              <SupplierPage />
            </ProtectedRoute>
          }
        />
        <Route
  path="/register"
  element={<Register />}
/>

        <Route
          path="/material"
          element={
            <ProtectedRoute>
              <Material />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manufacturer"
          element={
            <ProtectedRoute>
              <Manufacturer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employee"
          element={
            <ProtectedRoute>
              <Employee />
            </ProtectedRoute>
          }
        />

        <Route
          path="/store"
          element={
            <ProtectedRoute>
              <Store />
            </ProtectedRoute>
          }
        />
        <Route
  path="/indent"
  element={
    <ProtectedRoute>
      <Indent />
    </ProtectedRoute>
  }
/>

        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <Notification />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;