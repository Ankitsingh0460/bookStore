import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
import { useEffect, useState } from "react";
import Course from "./Course";

function FreeBook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        await axios.get("http://localhost:8001/book").then((response) => {
          setBooks(response.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  const filterbook = books.filter((data) => data.category === "Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <h1 className="text-xl font-semibold pb-2">Free Offered Cources</h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque magni
          esse, quae nam excepturi vero modi sequi reprehenderit provident.
        </p>
      </div>
      <div>
        <div className="slider-container">
          <Slider {...settings}>
            {filterbook.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBook;
