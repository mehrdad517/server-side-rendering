import React, {Component} from 'react';
import {connect} from 'react-redux';
import Layout from "./zone/layout";
import Head from 'next/head'
import ClipLoader from 'react-spinners/BarLoader';
import {BrowserRouter as Router, Route} from 'react-router-dom';



import {fetchAgency} from "../src/actions/agencyActions";
import 'bootstrap-with-rtl/dist/css/bootstrap.min.css';
import 'bootstrap-with-rtl/dist/css/bootstrap.rtl.min.css';
import 'shabnam-font/dist/font-face.css';
import './static/css/style.css';


import Main from "./main";
import About from './about'


class Index extends Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {

        if (!this.props.states.loading) {

            const override = {
                "position": "absolute",
                "top": "50%",
                "left": "50%",
                "transform": "translate(-50px, -50px)"
            };

            return (
                <ClipLoader
                    css={override}
                    sizeUnit={"px"}
                    size={50}
                    color={'#123abc'}
                    loading={true}
                />
            );
        }

        return (
            <Layout>
                <Head>
                    <title>{this.props.states.agency.site_setting.meta_tag.title}</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Router>
                        <Route component={Main} exact={true} path='/' />
                        <Route component={About} exact={true} path='/about' />
                </Router>
            </Layout>
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
)(Index);