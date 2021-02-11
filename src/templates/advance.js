import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout, HomeSlider} from '../components/index';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default class Home extends React.Component {
    render() {        
        return (
            <Layout {...this.props}>
              <Header {...this.props} site={this.props.pageContext.site} page={this.props.pageContext} image={_.get(this.props, 'pageContext.site.siteMetadata.header.background_img', null)} />
              <div id="content" className="site-content">
                <main id="main" className="site-main inner">
                  <HomeSlider></HomeSlider> 
                </main>
                <Footer {...this.props} site={this.props.pageContext.site} page={this.props.pageContext} image={_.get(this.props, 'pageContext.site.siteMetadata.header.background_img', null)} />
              </div>
            </Layout>
        );
    }
}
