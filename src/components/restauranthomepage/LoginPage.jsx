import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div>
      

      <div className="login-container flex justify-center items-center h-screen bg-gray-100">
        <div className="login-box bg-white p-8 rounded shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-6">Login to Your Account</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="login-submit bg-indigo-600 text-white py-2 px-4 rounded w-full hover:bg-indigo-700"
            >
              Login
            </button>

            <div className="login-options mt-4 text-center">
              <Link to="/forgot-password" className="text-indigo-600 hover:underline">Forgot Password?</Link>
              <span> | </span>
              <Link to="/create-account" className="text-indigo-600 hover:underline">Create an Account</Link>
            </div>
          </form>
        </div>
      </div>

      <footer className="text-center mt-6 p-4 text-gray-500">
        <p>&copy; 2024 Restaurant, All Rights Reserved.</p>
      </footer>
    </div>
  );
}
