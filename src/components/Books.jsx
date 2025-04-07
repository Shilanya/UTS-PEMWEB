import { useEffect, useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://gutendex.com/books/")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.results.slice(0, 5)); // ambil 5 buku aja
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal fetch data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading buku...</p>;

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Rekomendasi Buku</h2>
      <ul className="list-disc pl-5">
        {books.map((book) => (
          <li key={book.id} className="mb-1">
            {book.title} oleh {book.authors[0]?.name || "Anonim"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
