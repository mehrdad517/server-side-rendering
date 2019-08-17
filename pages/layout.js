import React, {Component} from 'react';
import {connect} from 'react-redux';

class Layout extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(Layout);
