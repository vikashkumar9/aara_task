import { useState } from "react";
import { useNavigate } from "react-router-dom";
import treatwell from "../../assets/treatwell.png";
import BASE_URL from "../../config";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await fetch(`${BASE_URL}/employee-login-email-or-mobile-with-password-api/`, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Invalid email or password");
      }
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token_key); 
        navigate("/"); 

      }

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <header className="bg-white shadow-2xl">
        <div className="flex items-center px-4 pd-3 md:px-16">
          <img src={treatwell} alt="Logo" height={73} width={80} />
        </div>
      </header>

      <div className="flex justify-center min-h-screen bg-white pt-4">
        <div className="w-full max-w-sm p-6 rounded-lg">
          <h2 className="text-3xl text-center text-[#30879f] mb-2">LOGIN</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b text-xl p-2 border-black outline-none focus:border-teal-500 text-gray-700"
                placeholder="Enter Email"
                required
              />
            </div>
            <div className="mb-8">
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b text-xl p-2 border-black outline-none focus:border-teal-500 text-gray-700"
                placeholder="Enter Password"
                required
              />
            </div>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <button
              type="submit"
              className="w-[60%] py-4 text-white bg-[#456AA2] rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 mx-auto block"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
