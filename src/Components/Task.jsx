import React from "react";

const Task = ({ title, description, index, array, method }) => {
  const deleteHandeler = (index) => {
    const filteredArray = array.filter((item, i) => {
      return i !== index;
    });

    console.log(filteredArray);

    method(filteredArray);
  };

  return (
    <div className="task">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <button
        onClick={() => {
          deleteHandeler(index);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Task;
