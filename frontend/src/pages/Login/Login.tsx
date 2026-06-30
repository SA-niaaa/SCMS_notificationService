// // // // function Login() {
// // // //   return <h1>Login Page</h1>;
// // // // }

// // // // export default Login;

// // // import { useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { login } from "../../services/authService";
// // // import { useEffect } from "react";
// // // import { isAuthenticated } from "../../services/authService";

// // // function Login() {
// // //   const navigate = useNavigate();

// // //   const [email, setEmail] =
// // //     useState("");

// // //   const [password, setPassword] =
// // //     useState("");

// // //   const [error, setError] =
// // //     useState("");

// // //   const handleLogin = () => {
// // //     const success = login(
// // //       email,
// // //       password
// // //     );

// // //     if (success) {
// // //       navigate("/dashboard");
// // //     } else {
// // //       setError(
// // //         "Invalid email or password"
// // //       );
// // //     }
// // //   };

// // //   useEffect(() => {
// // //   if (isAuthenticated()) {
// // //     navigate("/dashboard");
// // //   }
// // // }, []);

// // //   return (
// // //     <div className="min-h-screen flex justify-center items-center bg-gray-950 text-white">

// // //       <div className="bg-gray-900 p-8 rounded-xl w-[400px]">

// // //         <h1 className="text-3xl font-bold text-center mb-6">
// // //           SCMS Login
// // //         </h1>

// // //         <input
// // //           type="email"
// // //           placeholder="Email"
// // //           value={email}
// // //           onChange={(e) =>
// // //             setEmail(e.target.value)
// // //           }
// // //           className="w-full p-3 rounded bg-black mb-4"
// // //         />

// // //         <input
// // //           type="password"
// // //           placeholder="Password"
// // //           value={password}
// // //           onChange={(e) =>
// // //             setPassword(
// // //               e.target.value
// // //             )
// // //           }
// // //           className="w-full p-3 rounded bg-black mb-4"
// // //         />

// // //         {error && (
// // //           <p className="text-red-500 mb-3">
// // //             {error}
// // //           </p>
// // //         )}

// // //         <button
// // //           onClick={handleLogin}
// // //           className="w-full bg-green-600 py-3 rounded"
// // //         >
// // //           Login
// // //         </button>

// // //       </div>

// // //     </div>
// // //   );
// // // }

// // // export default Login;
// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // function Login() {
// //   const navigate = useNavigate();

// //   const [email, setEmail] =
// //     useState("");

// //   const [password, setPassword] =
// //     useState("");

// //     const generateCaptcha = () => {
// //   return Math.random()
// //     .toString(36)
// //     .substring(2, 7)
// //     .toUpperCase();
// // };

// // const [captcha, setCaptcha] =
// //   useState(generateCaptcha());

// // const [captchaInput, setCaptchaInput] =
// //   useState("");

// //   // const handleLogin = () => {
// //   //   if (
// //   //     email === "admin@scms.com" &&
// //   //     password === "admin123"
// //   //   ) {
// //   //     localStorage.setItem(
// //   //       "isLoggedIn",
// //   //       "true"
// //   //     );

// //   //     navigate("/dashboard");
// //   //   } else {
// //   //     alert(
// //   //       "Invalid Credentials"
// //   //     );
// //   //   }
// //   // };
// //   const handleLogin = () => {

// //   if (
// //     captchaInput !== captcha
// //   ) {
// //     alert(
// //       "Invalid Captcha"
// //     );

// //     setCaptcha(
// //       generateCaptcha()
// //     );

// //     return;
// //   }

// //   if (
// //     email === "admin@scms.com" &&
// //     password === "admin123"
// //   ) {

// //     localStorage.setItem(
// //       "isLoggedIn",
// //       "true"
// //     );

// //     navigate("/dashboard");

// //   } else {

// //     alert(
// //       "Invalid Credentials"
// //     );

// //     setCaptcha(
// //       generateCaptcha()
// //     );
// //   }
// // };

// // <div className="mb-5">

// //   <div className="flex gap-3">

