import React, {Component} from 'react';
import {connect} from 'react-redux';
import Link from "next/link";

class About extends Component {
    render() {
        return (
            <div>
                <Link href='/'><a>return</a></Link>
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
