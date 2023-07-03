import { Outlet, Link } from "react-router-dom";
import GetBooks from "./getBooks";

export default function load() {
  console.log("i got here");
  const books = <GetBooks />;
  console.log("i got here");
  console.log(books);
  return books;
}