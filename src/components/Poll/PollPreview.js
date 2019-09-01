import React from "react";
import PropTypes from "prop-types";
import "./PollPreview.css";

const PollPreview = ({ name, description, creatorName }) => (
  <li>
    <div className="labelContent">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{creatorName}</p>
    </div>
  </li>
);

PollPreview.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  creatorName: PropTypes.string
};

export default PollPreview;
