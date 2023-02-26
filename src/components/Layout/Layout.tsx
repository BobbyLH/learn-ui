import React, { memo } from 'react';
import Head from 'next/head';
import Link from '@components/Link';
import styles from './style/Layout.module.scss';
/* import types */
import type { FC, PropsWithChildren } from 'react';

export interface LayoutProps {
  title?: string;
  className?: string;
  page?: string;
  children?: any
}

export const Layout: FC<PropsWithChildren<LayoutProps>> = props => {
  const { title = 'OMNI-DOOR', className = '', page = 'home', children } = props;

  return (
    <main
      className={[styles['layout'], className].join(' ')}
    >
      <Head>
        <title>{ title }</title>
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
      </Head>
      <header className={styles['layout-header']}>
        <nav className={styles['layout-header-nav']}>
          <Link page='chatgpt'>
            <a>ChatGPT</a>
          </Link>
          <Link page='dalle'>
            <a>DALL·E</a>
          </Link>
          <Link page='code'>
            <a>Code Generate</a>
          </Link>
        </nav>
      </header>
      <div className={styles['layout-content']}>
        { children }
      </div>
    </main>
  );
};

export default memo(Layout);
