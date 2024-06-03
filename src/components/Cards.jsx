import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="my-3 p-3">
        <div className="card w-93 bg-base-100 shadow-xl hover:bg-base-200 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
          <figure>
            <img src={item.image} alt="book " />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline p-3">${item.price}</div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white p-3">
                Buy now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