// //     <div
// //       className="
// //       flex-1
// //       bg-black
// //       border
// //       border-gray-700
// //       rounded-lg
// //       p-3
// //       text-center
// //       text-2xl
// //       font-bold
// //       tracking-widest
// //       text-cyan-400
// //       select-none
// //       "
// //     >
// //       {captcha}
// //     </div>

// //     <button
// //       type="button"
// //       onClick={() =>
// //         setCaptcha(
// //           generateCaptcha()
// //         )
// //       }
// //       className="
// //       bg-gray-800
// //       px-4
// //       rounded-lg
// //       border
// //       border-gray-700
// //       hover:bg-gray-700
// //       "
// //     >
// //       🔄
// //     </button>

// //   </div>

// //   <input
// //     type="text"
// //     placeholder="Enter Captcha"
// //     value={captchaInput}
// //     onChange={(e) =>
// //       setCaptchaInput(
// //         e.target.value
// //       )
// //     }
// //     className="
// //     w-full
// //     mt-3
// //     p-4
// //     rounded-lg
// //     bg-black
// //     border
// //     border-gray-700
// //     text-white
// //     "
// //   />

// // </div>

// //   return (
// //     <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4">

// //       <div className="w-full max-w-4xl bg-[#0f172a] rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

// //         {/* LEFT SIDE */}

// //         <div className="p-10 flex flex-col justify-center">

// //           <div className="mb-8">

// //             <h1 className="text-4xl font-bold text-white mb-2">
// //               SCMS Login
// //             </h1>

// //             <p className="text-gray-400">
// //               Supply Chain Management
// //               System
// //             </p>

// //           </div>

// //           <input
// //             type="email"
// //             placeholder="Email"
// //             value={email}
// //             onChange={(e) =>
// //               setEmail(
// //                 e.target.value
// //               )
// //             }
// //             className="w-full mb-4 p-4 rounded-lg bg-black border border-gray-700 text-white"
// //           />

// //           <input
// //             type="password"
// //             placeholder="Password"
// //             value={password}
// //             onChange={(e) =>
// //               setPassword(
// //                 e.target.value
// //               )
// //             }
// //             className="w-full mb-6 p-4 rounded-lg bg-black border border-gray-700 text-white"
// //           />

// //           <button
// //             onClick={handleLogin}
// //             className="w-full bg-green-600 hover:bg-green-700 p-4 rounded-lg font-semibold"
// //           >
// //             Sign In
// //           </button>

// //         </div>

// //         {/* RIGHT SIDE */}

// //         <div className="bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col justify-center items-center p-10 border-l border-gray-800">

// //           <div className="text-8xl mb-6">
// //             ⚙️
// //           </div>

// //           <h2 className="text-3xl font-bold text-white mb-3">
// //             SCMS
// //           </h2>

// //           <p className="text-center text-gray-400 leading-relaxed">
// //             Manage Suppliers,
// //             Materials,
// //             Stores,
// //             Manufacturers and
// //             Employees from
// //             a single dashboard.
// //           </p>

// //         </div>

// //       </div>

// //     </div>
// //   );
// // }

// // export default Login;

// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // function Login() {
// //   const navigate = useNavigate();

// //   const [email, setEmail] =
// //     useState("");

// //   const [password, setPassword] =
// //     useState("");

// //   const generateCaptcha = () => {
// //     return Math.random()
// //       .toString(36)
// //       .substring(2, 7)
// //       .toUpperCase();
// //   };

// //   const [captcha, setCaptcha] =
// //     useState(generateCaptcha());

// //   const [captchaInput, setCaptchaInput] =
// //     useState("");

// //   const handleLogin = () => {

// //     if (
// //       captchaInput !== captcha
// //     ) {
// //       alert("Invalid Captcha");

// //       setCaptcha(
// //         generateCaptcha()
// //       );

// //       setCaptchaInput("");

// //       return;
// //     }

// //     // if (
// //     //   email === "admin@scms.com" &&
// //     //   password === "admin123"
// //     // ) {

// //     //   localStorage.setItem(
// //     //     "isLoggedIn",
// //     //     "true"
// //     //   );

// //     //   setCaptchaInput("");

// //     //   navigate("/dashboard");

// //     // } else {

