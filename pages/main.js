import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAgency} from "../src/actions/agencyActions";
import Link from "next/link";

class Main extends Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        states: state.agencyReducer
    };
}


function mapDispatchToProps(dispatch) {
    return {
        fetchData: function () {
            dispatch(fetchAgency());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
