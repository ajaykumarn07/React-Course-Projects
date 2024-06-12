import React from "react";
import "./Price.css";
import Input from "../../components/Input";

const Price = ({handleChange}) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value={100}
          title="₹100 - 200"
          name="test2"
        />
         <Input
          handleChange={handleChange}
          value={200}
          title="₹200 - 400"
          name="test2"
        />
         <Input
          handleChange={handleChange}
          value={400}
          title="₹400 - 600"
          name="test2"
        />
         <Input
          handleChange={handleChange}
          value={600}
          title="Above ₹600"
          name="test2"
        />
    </div>
  );
};

export default Price;
