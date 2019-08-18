import React, {Component} from 'react';
import {connect} from 'react-redux';
import Link from "next/link";

class Main extends Component {

    render() {
        return (
            <div>
                <Link href='/about'><a>about</a></Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        states: state.agencyReducer
    };
}

export default connect(
    mapStateToProps,
)(Main);
