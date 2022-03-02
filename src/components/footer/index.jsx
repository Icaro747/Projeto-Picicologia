import React from 'react';
import * as S from './style';

import IMGfacebook from '../../assets/img/facebook-512.png'
import IMGinstagra from '../../assets/img/instagram-512.png'
import IMGwhatsapp from '../../assets/img/whatsapp-512.png'
import IMGtelefone from '../../assets/img/phone-512.png'

const footer = () => {
  return (
    <S.Footer>
      <S.BoxAlinameto>
        <S.Setores>
          <S.SubTitulo>Redes sosial</S.SubTitulo>
          <S.Conteudo>
            <S.BoxImg>
              <img src={IMGfacebook} alt="Facebook" />
            </S.BoxImg>
            <S.BoxImg>
              <img src={IMGinstagra} alt="Instagra" />
            </S.BoxImg>
          </S.Conteudo>
        </S.Setores>
        <S.Setores>
          <S.SubTitulo>Contato</S.SubTitulo>
          <S.Conteudo>
            <S.BoxImg>
              <img src={IMGwhatsapp} alt="Whats" />
            </S.BoxImg>
            <S.BoxImg>
              <img src={IMGtelefone} alt="Telefone" />
            </S.BoxImg>
          </S.Conteudo>
        </S.Setores>
      </S.BoxAlinameto>
    </S.Footer>
  )
}

export default footer;