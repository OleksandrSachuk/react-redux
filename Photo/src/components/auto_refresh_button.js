import React, {Component} from 'react';

export default class AutoRefreshButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            autoRefresh: false
        }
    }

    onAutoRefreshClick() {
        this.setState({autoRefresh: !this.state.autoRefresh});
    }


    refreshStats() {
        console.log('tick');
        this.props.itemsFetchData('https://www.reddit.com/r/aww.json');
    }

    render() {
        if (this.state.autoRefresh && !this.props.isLoading) {
            this.intervalId  = setInterval(this.refreshStats.bind(this), 3000);
        }
        if (this.state.autoRefresh === false) {
            clearInterval(this.intervalId);
        }
        return (
                <button
                    className="btn btn-primary col-xs-offset-8 auto-refresh-button"
                    onClick={this.onAutoRefreshClick.bind(this)}
                >
                    { this.state.autoRefresh ? "Stop " : "Start " }auto-refresh
                </button>
        )
    }
}