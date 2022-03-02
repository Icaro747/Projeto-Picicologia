import React from 'react';
import * as S from './style';

import Headera from '../../components/headera'
import Footer from '../../components/footer'

const home = () => {
  return (
    <>
      <Headera />
      <S.Main>
        <S.Article>
          <S.Section>
            <S.Titolo>ola icaro</S.Titolo>
          </S.Section>
          <S.Section>
            <S.Titolo>titolo 2</S.Titolo>
          </S.Section>
        </S.Article>
      </S.Main>
      <Footer />
    </>
  )
}

export default home;