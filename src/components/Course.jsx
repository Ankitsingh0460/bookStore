import { Link } from "react-router-dom";
import Cards from "./Cards";
import { useEffect, useState } from "react";
import axios from "axios";

function Course() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        await axios.get("http://localhost:8001/book").then((response) => {
          console.log(response.data);
          setBooks(response.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-20">
        <div className="justify-center text-center ">
          <h1 className="text-2xl md:text-4xl">
            We're deligthed to have you{" "}
            <span className="text-pink-500">Here!:)</span>
          </h1>
          <p className="mt-12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            tempore animi sapiente necessitatibus ipsa assumenda laudantium cum
            odio est autem consequatur nam magnam ducimus, atque officiis
            aperiam tenetur molestias accusamus.
          </p>
          <Link to="/">
            <button className="bg-pink-500 rounded-md py-2 px-4 mt-6 hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {books.map((item) => (
            <Cards item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
