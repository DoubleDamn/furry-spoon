import React from "react";
import "./App.css";
import { List } from "./list";

type Data = { gender: string; age: number; name: string };

const DATA: Array<Data> = [
  { gender: "male", name: "Jhon", age: 15 },
  { gender: "fem", name: "Kate", age: 25 },
  { gender: "fem", name: "Ann", age: 14 },
  { gender: "male", name: "Tom", age: 18 },
  { gender: "male", name: "Sam", age: 35 },
  { gender: "male", name: "Luck", age: 23 },
  { gender: "male", name: "Max", age: 55 }
];

type S = { data: Array<Data>; showMan: boolean; showWomen: boolean };
// const API = "https://jsonplaceholder.typicode.com/users";

export class App extends React.PureComponent<{}, S> {
  public state: S = {
    data: DATA,
    showMan: true,
    showWomen: true
  };

  public componentDidMount() {
    // fetch(API)
    //   .then(res => res.json())
    //   .then(res => this.setState({ data: res }));
  }

  public render() {
    console.log(this.state.data);
    const { data } = this.state;
    return (
      <>
        <div className="App">
          <div className="checkboxList">
            <input
              type="checkbox"
              checked={this.state.showMan}
              onChange={() => {
                this.setState({ showMan: !this.state.showMan });
              }}
            />
            <List persons={data} gender="male" show={this.state.showMan} />
          </div>
          <div className="checkboxList">
            <input
              type="checkbox"
              checked={this.state.showWomen}
              onChange={() => {
                this.setState({ showWomen: !this.state.showWomen });
              }}
            />
            <List persons={data} gender="fem" show={this.state.showWomen} />
          </div>
        </div>
      </>
    );
  }

  // private checkboxList = (gender: string): JSX.Element => {
  //   const { data } = this.state;
  //   return (
  //     <>
  //       <input
  //         type="checkbox"
  //         checked={this.state.showMan}
  //         onChange={() => {
  //           this.setState({ showMan: !this.state.showMan });
  //         }}
  //       />
  //       <List persons={data} gender={gender} show={this.state.showMan} />
  //     </>
  //   );
  // };
}
