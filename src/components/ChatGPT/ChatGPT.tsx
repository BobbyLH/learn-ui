import React, { memo, useState } from 'react';
import { Radio, Input, Button } from 'antd';
import styles from './style/ChatGPT.module.scss';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { RadioChangeEvent } from 'antd';

export interface ChatGPTProps {}

const { TextArea } = Input;

const placeholders = [
  'Input your api key',
  'Input your access token'
];
export const ChatGPT: FC<PropsWithChildren<ChatGPTProps>> = props => {
  const [APIType, setAPIType] = useState(0);
  const handleAPIType = (e: RadioChangeEvent) => {
    setAPIType(e.target.value);
  };
  const handleChangeKey = () => {
    
  };
  const handleApplyKey = () => {

  };
  const handleChangeAsk = () => {

  };
  const handleSubmit = () => {
    
  };

  return (
    <div
      className={styles.wrapper}
    >
      <div className={styles.api}>
        <h3 className={styles['api-title']}>Choose API Type</h3>
        <Radio.Group onChange={handleAPIType} value={APIType}>
          <Radio value={0}>Offcial</Radio>
          <Radio value={1}>Unoffcial</Radio>
        </Radio.Group>
        <div className={styles['api-input']}>
          <Input placeholder={placeholders[APIType]} onChange={handleChangeKey} />
          <Button onClick={handleApplyKey} >Apply</Button>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles['content-title']}>Ask Your Questions</h3>
        <div className={styles['content-ask']}>
          <TextArea placeholder='Input your questions' onChange={handleChangeAsk} />
          <Button type='primary' size='large' onClick={handleSubmit} >Ask Me</Button>
        </div>
      </div>
      <div className={styles.result}>

      </div>
    </div>
  );
};

export default memo(ChatGPT);
