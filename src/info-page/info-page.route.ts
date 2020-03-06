import { connect } from "react-redux";
import { InfoPage } from "./info-page.component";
import { IS_LOADING, getWeatherForecast } from "./info-page.action";

const mapStateToProps = ({ infoPage }: State) => {
  return {
    isLoading: infoPage.isLoading,
    weatherInfo: infoPage.weatherInfo
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getWeatherData: (cityName: string) => dispatch(IS_LOADING(cityName))
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoPage);
