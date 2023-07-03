export default async function load() {
    const res = await fetch("http://localhost:3000/books");
    return res.json();
  }