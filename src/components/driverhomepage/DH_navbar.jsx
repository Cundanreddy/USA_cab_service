import { useNavigate } from 'react-router-dom';

export default function DH_navBar() {
  
  const navigate = useNavigate();
  return (
    <nav className="flex justify-around bg-gray-800 p-4">
      {/* Home Icon */}
      <div
        onClick={() => navigate('/driverhomepage')}
        className="text-white hover:text-yellow-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-house"
        >
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
          <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
      </div>

      {/* Earnings Icon */}
      <div
        onClick={() => navigate('/Earnings')}
        className="text-white hover:text-yellow-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-receipt"
        >
          <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
          <path d="M12 17.5v-11" />
        </svg>
      </div>

      {/* Settings Icon */}
      <div 
        onClick={() => navigate('/')}
        className="text-white hover:text-yellow-500">
        <i className="icon settings-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-hand-platter"
          >
            <path d="M12 3V2" />
            <path d="M5 10a7.1 7.1 0 0 1 14 0" />
            <path d="M4 10h16" />
            <path d="M2 14h12a2 2 0 1 1 0 4h-2" />
            <path d="m15.4 17.4 3.2-2.8a2 2 0 0 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2L5 18" />
            <path d="M5 14v7H2" />
          </svg>
        </i>
      </div>
    </nav>
  );
}