// //     //   alert(
// //     //     "Invalid Credentials"
// //     //   );

// //     //   setCaptcha(
// //     //     generateCaptcha()
// //     //   );

// //     //   setCaptchaInput("");
// //     // }
// //     if (
// //   email === "admin@scms.com" &&
// //   password === "admin123"
// // ) {

// //   console.log("LOGIN SUCCESS");

// //   localStorage.setItem(
// //   "isAuthenticated",
// //   "true"
// // );

// //   console.log(
// //     localStorage.getItem("isLoggedIn")
// //   );

// //   navigate("/dashboard");
// // }
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4">

// //       <div className="w-full max-w-4xl bg-[#0f172a] rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

// //         {/* LEFT SIDE */}

// //         <div className="p-10 flex flex-col justify-center">

// //           <div className="mb-8">

// //             <h1 className="text-4xl font-bold text-white mb-2">
// //               SCMS Login
// //             </h1>

// //             <p className="text-gray-400">
// //               Supply Chain Management System
// //             </p>

// //           </div>

// //           <input
// //             type="email"
// //             placeholder="Email"
// //             value={email}
// //             onChange={(e) =>
// //               setEmail(
// //                 e.target.value
// //               )
// //             }
// //             className="w-full mb-4 p-4 rounded-lg bg-black border border-gray-700 text-white"
// //           />

// //           <input
// //             type="password"
// //             placeholder="Password"
// //             value={password}
// //             onChange={(e) =>
// //               setPassword(
// //                 e.target.value
// //               )
// //             }
// //             className="w-full mb-4 p-4 rounded-lg bg-black border border-gray-700 text-white"
// //           />

// //           {/* CAPTCHA */}

// //           <div className="mb-5">

// //             <div className="flex gap-3">

// //               <div
// //                 className="
// //                 flex-1
// //                 bg-black
// //                 border
// //                 border-gray-700
// //                 rounded-lg
// //                 p-3
// //                 text-center
// //                 text-2xl
// //                 font-bold
// //                 tracking-widest
// //                 text-cyan-400
// //                 select-none
// //                 "
// //               >
// //                 {captcha}
// //               </div>

// //               <button
// //                 type="button"
// //                 onClick={() =>
// //                   setCaptcha(
// //                     generateCaptcha()
// //                   )
// //                 }
// //                 className="
// //                 bg-gray-800
// //                 px-4
// //                 rounded-lg
// //                 border
// //                 border-gray-700
// //                 hover:bg-gray-700
// //                 "
// //               >
// //                 🔄
// //               </button>

// //             </div>

// //             <input
// //               type="text"
// //               placeholder="Enter Captcha"
// //               value={captchaInput}
// //               onChange={(e) =>
// //                 setCaptchaInput(
// //                   e.target.value
// //                 )
// //               }
// //               className="
// //               w-full
// //               mt-3
// //               p-4
// //               rounded-lg
// //               bg-black
// //               border
// //               border-gray-700
// //               text-white
// //               "
// //             />

// //           </div>

// //           <button
// //             onClick={handleLogin}
// //             className="w-full bg-green-600 hover:bg-green-700 p-4 rounded-lg font-semibold"
// //           >
// //             Sign In
// //           </button>

// //         </div>

// //         {/* RIGHT SIDE */}

// //         <div className="bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col justify-center items-center p-10 border-l border-gray-800">

// //           <div className="text-8xl mb-6">
// //             ⚙️
// //           </div>

// //           <h2 className="text-3xl font-bold text-white mb-3">
// //             SCMS
// //           </h2>

// //           <p className="text-center text-gray-400 leading-relaxed">
// //             Manage Suppliers,
// //             Materials,
// //             Stores,
// //             Manufacturers and
// //             Employees from a
// //             single dashboard.
// //           </p>

// //         </div>

// //       </div>

// //     </div>
// //   );
// // }

// // export default Login;
// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { login } from "../../services/authService";

// // function Login() {

// //   const navigate = useNavigate();

// //   const [email, setEmail] =
// //     useState("");

// //   const [password, setPassword] =
// //     useState("");

// //   const generateCaptcha = () => {

