import React, {Component} from 'react';
import {connect} from 'react-redux';

class Footer extends Component {
    render() {
        return (
            <div id='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm'>تست</div>
                        <div className='col-sm'>تست</div>
                        <div className='col-sm'>تست</div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(Footer);
