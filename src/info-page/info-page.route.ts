import { connect } from "react-redux";
import { InfoPage } from "./info-page.component";
import { IS_LOADING, getWeatherForecast } from "./info-page.action";

const mapStateToProps = ({ infoPage }: State) => {
  return {
    isLoading: infoPage.isLoading
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  isLoad: () => dispatch(IS_LOADING()),
  getWeatherData: () => dispatch(getWeatherForecast())
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoPage);
