// TechStore.js
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../searchBar/search_bar.component";

const TechStore = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategory = async () => {
      const response = await axios.get(
        `https://659656486bb4ec36ca026253.mockapi.io/category`
      );
      const data = await response.data;
      setCategories(data);
    };

    getCategory();
  }, []);
  return (
    <div className="store_container">
      <SearchBar />

      {categories.map((category) => {
        return (
          <Link to={`/store/${category.id}`} key={category.id}>
            {category.name}
          </Link>
        );
      })}
    </div>
  );
};

export default TechStore;
