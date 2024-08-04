import React from 'react';
import * as S from './styles';
import { UrlType } from '../../types';

interface UrlListProperties {
  mostViewed: UrlType[]
}


const UrlList = ({ mostViewed }: UrlListProperties) => {
  return (
    <S.ListContainer>
      {mostViewed.length > 1 ? mostViewed.map((url, index) => (
        <S.ListItemContainer key={url._id}>
          <p>{index + 1}.</p>
          <a href={url.originalUrl}> {url.originalUrl} </a>
        </S.ListItemContainer>
      )) : <p>Nenhuma URL foi visitada até agora.</p>}
    </S.ListContainer>
  );
};

export default UrlList;