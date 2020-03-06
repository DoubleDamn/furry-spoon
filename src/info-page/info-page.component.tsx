import * as React from "react";
import { RouteComponentProps } from "react-router";
// import { AppBar } from "@material/top-app-bar";
import { Button, Container } from "@material-ui/core";

import { Spinner } from "../common/spinner/spinner";
import { Header } from "./header/header.component";
import "./info-page.scss";

type P = {
  isLoading: boolean;
  weatherInfo: WeatherInfo;

  getWeatherData(cityName: string): void;
} & RouteComponentProps;

export class InfoPage extends React.PureComponent<P> {
  public componentDidMount(): void {
    const cityName = this.props.match.url.slice(1);
    this.props.getWeatherData(cityName);
  }

  public render(): JSX.Element {
    console.log(this.props);

    return (
      <>
        <Header onClick={this.props.getWeatherData} />
        {this.props.isLoading ? (
          <Spinner />
        ) : (
          <Container>
            <h2 className="widget_title">
              Current weather and forecasts in your city
            </h2>
            <div className="widget_container">
              <span className="widget_city-name">
                Weather in {this.props.weatherInfo.name}
              </span>
              <div>
                <h3>
                  Current temperature: {this.props.weatherInfo.temp.temp} °C
                </h3>
              </div>
              {this.widgetTable}
            </div>
          </Container>
        )}
      </>
    );
  }

  private get widgetTable(): JSX.Element {
    const { weather, wind, temp } = this.props.weatherInfo;

    return (
      <table className="widget_table">
        <tbody>
          <tr>
            <td> Cloudiness</td>
            <td> {weather.main}</td>
          </tr>
          <tr>
            <td> Weather</td>
            <td> {weather.description}</td>
          </tr>
          <tr>
            <td> Wind</td>
            <td>
              {wind.deg} {wind.speed}
            </td>
          </tr>
          <tr>
            <td> Pressure</td>
            <td>{temp.pressure}</td>
          </tr>
          <tr>
            <td> Fells like</td>
            <td>{temp.feels_like}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
