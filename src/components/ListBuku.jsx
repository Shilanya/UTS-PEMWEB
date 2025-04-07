function ListBuku({ bukuList, onEdit, onDelete, query }) {
    const filteredBooks = bukuList.filter(
      (buku) =>
        buku.judul.toLowerCase().includes(query.toLowerCase()) ||
        buku.penulis.toLowerCase().includes(query.toLowerCase())
    );
  
    return (
      <ul className="space-y-2">
        {filteredBooks.map((buku) => (
          <li key={buku.id} className="border rounded p-2">
            <strong>{buku.judul}</strong> oleh {buku.penulis}
            <div className="space-x-2 mt-1">
              <button
                onClick={() => onEdit(buku)}
                className="bg-yellow-400 text-black px-2 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(buku.id)}
                className="bg-red-600 text-white px-2 py-1 rounded"
              >
                Hapus
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
  
  export default ListBuku;
  