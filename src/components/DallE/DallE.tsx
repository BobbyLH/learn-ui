import React, { memo } from 'react';
import styles from './style/DallE.module.scss';
/* import types */
import type { FC, PropsWithChildren } from 'react';

export interface DallEProps {}

export const DallE: FC<PropsWithChildren<DallEProps>> = props => {
  const { children } = props;

  return (
    <div
      className={styles.DallE}
    >
      { children }
    </div>
  );
};

export default memo(DallE);
