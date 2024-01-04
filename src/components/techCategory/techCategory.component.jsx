// TechCategory.js
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TechItem from "../item/item.component";

const TechCategory = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItem = async () => {
      const response = await axios.get(
        `https://659656486bb4ec36ca026253.mockapi.io/category/${categoryId}/item`
      );
      const data = await response.data;
      setItems(data);
    };
    getItem();
  }, [categoryId]);

  return (
    <div className="category_container">
      {items.map((item) => (
        <TechItem
          key={item.id}
          id={item.id}
          name={item.name}
          avatar={item.avatar}
        />
      ))}
    </div>
  );
};

export default TechCategory;
