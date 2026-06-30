import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate =
    useNavigate();

  const [username, setUsername] =
    useState("");

  const [userId, setUserId] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [role, setRole] =
    useState("Store User");

  const handleRegister =
    async () => {

      try {

        const response =
          await fetch(
            "http://localhost:8081/auth/register",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({

                username,

                userId,

                password,

                role,

              }),

            }
          );

        if (
          response.ok
        ) {

          alert(
            "User Created Successfully"
          );

          navigate("/");

        } else {

          const message =
            await response.text();

          alert(message);

        }

      } catch (error) {

        console.error(error);

        alert(
          "Registration Failed"
        );

      }

    };

  return (

    <div className="min-h-screen bg-[#020617] flex items-center justify-center">

      <div className="w-full max-w-xl bg-[#0f172a] p-8 rounded-2xl">

        <h1 className="text-3xl font-bold text-white mb-6">

          Create User

        </h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(
              e.target.value
            )
          }
          className="w-full mb-4 p-4 rounded bg-black border border-gray-700 text-white"
        />

        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) =>
            setUserId(
              e.target.value
            )
          }
          className="w-full mb-4 p-4 rounded bg-black border border-gray-700 text-white"
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
          className="w-full mb-4 p-4 rounded bg-black border border-gray-700 text-white"
        />

        <select
          value={role}
          onChange={(e) =>
            setRole(
              e.target.value
            )
          }
          className="w-full mb-4 p-4 rounded bg-black border border-gray-700 text-white"
        >
          <option>
            Store User
          </option>

          <option>
            Store Manager
          </option>

          <option>
            System Administrator
          </option>

        </select>

        <button
          onClick={
            handleRegister
          }
          className="w-full bg-green-600 p-4 rounded"
        >
          Create User
        </button>

      </div>

    </div>

  );

}

export default Register;