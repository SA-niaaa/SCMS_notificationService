// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { login } from "../../services/authService";

// function Login() {

//   const navigate = useNavigate();

//   const [userId, setUserId] =
//     useState("");

//   const [password, setPassword] =
//     useState("");

//   const [captcha, setCaptcha] =
//     useState("");

//   const [captchaInput, setCaptchaInput] =
//     useState("");

//   const loadCaptcha =
//     async () => {

//       try {

//         const response =
//           await fetch(
//             "http://localhost:8081/auth/captcha"
//           );

//         const data =
//           await response.json();

//         setCaptcha(
//           data.captcha
//         );

//       } catch (error) {

//         console.error(error);

//       }

//     };

//   useEffect(() => {

//     loadCaptcha();

//   }, []);

//   const handleLogin =
//     async () => {

//       if (
//         captchaInput !== captcha
//       ) {

//         alert(
//           "Invalid Captcha"
//         );

//         loadCaptcha();

//         setCaptchaInput("");

//         return;

//       }

//       const success =
//         await login(
//           userId,
//           password
//         );

//       if (success) {

//         navigate(
//           "/dashboard"
//         );

//       } else {

//         alert(
//           "Invalid Credentials"
//         );

//         loadCaptcha();

//         setCaptchaInput("");

//       }

//     };

//   return (

//     <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4">

//       <div className="w-full max-w-4xl bg-[#0f172a] rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

//         {/* LEFT */}

//         <div className="p-10 flex flex-col justify-center">

//           <div className="mb-8">

//             <h1 className="text-4xl font-bold text-white mb-2">

//               SCMS Login

//             </h1>

//             <p className="text-gray-400">

//               Supply Chain Management System

//             </p>

//           </div>

//           <input
//             type="text"
//             placeholder="User ID"
//             value={userId}
//             onChange={(e) =>
//               setUserId(
//                 e.target.value
//               )
//             }
//             className="w-full mb-4 p-4 rounded-lg bg-black border border-gray-700 text-white"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) =>
//               setPassword(
//                 e.target.value
//               )
//             }
//             className="w-full mb-4 p-4 rounded-lg bg-black border border-gray-700 text-white"
//           />

//           {/* CAPTCHA */}

//           <div className="mb-5">

//             <div className="flex gap-3">

//               <div
//                 className="
//                 flex-1
//                 bg-black
//                 border
//                 border-gray-700
//                 rounded-lg
//                 p-3
//                 text-center
//                 text-2xl
//                 font-bold
//                 tracking-widest
//                 text-cyan-400
//                 select-none
//                 "
//               >
//                 {captcha}
//               </div>

//               <button
//                 type="button"
//                 onClick={loadCaptcha}
//                 className="
//                 bg-gray-800
//                 px-4
//                 rounded-lg
//                 border
//                 border-gray-700
//                 hover:bg-gray-700
//                 "
//               >
//                 🔄
//               </button>

//             </div>

//             <input
//               type="text"
//               placeholder="Enter Captcha"
//               value={captchaInput}
//               onChange={(e) =>
//                 setCaptchaInput(
//                   e.target.value
//                 )
//               }
//               className="
//               w-full
//               mt-3
//               p-4
//               rounded-lg
//               bg-black
//               border
//               border-gray-700
//               text-white
//               "
//             />

//           </div>

//           <button
//             onClick={handleLogin}
//             className="
//             w-full
//             bg-green-600
//             hover:bg-green-700
//             p-4
//             rounded-lg
//             font-semibold
//             "
//           >
//             Sign In
//           </button>

//           <button
//             onClick={() =>
//               navigate("/register")
//             }
//             className="
//             w-full
//             mt-3
//             bg-blue-600
//             hover:bg-blue-700
//             p-4
//             rounded-lg
//             font-semibold
//             "
//           >
//             Create User
//           </button>

//         </div>

//         {/* RIGHT */}

//         <div className="bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col justify-center items-center p-10 border-l border-gray-800">

//           <div className="text-8xl mb-6">
//             ⚙️
//           </div>

//           <h2 className="text-3xl font-bold text-white mb-3">
//             SCMS
//           </h2>

//           <p className="text-center text-gray-400 leading-relaxed">

//             Manage Suppliers,
//             Materials,
//             Stores,
//             Manufacturers and
//             Employees from a
//             single dashboard.

//           </p>

//         </div>

//       </div>

//     </div>

//   );

// }

// export default Login;

















import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import { connectOnlineUsers } from "../../services/onlineUserService";

function Login() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  const loadCaptcha = async () => {
    try {
      const response = await fetch("http://localhost:8081/auth/captcha");
      const data = await response.json();
      setCaptcha(data.captcha);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadCaptcha();
  }, []);

  const handleLogin = async () => {
    if (captchaInput !== captcha) {
      alert("Invalid Captcha");
      loadCaptcha();
      setCaptchaInput("");
      return;
    }

    const success = await login(userId, password);

    if (success) {
      // 1. Fetch user parameters safely from the updated session configuration
      const userRaw = localStorage.getItem("currentUser");
      if (userRaw) {
        const user = JSON.parse(userRaw);
        
        // 2. Establish connection instantly on sign-in without waiting for hard refreshes
        connectOnlineUsers(Number(user.id), user.name, (onlineUsers) => {
          localStorage.setItem("globalOnlineUsers", JSON.stringify(onlineUsers));
        });
      }

      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
      loadCaptcha();
      setCaptchaInput("");
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-[#0f172a] rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        {/* LEFT */}
        <div className="p-10 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">SCMS Login</h1>
            <p className="text-gray-400">Supply Chain Management System</p>
          </div>

          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full mb-4 p-4 rounded-lg bg-black border border-gray-700 text-white"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 p-4 rounded-lg bg-black border border-gray-700 text-white"
          />

          {/* CAPTCHA */}
          <div className="mb-5">
            <div className="flex gap-3">
              <div className="flex-1 bg-black border border-gray-700 rounded-lg p-3 text-center text-2xl font-bold tracking-widest text-cyan-400 select-none">
                {captcha}
              </div>
              <button
                type="button"
                onClick={loadCaptcha}
                className="bg-gray-800 px-4 rounded-lg border border-gray-700 hover:bg-gray-700"
              >
                🔄
              </button>
            </div>

            <input
              type="text"
              placeholder="Enter Captcha"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              className="w-full mt-3 p-4 rounded-lg bg-black border border-gray-700 text-white"
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-green-600 hover:bg-green-700 p-4 rounded-lg font-semibold"
          >
            Sign In
          </button>

          <button
            onClick={() => navigate("/register")}
            className="w-full mt-3 bg-blue-600 hover:bg-blue-700 p-4 rounded-lg font-semibold"
          >
            Create User
          </button>
        </div>

        {/* RIGHT */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col justify-center items-center p-10 border-l border-gray-800">
          <div className="text-8xl mb-6">⚙️</div>
          <h2 className="text-3xl font-bold text-white mb-3">SCMS</h2>
          <p className="text-center text-gray-400 leading-relaxed">
            Manage Suppliers, Materials, Stores, Manufacturers and Employees from a single dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;