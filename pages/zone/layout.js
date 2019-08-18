import React, {Component} from 'react';
import {connect} from 'react-redux';
import Footer from './footer'

class Layout extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                <Footer />
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
