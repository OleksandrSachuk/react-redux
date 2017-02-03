import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
    authButton() {
        if (this.props.authenticated){
            return <button className="btn btn-default" onClick={() => this.props.authenticate(false)}>Sign Out</button>
        }
        return <button className="btn btn-default" onClick={() => this.props.authenticate(true)}>Sign in</button>
    }
    render(){
        return(
            <nav className="navbar navbar-default">
                <div className="container">
                    <ul className="nav nav-pills">
                        <li role="presentation">
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/resources">Resources</Link>
                        </li>
                        <li>
                            {this.authButton()}
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return{
        authenticated: state.authenticated
    }
}
export default connect(mapStateToProps, actions)(Header);