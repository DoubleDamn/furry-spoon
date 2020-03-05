import * as React from "react";
// import { AppBar } from "@material/top-app-bar";
import { Button, Container } from "@material-ui/core";
import { Header } from "./header/header.component";

type P = {
  isLoading: boolean;

  isLoad(): void;
  getWeatherData(cityName: string): void;
};

export class InfoPage extends React.PureComponent<P> {
  public componentDidMount(): void {
    console.log(this.props.isLoading);
    this.props.isLoad();
  }

  public render(): JSX.Element {
    return (
      <>
        <Header onClick={this.props.getWeatherData} />
        <Container>
          <div>Info</div>
        </Container>
      </>
    );
  }
}
