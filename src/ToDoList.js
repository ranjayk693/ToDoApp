import React, { useState } from "react";

const Task = () => {
  // let val = "";
  const [list, setList] = useState("");
  const [data, setData] = useState([]);

  const List = (event) => {
    setList(event.target.value);
  };
  const AddList = () => {
    if (list === "") return;
    setData((oldData) => {
      return [...oldData, list];
    });
    setList("");
  };
  const deleteHandler = (DataIndex) => {
    setData(
      data.filter((elem, index) => {
        return DataIndex !== index;
      })
    );
  };
  const handleKeyPress = (event) => {
    if (event.code === "Enter") {
      AddList();
    }
  };

  return (
    <>
      <section className="body-background">
        <section className="main-content">
          <h1>ToDo List</h1>
          <section className="input-content">
            <input
              type="text"
              placeholder="add item"
              onChange={List}
              value={list}
              onKeyDown={handleKeyPress}
            />
            <button className="add-button" onClick={AddList}>
              +
            </button>
          </section>
          {/* <section>
            <button
              onClick={() => {
                setData([]);
              }}
            >
              Reset Items
            </button>
          </section> */}
          <section className="list-container">
            {data.map((element, index) => {
              return (
                <ol key={index}>
                  <li className="list-items">
                    <button
                      className="cross-button"
                      onClick={() => {
                        deleteHandler(index);
                      }}
                    >
                      X
                    </button>
                    {element}
                  </li>
                </ol>
              );
            })}
          </section>
        </section>
      </section>
    </>
  );
};

export default Task;
