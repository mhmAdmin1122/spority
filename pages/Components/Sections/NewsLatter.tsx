import React from "react";

const NewsLatter = () => {
  return (
    <div className="newlatter-box">
      <div className="newslatter-inner-container">
        <form className="newlatter-form">
          <h3 className="newslatter-form-heading">
            Subscribe For More
          </h3>
          <div className="input-Boxes-newslatter-form">
            <input
              type="text"
              placeholder="Name"
            />
            <input
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="subscribebtn-newslatter">
            <button type="submit" className="">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLatter;
