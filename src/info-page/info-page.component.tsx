import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Container } from '@material-ui/core';

import { Spinner } from '../common/spinner/spinner';
import { Header } from '../common/header/header.component';
import './info-page.scss';

type P = {
	isLoading: boolean;
	weatherHeader: Partial<WeatherInfo> & { temperature: number };
	widgetBody: WidgetBody[];
	errorMsg: string;

	getWeatherData(cityName: string): void;
} & RouteComponentProps;

export class InfoPage extends React.PureComponent<P> {
	public componentDidMount(): void {
		const cityName = this.props.match.url.slice(1);
		this.props.getWeatherData(cityName);
	}

	public render(): JSX.Element {
		if (this.props.errorMsg) {
		return <div>Sorry, something went wrong. Error: {this.props.errorMsg}</div>
		}
		return (
			<>
				<Header onClick={this.props.getWeatherData} />
				{this.props.isLoading ? (
					<Spinner />
				) : (
					<Container>
						<h2 className="widget_title">Current weather and forecasts in your city</h2>
						<div className="widget_container">
							{this.mainInfo}
							{this.widgetTable}
						</div>
					</Container>
				)}
			</>
		);
	}

	private get mainInfo(): JSX.Element {
		const { name, temperature, weather } = this.props.weatherHeader;
		return (
			<>
				<span className="widget_city-name">Weather in {name}</span>
				<div>
					<h3>Current temperature: {temperature} °C</h3>
				</div>
				<span>
					Cloudiness: {weather.main}, {weather.description}
				</span>
			</>
		);
	}

	private get widgetTable(): JSX.Element {
		return (
			<table className="widget_table">
				<tbody>
					{this.props.widgetBody.map((i, idk) => {
						return (
							<tr key={idk}>
								<td>{i.title}</td>
								<td>
									{i.value} {i.mark}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
}
