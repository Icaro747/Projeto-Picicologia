import styled from 'styled-components';

export const Header = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //background-color: #d48792;
  border-bottom: 3px solid #d48792;
`;

export const Divizao = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
`;

export const BoxImg = styled.div`
  min-width: 100px;
  min-height: 50px;
`;

export const NavBar = styled.ul`
  display: flex;
  align-items: center;
  font-family: Poligon, sans-serif;
  font-size: 24px;
`;

export const Item = styled.li`
  padding: 5px 10px;
  margin: 0px 2px;
  border: 3px solid rgba(0,0,0,0);
  transition: all 0.5s;

  :hover{
    border-bottom: 3px solid #d48792;
    border-radius: 5px;
  }
`;