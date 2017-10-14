import React from 'react';
import withApp from '../lib/withApp';
import Index from '../containers/Index';

const IndexPage = props => (<Index {...props} />);

export default withApp()(IndexPage);
