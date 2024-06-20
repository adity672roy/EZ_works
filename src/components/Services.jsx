import React from "react";
import IMG1 from "../assets/pd.png";
import IMG2 from "../assets/ap.png";
import IMG3 from "../assets/ts.png";
import IMG4 from "../assets/gd.png";
import IMG5 from "../assets/ra.png";
import IMG6 from "../assets/dp.png";

const services = [
  {
    title: "Presentation Design",
    img: IMG1,
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
  },
  {
    title: "Audio - Visual Production",
    img: IMG2,
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
  },
  {
    title: "Translation Services",
    img: IMG3,
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
  },
  {
    title: "Graphic Design",
    img: IMG4,
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
  },
  {
    title: "Research & Analytics",
    img: IMG5,
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
  },
  {
    title: "Data Processing",
    img: IMG6,
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
  },
];

const Services = () => {
  return (
    <div className="services">
      {services.map((service) => (
        <div className="service_card" key={service.title}>
          <div className="service_heading">
            <img
              src={service.img}
              alt={service.title}
              className="service_img"
            />
            <p className="service_title">{service.title}</p>
          </div>
          <p className="service_description">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
