import TechCategory from "../techCategory/techCategory.component";
import SearchBar from "../searchBar/search_bar.component";

const TechStore = () => {
  return (
    <div className="store_container">
      <SearchBar />

      <TechCategory />
    </div>
  );
};

export default TechStore;
