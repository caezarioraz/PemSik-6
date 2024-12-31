import React from 'react';

const Modal = ({ onClose, onSave, student }) => {
  const [formData, setFormData] = React.useState(student || { nim: '', nama: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-2xl mb-4">{student ? 'Edit Mahasiswa' : 'Tambah Mahasiswa'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">NIM</label>
            <input
              type="text"
              name="nim"
              value={formData.nim}
              onChange={handleChange}
              className="border p-2 w-full"
              placeholder="Masukkan NIM"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Nama</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="border p-2 w-full"
              placeholder="Masukkan Nama"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Simpan
          </button>
          <button type="button" onClick={onClose} className="ml-4 bg-red-500 text-white px-4 py-2 rounded">
            Batal
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
