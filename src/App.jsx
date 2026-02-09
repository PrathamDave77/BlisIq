import './index.css'
import Sidebar from './admin/Sidebar.jsx';
import Home from './admin/Home.jsx';

function App() {

  return (
    <div className="flex flex-row h-screen w-full bg-bg-primary">
      <Sidebar />
      <svg width="12" height="100vh" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="slashes"
            patternUnits="userSpaceOnUse"
            width="8"
            height="8"
            patternTransform="rotate(235)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="8"
              stroke="gray"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="12" height="100vh" fill="url(#slashes)" />
      </svg>

      <Home />
    </div>
  );


}

export default App
