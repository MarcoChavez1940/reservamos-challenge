import { Input } from 'antd';
import { useState } from 'react'

const { Search } = Input;

const Searchbar = ({ onChange }) => {
  const [status, setStatus] = useState('');
  const onSearch = (value, _e, info) => {
    setStatus('');
    if (value.length === 0) {
      setStatus('error');
    } else {
      onChange(value);
    }
  }

  return (
    <>
      <Search placeholder="Buscar ciudad" onSearch={onSearch} status={status} enterButton />
      {status === 'error' && <ErrorMessage>Campo requerido</ErrorMessage>}
    </>
  )
}

const ErrorMessage = ({ children }) => {
  return <span style={{ fontSize: '1rem', color: 'red' }}>{children}</span>
};

export default Searchbar;