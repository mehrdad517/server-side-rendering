import React, {Component} from 'react';
import {connect} from 'react-redux';

class Footer extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-12'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-4'>تست</div>
                            <div className='col-4'>تست</div>
                            <div className='col-4'>تست</div>
                        </div>
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
