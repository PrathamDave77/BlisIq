import './index.css'
import Sidebar from './admin/Sidebar.jsx';
import Home from './admin/Home.jsx';

function App() {
  const n = 100;
  return (
    <div className="flex h-full w-full bg-bg-primary">

      <Sidebar />
      <div
        className="w-[12px] shrink-0
    bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_6px,var(--border-primary)_6px,var(--border-primary)_8px)]"
      />


      {/*{[...Array(n)].map(item => <div className="flex justify-center items-center text-text-primary">{"/"}</div>)}*/}


      <Home />
    </div>
  );


}

export default App
