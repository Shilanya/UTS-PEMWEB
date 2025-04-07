import { useState, useEffect } from 'react';

function FormBuku({ onSubmit, editData }) {
  const [judul, setJudul] = useState('');
  const [penulis, setPenulis] = useState('');

  useEffect(() => {
    if (editData) {
      setJudul(editData.judul);
      setPenulis(editData.penulis);
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: editData?.id ?? new Date().getTime(),
      judul,
      penulis,
    });
    setJudul('');
    setPenulis('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        placeholder="Judul buku"
        value={judul}
        onChange={(e) => setJudul(e.target.value)}
        required
        className="border rounded px-2 py-1 w-full"
      />
      <input
        type="text"
        placeholder="Penulis"
        value={penulis}
        onChange={(e) => setPenulis(e.target.value)}
        required
        className="border rounded px-2 py-1 w-full"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded">
        {editData ? 'Simpan Edit' : 'Tambah Buku'}
      </button>
    </form>
  );
}

export default FormBuku;
