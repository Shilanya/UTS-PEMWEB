import { useEffect, useState } from 'react';
import FormBuku from '../components/FormBuku';
import ListBuku from '../components/ListBuku';
import Books from "../components/Books";


function Home() {
  const [bukuList, setBukuList] = useState(() => {
    try {
      const data = localStorage.getItem('bukuku');
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });

  const [editData, setEditData] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('bukuku', JSON.stringify(bukuList));
  }, [bukuList]);

  const handleSubmit = (newData) => {
    if (editData) {
      setBukuList((prev) =>
        prev.map((item) => (item.id === editData.id ? newData : item))
      );
      setEditData(null);
    } else {
      setBukuList((prev) => [...prev, newData]);
    }
  };

  const handleDelete = (id) => {
    const konfirmasi = confirm('Yakin ingin menghapus buku ini?');
    if (konfirmasi) {
      setBukuList((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const handleEdit = (buku) => {
    setEditData(buku);
  };

  return (
    <div className="p-4 max-w-screen-md mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center text-blue-700">BukuKu 📚</h1>
  
      {/* Form Input */}
      <div className="bg-white shadow rounded-lg p-4 space-y-3">
        <h2 className="text-lg font-semibold">Tambah / Edit Buku</h2>
        <FormBuku onSubmit={handleSubmit} editData={editData} />
      </div>
  
      {/* Pencarian */}
      <div>
        <input
          type="text"
          placeholder="Cari buku..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
  
      {/* Daftar Buku */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Daftar Buku</h2>
        <ListBuku
          bukuList={bukuList}
          onEdit={handleEdit}
          onDelete={handleDelete}
          query={query}
        />
      </div>
      {/* Rekomendasi Buku dari API */}
        <div className="space-y-2">
        <h2 className="text-xl font-semibold text-blue-700">Rekomendasi Buku 📖</h2>
        <Books />
        </div>

    </div>
  );
  
  
}

export default Home;