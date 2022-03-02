import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #d48792;
  color: white;
  font-family: Poligon,sans-serif;
  padding: 10px;
`;

export const BoxAlinameto = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const Setores = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Conteudo = styled.div`
  display: flex;
`;

export const BoxImg = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 20px;

  img{
    width: 35px;
    height: 35px;
  }
`;

export const SubTitulo = styled.p`
  font-size: 24px
`;

export const Texto = styled.p``;
