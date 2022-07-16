import React from 'react'
import { useState } from 'react';
import Logo from "./Images/logo.png";

const App = () => {

  const [inputData, setInputData] = useState("");
  const [Items, setItems] = useState([])

  // Add Items
  const addItem = () => {
    if (!inputData) {

    }
    else {
      setItems([...Items, inputData]);
    }
    setInputData("")
  }

  // delete Items
  const deleteItem = (id) => {
    const updatedItem = Items.filter((elem, index) => {
      return id !== index;
    })
    setItems(updatedItem);
  }

  // Delete All
  const removeAll = () => {
    setItems([])
  }

  return (
    <>
      <div className="main_div">
        <div className="child_div">
          <figure>
            <img src={Logo} alt="This is a logo" />
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>

          <div className="addItem">
            <input type="text"
              placeholder='✍ Add items here'
              value={inputData}
              onChange={(event) => { setInputData(event.target.value) }}
            />

            <i className="fa-solid fa-plus addBtn" title='add item' onClick={addItem} />
          </div>

          <div className="showItems">
            {
              Items.map((eleme, index) => {
                return (

                  <div className="eachItem" key={index}>
                    <h3>{eleme} </h3>
                    <i className="fa-solid fa-trash-can deleteBtn" title='Delete Item' onClick={() => { deleteItem(index) }} />
                  </div>

                )
              })
            }

          </div>
          <div className="deleteAllBtn">
            <button className="noselect" onClick={removeAll} title='Delete All'><span className="text">Delete All</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z">
            </path></svg></span></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App