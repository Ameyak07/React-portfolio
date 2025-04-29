import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.png";
import ImageTwo from "../../images/image2.png";
import ImageThree from "../../images/image3.png";
import ImageFour from "../../images/image4.png";
import Imagefive from "../../images/image5.png";
import Imagesix from "../../images/image6.png";
import "./styles.scss";

const portfolioData = [
  {
    id: 1,
    name: "Dice Roll",
    image: ImageOne,
    link: "https://github.com/Ameyak07/Dice-roll",
    category: "Development",
  },
  {
    id: 2,
    name: "Quiz App",
    image: ImageTwo,
    link: "https://github.com/Ameyak07/Quiz-app",
    category: "Development",
  },
  {
    id: 3,
    name: "Split Landing Page",
    image: ImageThree,
    link: "https://github.com/Ameyak07/Split-landing-page",
    category: "Design",
  },
  {
    id: 4,
    name: "Todo App",
    image: ImageFour,
    link: "https://github.com/Ameyak07/To-Do-List",
    category: "Development",
  },
  {
    id: 5,
    name: "Hamburger Menu",
    image: Imagefive,
    link: "https://github.com/Ameyak07/HamBurger-Menu",
    category: "Design",
  },
  {
    id: 6,
    name: "Parallax Effect",
    image: Imagesix,
    link: "https://github.com/Ameyak07/Parallax-website",
    category: "Development",
  },
];

const filterData = [
  { filterId: "All", label: "All" },
  { filterId: "Development", label: "Development" },
  { filterId: "Design", label: "Design" },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState("All");
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(category) {
    setFilteredValue(category);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredValue === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === filteredValue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem-${item.id}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a
                  href={item.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt={item.name} src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <a
                      href={item.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>Visit</button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
