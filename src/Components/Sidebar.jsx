const Sidebar = () => {
    return (
      <aside className="w-64 bg-gray-800 text-white h-full">
        <ul className="p-4">
          <li className="mb-4">
            <a href="#" className="text-lg">
              Dashboard
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-lg">
              Mahasiswa
            </a>
          </li>
          <li>
            <a href="#" className="text-lg">
              Pengaturan
            </a>
          </li>
        </ul>
      </aside>
    );
  };
  
  export default Sidebar;
  