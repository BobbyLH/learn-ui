import React, { memo, useState, useRef, useCallback } from 'react';
import { Radio, Input, Button, Modal, Spin } from 'antd';
import dayjs from 'dayjs';
import request from '@utils/request';
import styles from './style/index.module.scss';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { RadioChangeEvent, InputRef } from 'antd';

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
  const [loading, setLoading] = useState(false);
  const [APIType, setAPIType] = useState(0);
  const [message, setMessage] = useState('');
  const [data, setData] = useState<{req: string, res: string, ts: number}[]>([]);
  const [errMsg, setErrMsg] = useState('');
  const KeyInput = useRef<InputRef | null>(null);
  const CustomAPIKey = useRef('');
  const handleAPIType = (e: RadioChangeEvent) => {
    setAPIType(+e.target.value);
  };
  const handleChangeAsk = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);
  const handleSubmit = useCallback(() => {
    if (loading) return;
    setLoading(true);
    request<{ code: number; data: {
      message: string;
      detail: any;
      role: string;
    }; }>({
      method: 'POST',
      url: apiPath[APIType],
      data: {
        message,
        [APIType === 1 ? 'key' : 'token']: CustomAPIKey.current || void 0
      }
    })
      .success(res => setData((prev) => [...prev, { req: message, res: res.data.message, ts: (res.data.detail?.created ?? (Date.now() / 1000)) * 1000 }]))
      .fail(res => setData((prev) => [...prev, { req: message, res: JSON.stringify(res.data), ts: (res.data.detail?.created ?? (Date.now() / 1000)) * 1000 }]))
      .error(e => setErrMsg(e.message))
      .then(() => setLoading(false));
  }, [message, loading, APIType, CustomAPIKey]);

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
          <Input allowClear placeholder={placeholders[APIType]} ref={KeyInput} />
          <Button onClick={() => (CustomAPIKey.current = KeyInput.current?.input?.value!)} >Apply</Button>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles['content-title']}>Ask Your Questions</h3>
        <div className={styles['content-ask']}>
          <TextArea autoSize allowClear placeholder='Input your questions' onChange={handleChangeAsk} />
          <Button type='primary' size='large' onClick={handleSubmit} loading={loading}>Ask Me</Button>
        </div>
      </div>
      <Spin tip="Loading..." wrapperClassName={styles['result-loading']} spinning={loading}>
        <div className={styles.result}>
          { data.map((v, k) => {
            return (<div className={styles['result-item']} key={k}>
              <div className={styles['result-item-ts']}>{`${dayjs(v.ts).format('MM/DD YYYY - HH:mm:ss')}: `}</div>
              <p className={styles['result-item-req']}>{`You: ${v.req}`}</p>
              <p className={styles['result-item-res']}>{`Answer: ${v.res}`}</p>
            </div>);
          }) }
        </div>
      </Spin>
      <Modal open={!!errMsg} title='Error Message' onOk={() => setErrMsg('')} onCancel={() => setErrMsg('')}>
        <p>{errMsg}</p>
      </Modal>
    </div>
  );
};

export default memo(ChatGPT);
