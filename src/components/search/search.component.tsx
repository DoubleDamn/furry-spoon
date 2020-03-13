import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Input, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { KEY_CODES } from '../../typing/enum';
import { IS_LOADING } from '../../info-page/info-page.action';
import './search.scss';
import history from '../../common/helpers/history';

export const Search: React.FC = () => {
	const dispatch = useDispatch();
	const [searchValue, setSearchValue] = React.useState();

	const handler = React.useCallback(cityName => {
		if (cityName) {
			dispatch(IS_LOADING(cityName));
			history.push(`/${cityName}`);
		}
	}, []);

	const onNameInputKeydown = (e: any): void => {
		const inputValue = e.target.value;
		if (e.which === KEY_CODES.ENTER) {
			handler(inputValue);
			setSearchValue(inputValue);
		}
	};

	const onNameInputBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>): void => {
		if (value !== searchValue) {
			handler(value);
		}
	};

	return (
		<Input
			type="search"
			placeholder="Search"
			color="secondary"
			className="search_input"
			onKeyPress={onNameInputKeydown}
			onBlur={onNameInputBlur}
			startAdornment={<SearchIcon className="search_icon" />}
		/>
	);
};
