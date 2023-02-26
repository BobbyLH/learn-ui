import React, { memo, useState } from 'react';
import { Radio, Input, Button, Modal } from 'antd';
import request from '@utils/request';
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
const apiPath = [
  '/api/offcial',
  '/api/unoffcial'
];

export const ChatGPT: FC<PropsWithChildren<ChatGPTProps>> = props => {
  const [APIType, setAPIType] = useState(0);
  const [message, setMessage] = useState('');
  const [data, setData] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const handleAPIType = (e: RadioChangeEvent) => {
    setAPIType(e.target.value);
  };
  const handleChangeKey = (e: React.ChangeEvent<HTMLInputElement>) => {
    
  };
  const handleApplyKey = () => {

  };
  const handleChangeAsk = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };
  const handleSubmit = () => {
    request<{ code: number; data: string; }>({
      method: 'POST',
      url: apiPath[APIType],
      data: { message }
    })
      .success(res => setData(res.data))
      .fail(res => setData(res.data))
      .error(e => setErrMsg(e.message));
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
        { data }
      </div>
      <Modal open={!!errMsg} title='Error Message' onOk={() => setErrMsg('')} onCancel={() => setErrMsg('')}>
        <p>{errMsg}</p>
      </Modal>
    </div>
  );
};

export default memo(ChatGPT);
