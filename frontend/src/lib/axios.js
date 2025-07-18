import { axiosInstance } from "../utils/axios"; // adjust the import path if needed

const handleLogin = async () => {
  try {
    const res = await axiosInstance.post("/auth/login", {
      email,
      password,
    });
    console.log("Login success:", res.data);
    // Redirect or store token/user etc.
  } catch (err) {
    console.error("Login error:", err.response?.data || err.message);
  }
};
