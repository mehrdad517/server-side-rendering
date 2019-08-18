import React, {Component} from 'react';
import {connect} from 'react-redux';

class Footer extends Component {
    render() {
        return (
            <div id='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm'>
                            <h5>با ما در ارتباط باشید</h5>
                        </div>
                        <div className='col-sm'>
                            <h5>با ما در ارتباط باشید</h5>
                        </div>
                        <div className='col-sm'>
                            <h5>با ما در ارتباط باشید</h5>
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
