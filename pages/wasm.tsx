import * as React from 'react';
import Layout from '@components/Layout';
import Wasm from '@components/Wasm';
import mapCtxToProps from '@utils/mapCtxToProps';
/* import types */
import type { NextPage } from 'next';
import type { MapCtxToProps } from '@utils/mapCtxToProps';

interface WasmPageProps extends MapCtxToProps {}

const WasmPage: NextPage<WasmPageProps>= props => {
  return (
    <Layout
      title={'Wasm'}
      page={props.page}
    >
      <Wasm { ...props }/>
    </Layout>
  );
};

WasmPage.getInitialProps = async ctx => {
  return mapCtxToProps(ctx);
};

export default WasmPage;
