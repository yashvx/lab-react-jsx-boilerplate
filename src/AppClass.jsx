import { Component } from "react";
import "./App.css";
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component {
  imageData = () => {
    let data = [
      {
        id: 1,
        img: elephant,
      },
      {
        id: 2,
        img: elephant,
      },
      {
        id: 3,
        img: elephant,
      },
      {
        id: 4,
        img: elephant,
      },
    ];
    return data;
  };
  render() {
    const dataArr = this.imageData();

    return (
      <div>
        <h2>Kalvium Gallery</h2>
        {dataArr.map((ele) => (
          <img key={ele.id} src={ele.img} />
        ))}
      </div>
    );
  }
}
