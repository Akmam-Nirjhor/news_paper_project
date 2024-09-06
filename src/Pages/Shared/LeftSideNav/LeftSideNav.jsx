import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-5xl"></h2>
      <p className="text-center font-bold  text-2xl ">
        <h1>News Segment We have</h1>
      </p>
      {categories.map((category) => (
        <NavLink
          className="w-48 text-center ml-20 md:ml-12 text-sm block border md:text-xl font-semibold px-4"
          key={category.id}
          to={`/category/${category.id}`}
        >
          {category.name}
        </NavLink>
      ))}

      <div className=" p-2 ml-10 md:ml-0 text-xs md:text-sm font-bold">
        {news.map((item) => (
          <NavLink
            className="space-y-7 b p-2 text-center ml-52"
            to={`/category1/${item.category_id}`}
            key={item.category_id}
          >
            <img
              className="p-1 md:p-1 w-64 md:w-full"
              src={item.image_url}
              alt={item.title}
            />
            <div className="w-64 md:w-full break-words">{item.title}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
