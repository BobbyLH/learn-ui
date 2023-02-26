import * as React from 'react';
import Layout from '@components/Layout';
import DallE from '@components/DallE';
import mapCtxToProps from '@utils/mapCtxToProps';
/* import types */
import type { NextPage } from 'next';
import type { MapCtxToProps } from '@utils/mapCtxToProps';

interface DallEPageProps extends MapCtxToProps {}

const DallEPage: NextPage<DallEPageProps>= props => {
  return (
    <Layout
      title={'DallE'}
      page={props.page}
    >
      <DallE { ...props }/>
    </Layout>
  );
};

DallEPage.getInitialProps = async ctx => {
  return mapCtxToProps(ctx);
};

export default DallEPage;