// //     return Math.random()
// //       .toString(36)
// //       .substring(2, 7)
// //       .toUpperCase();

// //   };

// //   const [captcha, setCaptcha] =
// //     useState(generateCaptcha());

// //   const [captchaInput, setCaptchaInput] =
// //     useState("");

// //   const handleLogin = () => {

// //     if (
// //       captchaInput !== captcha
// //     ) {

// //       alert(
// //         "Invalid Captcha"
// //       );

// //       setCaptcha(
// //         generateCaptcha()
// //       );

// //       setCaptchaInput("");

// //       return;

// //     }

// //     const success =
// //       login(
// //         email,
// //         password
// //       );

// //     if (success) {

// //       console.log(
// //         "LOGIN SUCCESS"
// //       );

// //       navigate(
// //         "/dashboard"
// //       );

// //     } else {

// //       alert(
// //         "Invalid Credentials"
// //       );

// //       setCaptcha(
// //         generateCaptcha()
// //       );

// //       setCaptchaInput("");

// //     }

// //   };

// //   return (

// //     <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4">

// //       <div className="w-full max-w-4xl bg-[#0f172a] rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

// //         {/* LEFT SIDE */}

// //         <div className="p-10 flex flex-col justify-center">

// //           <div className="mb-8">

// //             <h1 className="text-4xl font-bold text-white mb-2">

// //               SCMS Login

// //             </h1>

// //             <p className="text-gray-400">

// //               Supply Chain Management System

// //             </p>

// //           </div>

// //           <input
// //             type="email"
// //             placeholder="Email"
// //             value={email}
// //             onChange={(e) =>
// //               setEmail(
// //                 e.target.value
// //               )
// //             }
// //             className="w-full mb-4 p-4 rounded-lg bg-black border border-gray-700 text-white"
// //           />

// //           <input
// //             type="password"
// //             placeholder="Password"
// //             value={password}
// //             onChange={(e) =>
// //               setPassword(
// //                 e.target.value
// //               )
// //             }
// //             className="w-full mb-4 p-4 rounded-lg bg-black border border-gray-700 text-white"
// //           />

// //           {/* CAPTCHA */}

// //           <div className="mb-5">

// //             <div className="flex gap-3">

// //               <div
// //                 className="
// //                 flex-1
// //                 bg-black
// //                 border
// //                 border-gray-700
// //                 rounded-lg
// //                 p-3
// //                 text-center
// //                 text-2xl
// //                 font-bold
// //                 tracking-widest
// //                 text-cyan-400
// //                 select-none
// //                 "
// //               >
// //                 {captcha}
// //               </div>

// //               <button
// //                 type="button"
// //                 onClick={() =>
// //                   setCaptcha(
// //                     generateCaptcha()
// //                   )
// //                 }
// //                 className="
// //                 bg-gray-800
// //                 px-4
// //                 rounded-lg
// //                 border
// //                 border-gray-700
// //                 hover:bg-gray-700
// //                 "
// //               >
// //                 🔄
// //               </button>

// //             </div>

// //             <input
// //               type="text"
// //               placeholder="Enter Captcha"
// //               value={captchaInput}
// //               onChange={(e) =>
// //                 setCaptchaInput(
// //                   e.target.value
// //                 )
// //               }
// //               className="
// //               w-full
// //               mt-3
// //               p-4
// //               rounded-lg
// //               bg-black
// //               border
// //               border-gray-700
// //               text-white
// //               "
// //             />

// //           </div>

// //           <button
// //             onClick={handleLogin}
// //             className="w-full bg-green-600 hover:bg-green-700 p-4 rounded-lg font-semibold"
// //           >
// //             Sign In
// //           </button>

// //         </div>

// //         {/* RIGHT SIDE */}

// //         <div className="bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col justify-center items-center p-10 border-l border-gray-800">

// //           <div className="text-8xl mb-6">
// //             ⚙️
// //           </div>

// //           <h2 className="text-3xl font-bold text-white mb-3">
// //             SCMS
// //           </h2>

// //           <p className="text-center text-gray-400 leading-relaxed">

