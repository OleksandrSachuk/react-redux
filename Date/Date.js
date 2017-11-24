import React from 'react';
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.css';
import enhanceWithClickOutside from 'react-click-outside';
import PrevIcon from '../../../../../assets/images/icons/menu_panel/calendar_prev_icon.png';
import NextIcon from '../../../../../assets/images/icons/menu_panel/calendar_next_icon.png';
import CloseIcon from '../../../../../assets/images/icons/menu_panel/calendar_close_icon.png';
import { connect } from 'react-redux';
import { addDate } from '../../../../../actions';
import Moment from 'react-moment';
import moment from 'moment';
import ReactSVG from 'react-svg';
import date from '../../../../../assets/images/icons/menu_panel/date.svg';

const PrevIconButton = () => <img src={PrevIcon} alt="prev_icon" />;
const NextIconButton = () => <img src={NextIcon} alt="next_icon" />;

Moment.globalFormat = 'DD.MM.YYYY';

class Date extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showDatePicker: false,
      clickOutside: false,
      startDate: null,
      endDate: null,
      focusedInput: 'startDate',
      nights: 1,
      orientation: 'horizontal',
    };
  }


  handleClickOutside = () => {
    if (this.state.showDatePicker) {
      this.setState({ showDatePicker: false });
      // this.addDateAction();
    }
  };

  addDateAction = () => {
    const { startDate, endDate, nights } = this.state;
    if (startDate && endDate && nights) {
      const date = {
        startDate,
        endDate,
        nights,
      };

      this.props.addDate(date);
    }
  };

  onDatesChange = ({ startDate, endDate }) => {
    const { focusedInput } = this.state;

    if (focusedInput === 'startDate' && endDate) {
      //case startDate, endDate is fulfilled and click before startDate
      this.setState({
        startDate,
        endDate: null,
        nights: 1,
      });
    } else if (startDate && endDate) {
      //case startDate is fulfilled, endDate is empty
      const nightsValue = endDate.diff(startDate, 'days');
      this.setState({ startDate, endDate, nights: nightsValue }, () =>
        this.addDateAction()
      );
    } else {
      //case startDate, endDate is empty
      this.setState({ startDate, endDate });
    }
  };

  onFocusChange = focusedInput => {
    focusedInput
      ? this.setState({ focusedInput })
      : this.setState({
        startDate: null,
        endDate: null,
        focusedInput: 'startDate',
      });
  };

  componentDidMount() {
    const { startDate, endDate, nights } = this.props.order.date;
    if (startDate && endDate && nights) {
      this.setState({
        startDate: moment(startDate),
        endDate: moment(endDate),
        nights,
      });
    }

    window.innerWidth < 1500 ? this.setState({ orientation: 'vertical' }) : null;
  }

  render() {
    const {
      showDatePicker,
      startDate,
      endDate,
      focusedInput,
      nights,
      orientation,
    } = this.state;

    return (
      <div className={
        showDatePicker ?
          "menu-panel__time active" : "menu-panel__time"}>
        <ReactSVG
          path={date}
          className="svg"
          wrapperClassName="svg__wrapper"
          style={{ width: 18, height: 17 }}
        />
        <div className="menu-panel__time_toggler"
          onClick={() => this.setState({ showDatePicker: !showDatePicker })}
        />
        <div className="menu-panel__time_title">
          <span className={"hidden"}>{startDate ? <Moment date={startDate} /> : 'Anytime'}</span>
          {/*<span>{startDate ? startDate.format('DD.MM.YYYY') : 'Anytime'}</span>*/}
          <span className="menu-panel__time_nightsValue">
            {nights ? `${nights} ${nights > 1 ? 'nights' : 'night'}` : null}
          </span>
        </div>
        {showDatePicker && (
          <div className="datepicker___wrapper">
            <div className="datepicker__title">
              <div className="datepicker__title_info">
                Select the period of your stay and the number of nights
              </div>
            </div>
            <div className="datepicker__title_close">
              <img
                src={CloseIcon}
                alt="close_icon"
                onClick={() => this.setState({ showDatePicker: false })}
              />
            </div>
            <DayPickerRangeController
              startDate={startDate}
              endDate={endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={focusedInput}
              onFocusChange={this.onFocusChange}
              numberOfMonths={2}
              navPrev={<PrevIconButton />}
              navNext={<NextIconButton />}
              minimumNights={nights > 1 ? nights : 1}
              orientation={orientation}
            />
            <div className="datepicker__nights_wrapper">
              <div className="datepicker__nights_inner">
                <div className="datepicker__nights">
                  <span className="datepicker__nights_title">Nights</span>
                  <span
                    className={
                      nights === 1
                        ? 'circle-button__delete inactive'
                        : 'circle-button__delete'
                    }
                    onClick={() =>
                      nights > 1
                        ? this.setState({ nights: this.state.nights - 1 })
                        : null}
                  />
                  <span className="datepicker__nights_value">{nights}</span>
                  <span
                    className="circle-button__add"
                    onClick={() => this.setState({ nights: this.state.nights + 1 })}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    order: state.order,
    settings: state.settings
  };
};

const mapDispatchToProps = {
  addDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(enhanceWithClickOutside(Date));
