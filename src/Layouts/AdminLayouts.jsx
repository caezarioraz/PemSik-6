import Sidebar from '../Components/Sidebar';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar Section */}
      <Sidebar />

      {/* Main Content Section */}
      <div className="flex flex-col flex-1 p-6 bg-gray-100">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