// //             Manage Suppliers,
// //             Materials,
// //             Stores,
// //             Manufacturers and
// //             Employees from a
// //             single dashboard.

// //           </p>

// //         </div>

// //       </div>

// //     </div>

// //   );

// // }

// // export default Login;
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
// // // function Login() {
// // //   return <h1>Login Page</h1>;
// // // }

// // // export default Login;

// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { login } from "../../services/authService";
// // import { useEffect } from "react";
// // import { isAuthenticated } from "../../services/authService";

// // function Login() {
// //   const navigate = useNavigate();

// //   const [email, setEmail] =
// //     useState("");

// //   const [password, setPassword] =
// //     useState("");

// //   const [error, setError] =
// //     useState("");

// //   const handleLogin = () => {
// //     const success = login(
// //       email,
// //       password
// //     );

// //     if (success) {
// //       navigate("/dashboard");
// //     } else {
// //       setError(
// //         "Invalid email or password"
// //       );
// //     }
// //   };

// //   useEffect(() => {
// //   if (isAuthenticated()) {
// //     navigate("/dashboard");
// //   }
// // }, []);

// //   return (
// //     <div className="min-h-screen flex justify-center items-center bg-gray-950 text-white">

// //       <div className="bg-gray-900 p-8 rounded-xl w-[400px]">

// //         <h1 className="text-3xl font-bold text-center mb-6">
// //           SCMS Login
// //         </h1>

// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) =>
// //             setEmail(e.target.value)
// //           }
// //           className="w-full p-3 rounded bg-black mb-4"
// //         />

// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) =>
// //             setPassword(
// //               e.target.value
// //             )
// //           }
// //           className="w-full p-3 rounded bg-black mb-4"
// //         />

// //         {error && (
// //           <p className="text-red-500 mb-3">
// //             {error}
// //           </p>
// //         )}

// //         <button
// //           onClick={handleLogin}
// //           className="w-full bg-green-600 py-3 rounded"
// //         >
// //           Login
// //         </button>

// //       </div>

// //     </div>
// //   );
// // }

// // export default Login;
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();

//   const [email, setEmail] =
//     useState("");

//   const [password, setPassword] =
//     useState("");

//     const generateCaptcha = () => {
//   return Math.random()
//     .toString(36)
//     .substring(2, 7)
//     .toUpperCase();
// };

// const [captcha, setCaptcha] =
//   useState(generateCaptcha());

// const [captchaInput, setCaptchaInput] =
//   useState("");

//   // const handleLogin = () => {
//   //   if (
//   //     email === "admin@scms.com" &&
//   //     password === "admin123"
//   //   ) {
//   //     localStorage.setItem(
//   //       "isLoggedIn",
//   //       "true"
//   //     );

//   //     navigate("/dashboard");
//   //   } else {
//   //     alert(
//   //       "Invalid Credentials"
//   //     );
//   //   }
//   // };
//   const handleLogin = () => {

//   if (
//     captchaInput !== captcha
//   ) {
//     alert(
//       "Invalid Captcha"
//     );

//     setCaptcha(
//       generateCaptcha()
//     );

//     return;
//   }

//   if (
//     email === "admin@scms.com" &&
//     password === "admin123"
//   ) {

//     localStorage.setItem(
//       "isLoggedIn",
//       "true"
//     );

//     navigate("/dashboard");

//   } else {

//     alert(
//       "Invalid Credentials"
//     );

//     setCaptcha(
//       generateCaptcha()
//     );
//   }
// };

// <div className="mb-5">

//   <div className="flex gap-3">

//     <div
//       className="
//       flex-1
//       bg-black
//       border
//       border-gray-700
//       rounded-lg
//       p-3
//       text-center
//       text-2xl
//       font-bold
//       tracking-widest
//       text-cyan-400
//       select-none
//       "
//     >
//       {captcha}
//     </div>

//     <button
//       type="button"
//       onClick={() =>
//         setCaptcha(
//           generateCaptcha()
//         )
//       }
//       className="
//       bg-gray-800
//       px-4
//       rounded-lg
//       border
//       border-gray-700
//       hover:bg-gray-700
//       "
//     >
//       🔄
//     </button>

