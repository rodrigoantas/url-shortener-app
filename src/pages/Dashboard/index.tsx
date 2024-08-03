import React, { useState } from 'react';
import * as S from './styles';
import api from '../../services';
import { AxiosError } from 'axios';

const DashboardPage: React.FC = () => {
  const [url, setUrl] = useState('');
  const [customAlias, setCustomAlias] = useState('');
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    if (!isValidUrl(url)) {
      setError('A URL deve começar com http:// ou https://');
      return;
    }
    try {
      const response = await api.put(`/api/create?url=${url}&CUSTOM_ALIAS=${customAlias}`);
      setResult(response.data);
    } catch (err) {
      const error = err as AxiosError<{ error: string }>;
      if (error.response) {
        setError(error.response.data.error)
      } else if (error.request) {
        setError('No response from server. Please try again later.');
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  const isValidUrl = (url: string): boolean => {
    return url.startsWith('http://') || url.startsWith('https://');
  };

  return (
    <S.Container>
      <S.Title>Encurtador de URL</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.Input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Insira a URL"
        />
        <S.Input
          type="text"
          value={customAlias}
          onChange={(e) => setCustomAlias(e.target.value)}
          placeholder="Alias personalizado (opcional)"
        />
        <S.Button type="submit">Encurtar</S.Button>
      </S.Form>
      {error && <S.Text className="error">{error}</S.Text>}
      {result && (
        <div>
          <p>URL encurtada: {result.url}</p>
          <p>Alias: {result.alias}</p>
          <p>Tempo de operação: {result.statistics.time_taken}</p>
        </div>
      )}
    </S.Container>
  );
};

export default DashboardPage;