import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { AxiosError } from 'axios';
import { UrlType } from '../../types';
import createShortUrl from '../../hooks/create-short-url.hook';
import getMostAccessedUrls from '../../hooks/get-most-accessed-url.hook';

interface UrlResultType {
  url: string;
  alias: string;
  statistics: {
    time_taken: string;
  }
}

const DashboardPage: React.FC = () => {
  const [url, setUrl] = useState('');
  const [customAlias, setCustomAlias] = useState('');
  const [result, setResult] = useState<UrlResultType>();
  const [mostViewed, setMostViewed] = useState<UrlType[]>([]);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    setResult(undefined);

    if (!isValidUrl(url)) {
      setError('A URL deve começar com http:// ou https://');
      return;
    }
    try {
      const response = await createShortUrl(url, customAlias);
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


  useEffect(() => {
    async function getTopMostViewed() {
      const result = await getMostAccessedUrls()
      setMostViewed(result.data)
    }
    getTopMostViewed()

  }, [])

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
        <S.ResultContainer>
          <p>URL encurtada: {result.url}</p>
          <p>Alias: {result.alias}</p>
          <p>Tempo de operação: {result.statistics.time_taken}</p>
        </S.ResultContainer>
      )}


      <S.Title>Top 10 URL's mais visitadas</S.Title>
      <S.ListContainer>
        {mostViewed.length > 1 ? mostViewed.map((url, index) => (
          <S.ListItemContainer key={url._id}>
            <p>{index + 1}.</p>
            <a href={url.originalUrl}> {url.originalUrl} </a>
          </S.ListItemContainer>
        )) : <p>Nenhuma URL foi visitada até agora.</p>}
      </S.ListContainer>
    </S.Container>
  );
};

export default DashboardPage;