//   </div>

//   <input
//     type="text"
//     placeholder="Enter Captcha"
//     value={captchaInput}
//     onChange={(e) =>
//       setCaptchaInput(
//         e.target.value
//       )
//     }
//     className="
//     w-full
//     mt-3
//     p-4
//     rounded-lg
//     bg-black
//     border
//     border-gray-700
//     text-white
//     "
//   />

// </div>

//   return (
//     <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4">

//       <div className="w-full max-w-4xl bg-[#0f172a] rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

//         {/* LEFT SIDE */}

//         <div className="p-10 flex flex-col justify-center">

//           <div className="mb-8">

//             <h1 className="text-4xl font-bold text-white mb-2">
//               SCMS Login
//             </h1>

//             <p className="text-gray-400">
//               Supply Chain Management
//               System
//             </p>

//           </div>

//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) =>
//               setEmail(
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
//             className="w-full mb-6 p-4 rounded-lg bg-black border border-gray-700 text-white"
//           />

//           <button
//             onClick={handleLogin}
//             className="w-full bg-green-600 hover:bg-green-700 p-4 rounded-lg font-semibold"
//           >
//             Sign In
//           </button>

//         </div>

//         {/* RIGHT SIDE */}

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
//             Employees from
//             a single dashboard.
//           </p>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default Login;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();

//   const [email, setEmail] =
//     useState("");

//   const [password, setPassword] =
//     useState("");

//   const generateCaptcha = () => {
//     return Math.random()
//       .toString(36)
//       .substring(2, 7)
//       .toUpperCase();
//   };

//   const [captcha, setCaptcha] =
//     useState(generateCaptcha());

//   const [captchaInput, setCaptchaInput] =
//     useState("");

//   const handleLogin = () => {

//     if (
//       captchaInput !== captcha
//     ) {
//       alert("Invalid Captcha");

//       setCaptcha(
//         generateCaptcha()
//       );

//       setCaptchaInput("");

//       return;
//     }

//     // if (
//     //   email === "admin@scms.com" &&
//     //   password === "admin123"
//     // ) {

//     //   localStorage.setItem(
//     //     "isLoggedIn",
//     //     "true"
//     //   );

//     //   setCaptchaInput("");

//     //   navigate("/dashboard");

//     // } else {

//     //   alert(
//     //     "Invalid Credentials"
//     //   );

//     //   setCaptcha(
//     //     generateCaptcha()
//     //   );

//     //   setCaptchaInput("");
//     // }
//     if (
//   email === "admin@scms.com" &&
//   password === "admin123"
// ) {

//   console.log("LOGIN SUCCESS");

//   localStorage.setItem(
//   "isAuthenticated",
//   "true"
// );

//   console.log(
//     localStorage.getItem("isLoggedIn")
//   );

//   navigate("/dashboard");
// }
//   };

//   return (
//     <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4">

//       <div className="w-full max-w-4xl bg-[#0f172a] rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

//         {/* LEFT SIDE */}

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
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) =>
//               setEmail(
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
//                 onClick={() =>
//                   setCaptcha(
//                     generateCaptcha()
//                   )
//                 }
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
//             className="w-full bg-green-600 hover:bg-green-700 p-4 rounded-lg font-semibold"
//           >
//             Sign In
//           </button>

//         </div>

//         {/* RIGHT SIDE */}

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
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { login } from "../../services/authService";

// function Login() {

//   const navigate = useNavigate();

//   const [email, setEmail] =
//     useState("");

//   const [password, setPassword] =
//     useState("");

//   const generateCaptcha = () => {

//     return Math.random()
//       .toString(36)
//       .substring(2, 7)
//       .toUpperCase();

//   };

//   const [captcha, setCaptcha] =
//     useState(generateCaptcha());

//   const [captchaInput, setCaptchaInput] =
//     useState("");

//   const handleLogin = () => {

//     if (
//       captchaInput !== captcha
//     ) {

//       alert(
//         "Invalid Captcha"
//       );

//       setCaptcha(
//         generateCaptcha()
//       );

//       setCaptchaInput("");

//       return;

//     }

//     const success =
//       login(
//         email,
//         password
//       );

