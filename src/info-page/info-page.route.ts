import { connect } from "react-redux";
import { InfoPage } from "./info-page.component";
import { IS_LOADING } from "./info-page.action";
import { widgetHeaderSelector, widgetBodySelector } from "./helpers/info-page.selectors";

const mapStateToProps = ({ infoPage }: State) => {
  return {
    isLoading: infoPage.isLoading,
    error: infoPage.error,
    weatherHeader: infoPage.weatherInfo ? widgetHeaderSelector(infoPage) : null,
    widgetBody: infoPage.weatherInfo ? widgetBodySelector(infoPage) : null,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getWeatherData: (cityName: string) => dispatch(IS_LOADING(cityName))
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoPage);
