import './index.css'
import Sidebar from './admin/Sidebar.jsx';
import Home from './admin/Home.jsx';

function App() {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />  
      <Home />
    </div>
  );

  
}

export default App
