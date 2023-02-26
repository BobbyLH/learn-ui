import React, { memo, useState } from 'react';
import { ChatGPTAPI } from 'chatgpt';
import { Radio } from 'antd';
import styles from './style/ChatGPT.module.scss';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { RadioChangeEvent } from 'antd';

export interface ChatGPTProps {}

export const ChatGPT: FC<PropsWithChildren<ChatGPTProps>> = props => {
  const [APIType, setAPIType] = useState(1);
  const handleAPIType = (e: RadioChangeEvent) => {
    setAPIType(e.target.value);
  };

  return (
    <div
      className={styles.wrapper}
    >
      <div className={styles['api-type']}>Choose API Type</div>
      <Radio.Group onChange={handleAPIType} value={APIType}>
        <Radio value={1}>Offcial</Radio>
        <Radio value={2}>Unoffcial</Radio>
      </Radio.Group>
      <input />
      ttt
    </div>
  );
};

export default memo(ChatGPT);
