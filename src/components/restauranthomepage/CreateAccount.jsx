import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function CreateAccount() {
  const navigate = useNavigate();   
  return (
    <div>
 

      <div className="signup-container flex justify-center items-center h-screen bg-gray-100">
        <div className="signup-box bg-white p-8 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Create Your Restaurant Account</h2>
          <form action="#">
            <div className="mb-4">
              <label htmlFor="owner-name" className="block text-gray-700">Owner's Name</label>
              <input
                type="text"
                id="owner-name"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="restaurant-name" className="block text-gray-700">Restaurant Name</label>
              <input
                type="text"
                id="restaurant-name"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter your restaurant name"
                required
              />
            </div>

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
                placeholder="Create a password"
                required
              />
            </div>

            <button
              type="submit"
              className="signup-submit bg-indigo-600 text-white py-2 px-4 rounded w-full hover:bg-indigo-700"
            >
              Next
            </button>

            <div className="login-options mt-4 text-center flex items-center">
              <p>
                Already have an account?
              </p>
              <div  onClick={() => navigate('/restaurantlogin')}className="text-indigo-600 hover:underline">
                  Login here
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
