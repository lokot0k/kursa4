import {ChangeEvent, ChangeEventHandler, useState} from 'react';
import {BASE_URL} from '../store/base';

export const useForm = (productId: number) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setIsError(false);
  };

  const phoneChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
    setIsError(false);
  };

  const sendRequest = () => {
    setIsError(false)
    setIsSuccess(false)
    fetch(BASE_URL + '/api/applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        name,
        phone,
        productId,
      })
    }).then((res) => {
      debugger
      if (res.ok) {
        setIsSuccess(true);
      } else {
        setIsError(true)
      }
    }).catch(() => {
      setIsError(true);
    });
  };

  return {
    nameChangeHandler,
    phoneChangeHandler,
    sendRequest,
    isError,
    isSuccess,
  };
};
