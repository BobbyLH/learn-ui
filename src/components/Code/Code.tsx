import React, { memo } from 'react';
import styles from './style/Code.module.scss';
/* import types */
import type { FC, PropsWithChildren } from 'react';

export interface CodeProps {}

export const Code: FC<PropsWithChildren<CodeProps>> = props => {
  const { children } = props;

  return (
    <div
      className={styles.Code}
    >
      { children }
    </div>
  );
};

export default memo(Code);
