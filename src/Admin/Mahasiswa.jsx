import { useState } from 'react';
import Swal from 'sweetalert2';
import Button from '../Components/Button';
import Modal from '../Components/Modal';
import Table from '../Components/Table';

// Main Application Component
const Content = () => {
  const [students, setStudents] = useState([
    { id: 1, nim: 'A11.2022.14608', nama: 'whoiscraz' },
    { id: 2, nim: 'A11.2023.14999', nama: 'WOI' },
    { id: 3, nim: 'A11.2024.15000', nama: 'LAH' },
  ]);
  const [openModal, setOpenModal] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);

  const openAddModal = () => {
    setCurrentStudent(null);
    setOpenModal(true);
  };

  const openEditModal = (student) => {
    Swal.fire({
      title: "Ini Yang Mau di Edit?",
      text: "Jangan Salah Orang Loh",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "IYA, Bener Kok Ini",
      cancelButtonText: "EH, Kayaknya Salah Deh",
    }).then((result) => {
      if (result.isConfirmed) {
        setCurrentStudent(student);
        setOpenModal(true);
      }
    });
  };

  const closeModal = () => setOpenModal(false);

  const showNotification = (message) => {
    Swal.fire({
      title: message,
      icon: 'success',
      timer: 1500,
      showConfirmButton: false
    });
  };

  const addOrEditStudent = (student) => {
    if (student.id) {
      setStudents((prevStudents) =>
        prevStudents.map((s) => (s.id === student.id ? student : s))
      );
      showNotification("Gonta Ganti Bae Lu Mah");
    } else {
      setStudents((prevStudents) => [
        ...prevStudents,
        { ...student, id: Date.now() },
      ]);
      showNotification("Tambah Personil Gini Lek!");
    }
    closeModal();
  };

  const deleteStudent = (id) => {
    Swal.fire({
      title: "Rill di Hapus Kah?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "IYA, Kebanyakan Dosa",
    }).then((result) => {
      if (result.isConfirmed) {
        setStudents((prevStudents) => prevStudents.filter((s) => s.id !== id));
        Swal.fire({
          title: "Deleted!",
          text: "Terhapus Dari Sistem Suci Ini",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <Header />
      <Main
        students={students}
        onAdd={openAddModal}
        onEdit={openEditModal}
        onDelete={deleteStudent}
      />
      {openModal && (
        <Modal onClose={closeModal} onSave={addOrEditStudent} student={currentStudent} />
      )}
      <Footer />
    </>
  );
};

// Header Component
function Header() {
  const handleLogout = () => {
    Swal.fire({
      title: "Mau Keluar Deck?",
      text: "Yakin kah? engga dicek dulu?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "IYA, ntar juga balik",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logged out!",
          text: "Nanti Balik Lagi Aja",
          icon: "success"
        });
        // Implement your logout logic here, e.g., redirecting to a login page
      }
    });
  };

  return (
    <header className="bg-zinc-200 p-4 flex justify-end">
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
}

// Main Component (used to render student list)
function Main({ students, onAdd, onEdit, onDelete }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Daftar Mahasiswa</h2>
      <Button
        style="bg-green-500 px-4 py-2 rounded-xl text-white mb-4"
        text="Tambah Mahasiswa"
        onClick={onAdd}
      />
      <Table students={students} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-zinc-200 p-4 text-center">
      &copy; 2024 Makan Gratis. 
    </footer>
  );
}

export default Content;
