import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 mb-6 shadow-md">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-xl font-bold mb-2 sm:mb-0">📚 BukuKu</h1>
        <div className="flex gap-6">
          <Link to="/" className="hover:underline">Beranda</Link>
          <Link to="/tentang" className="hover:underline">Tentang</Link>
          <Link to="/kontak" className="hover:underline">Kontak</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