//     if (success) {

//       console.log(
//         "LOGIN SUCCESS"
//       );

//       navigate(
//         "/dashboard"
//       );

//     } else {

//       alert(
//         "Invalid Credentials"
//       );

//       setCaptcha(
//         generateCaptcha()
//       );

//       setCaptchaInput("");

//     }

//   };

//   return (

//     <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4">

//       <div className="w-full max-w-4xl bg-[#0f172a] rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

//         {/* LEFT SIDE */}

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
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) =>
//               setEmail(
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
//                 onClick={() =>
//                   setCaptcha(
//                     generateCaptcha()
//                   )
//                 }
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
//             className="w-full bg-green-600 hover:bg-green-700 p-4 rounded-lg font-semibold"
//           >
//             Sign In
//           </button>

//         </div>

//         {/* RIGHT SIDE */}

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

function Login() {

  const navigate = useNavigate();

  const [userId, setUserId] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [captcha, setCaptcha] =
    useState("");

  const [captchaInput, setCaptchaInput] =
    useState("");

  const loadCaptcha =
    async () => {

      try {

        const response =
          await fetch(
            "http://localhost:8081/auth/captcha"
          );

        const data =
          await response.json();

        setCaptcha(
          data.captcha
        );

      } catch (error) {

        console.error(error);

      }

    };

  useEffect(() => {

    loadCaptcha();

  }, []);

  const handleLogin =
    async () => {

      if (
        captchaInput !== captcha
      ) {

        alert(
          "Invalid Captcha"
        );

        loadCaptcha();

        setCaptchaInput("");

        return;

      }

      const success =
        await login(
          userId,
          password
        );

      if (success) {

        navigate(
          "/dashboard"
        );

      } else {

        alert(
          "Invalid Credentials"
        );

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

            <h1 className="text-4xl font-bold text-white mb-2">

              SCMS Login

            </h1>

            <p className="text-gray-400">

              Supply Chain Management System

            </p>

          </div>

          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) =>
              setUserId(
                e.target.value
              )
            }
            className="w-full mb-4 p-4 rounded-lg bg-black border border-gray-700 text-white"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="w-full mb-4 p-4 rounded-lg bg-black border border-gray-700 text-white"
          />

          {/* CAPTCHA */}

          <div className="mb-5">

            <div className="flex gap-3">

              <div
                className="
                flex-1
                bg-black
                border
                border-gray-700
                rounded-lg
                p-3
                text-center
                text-2xl
                font-bold
                tracking-widest
                text-cyan-400
                select-none
                "
              >
                {captcha}
              </div>

              <button
                type="button"
                onClick={loadCaptcha}
                className="
                bg-gray-800
                px-4
                rounded-lg
                border
                border-gray-700
                hover:bg-gray-700
                "
              >
                🔄
              </button>

            </div>

            <input
              type="text"
              placeholder="Enter Captcha"
              value={captchaInput}
              onChange={(e) =>
                setCaptchaInput(
                  e.target.value
                )
              }
              className="
              w-full
              mt-3
              p-4
              rounded-lg
              bg-black
              border
              border-gray-700
              text-white
              "
            />

          </div>

          <button
            onClick={handleLogin}
            className="
            w-full
            bg-green-600
            hover:bg-green-700
            p-4
            rounded-lg
            font-semibold
            "
          >
            Sign In
          </button>

          <button
            onClick={() =>
              navigate("/register")
            }
            className="
            w-full
            mt-3
            bg-blue-600
            hover:bg-blue-700
            p-4
            rounded-lg
            font-semibold
            "
          >
            Create User
          </button>

        </div>

        {/* RIGHT */}

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col justify-center items-center p-10 border-l border-gray-800">

          <div className="text-8xl mb-6">
            ⚙️
          </div>

          <h2 className="text-3xl font-bold text-white mb-3">
            SCMS
          </h2>

          <p className="text-center text-gray-400 leading-relaxed">

            Manage Suppliers,
            Materials,
            Stores,
            Manufacturers and
            Employees from a
            single dashboard.

          </p>

        </div>

      </div>

    </div>

  );

}

export default Login;