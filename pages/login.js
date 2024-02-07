import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // Check the username and password and perform login logic
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    // Redirect to the profile page
    router.push("/profile");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="flex flex-col max-w-sm mt-12 space-y-3 mx-auto">
      <h1 className="text-gray-600 text-2xl">Login</h1>
      <input
        className="border p-2"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <input
        className="border p-2"
        placeholder="Enter password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button
        onClick={handleLogin}
        className="border p-2 focus:bg-white focus:text-gray-400 focus:border bg-sky-600 text-white"
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
