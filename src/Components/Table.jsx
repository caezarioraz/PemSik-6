const Table = ({ students, onEdit, onDelete }) => {
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-200">
          <th className="border px-4 py-2">No.</th>
          <th className="border px-4 py-2">NIM</th>
          <th className="border px-4 py-2">Nama</th>
          <th className="border px-4 py-2">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={student.id}>
            <td className="border px-4 py-2">{index + 1}</td>
            <td className="border px-4 py-2">{student.nim}</td>
            <td className="border px-4 py-2">{student.nama}</td>
            <td className="border px-4 py-2 flex gap-4">
              <button
                onClick={() => onEdit(student)}
                className="bg-yellow-500 text-white px-4 py-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(student.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Hapus
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
