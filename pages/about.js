import React, {Component} from 'react';
import {connect} from 'react-redux';

class About extends Component {
    render() {
        return (
            <div>
                about page
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(About);
