import Link from "next/link";
import React from "react";

const AllSectionLink = ({ title, href }) => {
  return (
      <div className="flex justify-content-center mb-8">
        <Link className="allLink" href={href}>
          {title}
          <span className="top button_border"></span>
          <span className="left left_bottom button_border"></span>
          <span className="left left_top button_border"></span>
          <span className="bottom bottom_right button_border"></span>
          <span className="bottom bottom_left button_border"></span>
          <span className="right button_border"></span>
        </Link>
      </div>
  );
};

export default AllSectionLink;
