import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import { Search } from '../../components/search/search.component';
import { CITIES_NAMES } from '../../typing/enum';
import { IS_LOADING } from '../../info-page/info-page.action';
import logo from '../logo.png';
import './header.scss';

export const Header: React.FC = () => {
	const dispatch = useDispatch();

	const getData = React.useCallback(cityName => {
		dispatch(IS_LOADING(cityName));
	}, []);

	const handler = (e: any) => {
		const name = e.currentTarget.id as keyof typeof CITIES_NAMES;
		getData(`${CITIES_NAMES[name]}`);
	};

	return (
		<header className="header_container">
			<img src={logo} className="header_logo" />
			<Button color="secondary" id="spb" onClick={handler}>
				<NavLink
					to={`/${CITIES_NAMES.spb}`}
					className="header_link"
					activeClassName="header_link--active"
					data-marker="menu-item"
				>
					Saint-Petersburg
				</NavLink>
			</Button>
			<Button color="secondary" id="rostov" onClick={handler}>
				<NavLink
					to={`/${CITIES_NAMES.rostov}`}
					className="header_link"
					activeClassName="header_link--active"
					data-marker="menu-item"
				>
					Rostov-On-Don
				</NavLink>
			</Button>
			<Button color="secondary" id="barcelona" onClick={handler}>
				<NavLink
					to={`/${CITIES_NAMES.barcelona}`}
					className="header_link"
					activeClassName="header_link--active"
					data-marker="menu-item"
				>
					Barcelona
				</NavLink>
			</Button>
			<Search />
		</header>
	);
};
