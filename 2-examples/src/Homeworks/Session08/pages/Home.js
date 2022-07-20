import React from "react";

const images = [
  {
    name: "image 1",
    src: "/images/1.jpeg",
  },
  {
    name: "image 2",
    src: "/images/2.jpeg",
  },
  {
    name: "image 3",
    src: "/images/3.jpeg",
  },
  {
    name: "image 4",
    src: "/images/4.jpeg",
  },
];

function Home() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide h-50"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {images.map((ima, index) => {
          return (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={`image-${index}`}
            >
              <img
                src={ima?.src}
                className="d-block w-100"
                height={500}
                alt={ima?.name}
              />
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Home;
