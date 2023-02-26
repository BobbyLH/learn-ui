import paramsToQueryString from './paramsToQueryString';
/* import types */
import type { NextPageContext } from 'next';

export type MapCtxToProps = {
  page: string;
  query: NodeJS.Dict<string | string[]>;
  path: string;
};

export function mapCtxToProps(ctx: NextPageContext) {
  const { pathname, query, asPath } = ctx;
  return {
    page: pathname.replace(/\//g, '') || 'home',
    query,
    path: asPath || `${pathname}${paramsToQueryString(query)}`
  };
}

export default mapCtxToProps;
