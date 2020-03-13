import React from 'react';
import { shallow } from 'enzyme';

import { InfoPage } from '../../info-page/info-page.component';
import { CITIES_NAMES } from '../../typing/enum';
import { Spinner } from '../../common/spinner/spinner';
import { Container } from '@material-ui/core';
import { Header } from '../../common/header/header.component';

describe('InfoPage', () => {
	let component;
	const props = {
		isLoading: true,
		widgetBody: [],
		weatherHeader: {},
		match: { url: `/${CITIES_NAMES.spb}`, isExact: null, path: null, params: null },
		history: null,
		location: null,
		error: null,

		getWeatherData: jest.fn(),
	};

	beforeAll(() => {
		component = shallow(<InfoPage {...props} />);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should create component', () => {
		expect(component.instance()).toBeTruthy();
	});

	it('should call get data request when component mount', () => {
		const cityName = props.match.url.slice(1);

		component.instance().componentDidMount();
		expect(props.getWeatherData).toHaveBeenCalled();
		expect(props.getWeatherData).toHaveBeenCalledWith(cityName);
	});

	describe('WidgetPage Loader', () => {
		it('should match loading shapshot', () => {
			expect(component).toMatchSnapshot();
		});

		it('should display loader when data is loading', () => {
			expect(component.find(Spinner)).toHaveLength(1);
			expect(component.find(Container)).toHaveLength(0);
		});
	});

	describe('WidgetPage Widget', () => {
		const errorProps = {
			...props,
			isLoading: false,
			error: {message:'error message', code: 404},
		};

		beforeEach(() => {
			component = shallow(<InfoPage {...errorProps} />);
		});

		it('should match widget snapshot', () => {
			expect(component).toMatchSnapshot();
		});

		it('should error message', () => {
			expect(component.find(Header)).toHaveLength(0);
			expect(component.find(Spinner)).toHaveLength(0);
			expect(component.find(Container)).toHaveLength(0);
		});
	});
});
