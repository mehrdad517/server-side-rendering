import React, {Component} from 'react';
import {connect} from 'react-redux';
import initsStore from './../src/store'
import Link from "next/link";
import Layout from "./layout";

class Index extends Component {
    render() {
        return (
            <Layout>
                <Link href='/about'><a>about</a></Link>
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    initsStore,
)(Index);
