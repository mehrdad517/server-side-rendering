import React from 'react';
import {Provider} from "react-redux";
import App ,{Container} from 'next/app';
import withRedux from 'next-redux-wrapper';
import initsStore  from './../src/store'



class Init extends App{

    static async getInitialProps({Component, ctx}) {

        return {
            pageProps: {
                // Call page-level getInitialProps
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
            }
        };

    }

    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component { ...pageProps } />
                </Provider>
            </Container>
        );
    }
}

export default withRedux(initsStore)(Init);
