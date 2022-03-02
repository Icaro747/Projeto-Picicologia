import React from 'react';
import * as S from './style';

const headera = () => {
  return (
    <S.Header>
      <S.Divizao>
        <S.BoxImg>
          <img src={""} alt="Facebook" />
        </S.BoxImg>
      </S.Divizao>
      <S.Divizao>
        <S.NavBar>
          <S.Item>Home</S.Item>
          <S.Item>Terapias</S.Item>
          <S.Item>Agendamento</S.Item>
          <S.Item>Blog</S.Item>
        </S.NavBar>
      </S.Divizao>
    </S.Header>
  )
}

export default headera;