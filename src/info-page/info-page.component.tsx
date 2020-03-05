import * as React from "react";
import * as ReactDOM from "react-dom";
// import { AppBar } from "@material/top-app-bar";
import { Button, Container } from "@material-ui/core";
import  "./header.scss";

type P = {
  isLoading: boolean;

  isLoad(): void;
  getWeatherData(): void;
};

export class InfoPage extends React.PureComponent<P> {
  public componentDidMount(): void {
    console.log(this.props.isLoading);
    this.props.isLoad();
    this.props.getWeatherData();

    console.log(this.props.isLoading);
  }
  public render(): JSX.Element {
    return (
      <>
        <header className="header_container">
          <Button color="primary">St. Peterburg</Button>
          <Button color="primary">Rostov-On-Don</Button>
          <Button color="primary">Barcelona</Button>
        </header>
        <Container>
          <div>Info</div>
        </Container>
      </>
    );
  }
}
