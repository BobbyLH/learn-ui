import * as React from 'react';
import Layout from '@components/Layout';
import ChatGPT from '@components/ChatGPT';
import mapCtxToProps from '@utils/mapCtxToProps';
/* import types */
import type { NextPage } from 'next';
import type { MapCtxToProps } from '@utils/mapCtxToProps';

interface ChatGPTPageProps extends MapCtxToProps {}

const ChatGPTPage: NextPage<ChatGPTPageProps>= props => {
  return (
    <Layout
      title={'ChatGPT'}
      page={props.page}
    >
      <ChatGPT { ...props }/>
    </Layout>
  );
};

ChatGPTPage.getInitialProps = async ctx => {
  return mapCtxToProps(ctx);
};

export default ChatGPTPage;
