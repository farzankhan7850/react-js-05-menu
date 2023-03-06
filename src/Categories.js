import React from "react";

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((e, index) => {
        return (
          <button
            key={index}
            onClick={() => filterItems(e)}
            className="filter-btn"
          >
            {e}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
