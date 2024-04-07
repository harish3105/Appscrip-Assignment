import React, { useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
function Main() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [filterBy, setFilterBy] = useState("title");
  const [showFilter, setShowFilter] = useState(false);
  const [selectedRecommendations, setSelectedRecommendations] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(null); // Updated to null
  const [selectedOptions, setSelectedOptions] = useState({
    idealFor: ["all"],
    occasion: ["all"],
    fabric: ["all"],
    segment: ["all"],
    suitableFor: ["all"],
    rawMaterials: ["all"],
    pattern: ["all"],
    jacketMaterial: ["all"],
    sleeveLength: ["all"],
    sleeve: ["all"],
  });

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));

    // Fetch recommendations data
    fetch("https://fakestoreapi.com/recommendations")
      .then((response) => response.json())
      .then((data) => setRecommendations(data))
      .catch((error) =>
        console.error("Error fetching recommendations:", error)
      );
  }, []);

  const handleFilterChange = (event) => {
    const value = event.target.value.toLowerCase();
    setFilter(value);
    if (value === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product[filterBy].toLowerCase().includes(value)
      );
      setFilteredProducts(filtered);
    }
  };

  const handleSelectChange = (event) => {
    const selectedFilterBy = event.target.value;
    setFilterBy(selectedFilterBy);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleRecommendationsChange = (event) => {
    const value = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedRecommendations(value);
  };

  const toggleDropdown = (dropdown) => {
    // Updated function to accept a parameter
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown); // Toggle dropdown
  };

  const handleCheckboxChange = (category, option) => {
    const updatedOptions = { ...selectedOptions };
    if (option === "all") {
      updatedOptions[category] = ["all"];
    } else {
      const index = updatedOptions[category].indexOf("all");
      if (index !== -1) {
        updatedOptions[category].splice(index, 1);
      }
      if (updatedOptions[category].includes(option)) {
        updatedOptions[category] = updatedOptions[category].filter(
          (item) => item !== option
        );
      } else {
        updatedOptions[category].push(option);
      }
    }
    setSelectedOptions(updatedOptions);
  };
  const handleUnselectAll = () => {
    const updatedOptions = {};
    Object.keys(selectedOptions).forEach((key) => {
      updatedOptions[key] = [""];
    });
    setSelectedOptions(updatedOptions);
  };

  return (
    <div className="flex flex-col h-fit">
      {/* blue row */}

      <div className="w-full h-fit flex justify-between px-8 items-center border-y-2 bg-white sticky top-0">
        <div className="lg:block hidden">
          <span> {filteredProducts.length} ITEMS</span>
          <span className="text-gray p-8" onClick={toggleFilter}>
            {showFilter ? "<  HIDE Filters" : ">  SHOW Filters"}
          </span>
        </div>

        <div className=" lg:hidden block " onClick={toggleFilter}>
          FILTER
        </div>

        <div>
          <select className="border-none">
            <option value="">RECOMMENDED</option>
            <option value="newest">Newest First</option>
            <option value="popular">Popular</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="priceLowToHigh">Price: Low to High</option>
          </select>
        </div>
      </div>

      <div className="flex">
        <div
          style={{
            width: showFilter ? "300px" : "0",
            overflowX: "hidden",
            transition: "width 0.5s",
            backgroundColor: "#f0f0f0",
          }}
        >
          <h2 className="p-2 border-b-2 lg:block hidden">Filters</h2>
          <div className="p-4">
            <div
              onClick={() => toggleDropdown("idealFor")}
              style={{ cursor: "pointer", marginBottom: "10px" }}
            >
              <div className="flex items-center justify-between">
                <span>Ideal For</span>
                <span className="">
                  {dropdownOpen === "idealFor" ? (
                    <FaAngleUp />
                  ) : (
                    <FaAngleDown />
                  )}
                </span>
              </div>
            </div>

            <div>
              <input
                type="checkbox"
                id="all"
                name="idealFor"
                value="All"
                onChange={() => handleCheckboxChange("idealFor", "all")}
                checked={selectedOptions.idealFor.includes("all")}
              />
              <label htmlFor="all">All</label>
            </div>
            {dropdownOpen === "idealFor" && (
              <>
                <p cursor="pointer" onClick={handleUnselectAll}>
                  Unselect ALL
                </p>
                <div>
                  <input
                    type="checkbox"
                    id="men"
                    name="idealFor"
                    value="Men"
                    onChange={() => handleCheckboxChange("idealFor", "men")}
                    checked={selectedOptions.idealFor.includes("men")}
                  />
                  <label htmlFor="men">Men (65)</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="women"
                    name="idealFor"
                    value="Women"
                    onChange={() => handleCheckboxChange("idealFor", "women")}
                    checked={selectedOptions.idealFor.includes("women")}
                  />
                  <label htmlFor="women">Women (63)</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="babyKids"
                    name="idealFor"
                    value="BabyKids"
                    onChange={() =>
                      handleCheckboxChange("idealFor", "babyKids")
                    }
                    checked={selectedOptions.idealFor.includes("babyKids")}
                  />
                  <label htmlFor="babyKids">Baby & Kids (59)</label>
                </div>
              </>
            )}
            <div
              onClick={() => toggleDropdown("occasio")}
              style={{ cursor: "pointer", marginBottom: "10px" }}
            >
              <div className="flex items-center justify-between">
                <span>Occasion</span>
                <span className="">
                  {dropdownOpen === "occasion" ? (
                    <FaAngleUp />
                  ) : (
                    <FaAngleDown />
                  )}
                </span>
              </div>
            </div>
            <div>
              <input
                type="checkbox"
                id="all"
                name="idealFor"
                value="all"
                onChange={() => handleCheckboxChange("idealFor", "all")}
                checked={selectedOptions.idealFor.includes("all")}
              />
              <label htmlFor="all">All</label>
            </div>
            {dropdownOpen === "occasio" && (
              <>
                <p cursor="pointer" onClick={handleUnselectAll}>
                  Unselect ALL
                </p>

                <div>
                  <input
                    type="checkbox"
                    id="men"
                    name="idealFor"
                    value="men"
                    onChange={() => handleCheckboxChange("idealFor", "men")}
                    checked={selectedOptions.idealFor.includes("men")}
                  />
                  <label htmlFor="men">Men (65)</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="women"
                    name="idealFor"
                    value="women"
                    onChange={() => handleCheckboxChange("idealFor", "women")}
                    checked={selectedOptions.idealFor.includes("women")}
                  />
                  <label htmlFor="women">Women (63)</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="babyKids"
                    name="idealFor"
                    value="babyKids"
                    onChange={() =>
                      handleCheckboxChange("idealFor", "babyKids")
                    }
                    checked={selectedOptions.idealFor.includes("babyKids")}
                  />
                  <label htmlFor="babyKids">Baby & Kids (59)</label>
                </div>
              </>
            )}
            <div
              onClick={() => toggleDropdown("occasi")}
              style={{ cursor: "pointer", marginBottom: "10px" }}
            >
              <div className="flex items-center justify-between">
                <span>Occasion</span>
                <span className="">
                  {dropdownOpen === "occasi" ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              </div>
            </div>
            <div>
              <input
                type="checkbox"
                id="all"
                name="idealFor"
                value="all"
                onChange={() => handleCheckboxChange("idealFor", "all")}
                checked={selectedOptions.idealFor.includes("all")}
              />
              <label htmlFor="all">All</label>
            </div>
            {dropdownOpen === "occasi" && (
              <>
                <p cursor="pointer" onClick={handleUnselectAll}>
                  Unselect ALL
                </p>

                <div>
                  <input
                    type="checkbox"
                    id="men"
                    name="idealFor"
                    value="men"
                    onChange={() => handleCheckboxChange("idealFor", "men")}
                    checked={selectedOptions.idealFor.includes("men")}
                  />
                  <label htmlFor="men">Men (65)</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="women"
                    name="idealFor"
                    value="women"
                    onChange={() => handleCheckboxChange("idealFor", "women")}
                    checked={selectedOptions.idealFor.includes("women")}
                  />
                  <label htmlFor="women">Women (63)</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="babyKids"
                    name="idealFor"
                    value="babyKids"
                    onChange={() =>
                      handleCheckboxChange("idealFor", "babyKids")
                    }
                    checked={selectedOptions.idealFor.includes("babyKids")}
                  />
                  <label htmlFor="babyKids">Baby & Kids (59)</label>
                </div>
              </>
            )}
            <div
              onClick={() => toggleDropdown("occas")}
              style={{ cursor: "pointer", marginBottom: "10px" }}
            >
              <div className="flex items-center justify-between">
                <span>Occasion</span>
                <span className="">
                  {dropdownOpen === "occas" ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              </div>
            </div>
            <div>
              <input
                type="checkbox"
                id="all"
                name="idealFor"
                value="all"
                onChange={() => handleCheckboxChange("idealFor", "all")}
                checked={selectedOptions.idealFor.includes("all")}
              />
              <label htmlFor="all">All</label>
            </div>
            {dropdownOpen === "occas" && (
              <>
                <p cursor="pointer" onClick={handleUnselectAll}>
                  Unselect ALL
                </p>

                <div>
                  <input
                    type="checkbox"
                    id="men"
                    name="idealFor"
                    value="men"
                    onChange={() => handleCheckboxChange("idealFor", "men")}
                    checked={selectedOptions.idealFor.includes("men")}
                  />
                  <label htmlFor="men">Men (65)</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="women"
                    name="idealFor"
                    value="women"
                    onChange={() => handleCheckboxChange("idealFor", "women")}
                    checked={selectedOptions.idealFor.includes("women")}
                  />
                  <label htmlFor="women">Women (63)</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="babyKids"
                    name="idealFor"
                    value="babyKids"
                    onChange={() =>
                      handleCheckboxChange("idealFor", "babyKids")
                    }
                    checked={selectedOptions.idealFor.includes("babyKids")}
                  />
                  <label htmlFor="babyKids">Baby & Kids (59)</label>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="w-full p-4">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          ></div>
          <div className="flex flex-wrap grid grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="lg:w-72  lg:m-8  m-2 p-4 border-2 border-black"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-52  "
                  style={{}}
                />
                <h3 className="text-center">{product.title}</h3>
                <p className="text-center">{product.category}</p> <span></span>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
