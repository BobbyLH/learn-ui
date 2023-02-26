import * as React from 'react';
import Layout from '@components/Layout';
import Code from '@components/Code';
import mapCtxToProps from '@utils/mapCtxToProps';
/* import types */
import type { NextPage } from 'next';
import type { MapCtxToProps } from '@utils/mapCtxToProps';

interface CodePageProps extends MapCtxToProps {}

const CodePage: NextPage<CodePageProps>= props => {
  return (
    <Layout
      title={'Code'}
      page={props.page}
    >
      <Code { ...props }/>
    </Layout>
  );
};

CodePage.getInitialProps = async ctx => {
  return mapCtxToProps(ctx);
};

export default CodePage;
