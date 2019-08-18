import React, {Component} from 'react';
import {connect} from 'react-redux';
import Layout from "./zone/layout";
import Main from "./main";
import Head from 'next/head'
import 'bootstrap-with-rtl/dist/css/bootstrap.min.css';
import 'bootstrap-with-rtl/dist/css/bootstrap.rtl.min.css'

class Index extends Component {
    render() {
        return (
            <Layout>
                <Head>
                    <title>bimic.ir</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Main />
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(Index);
