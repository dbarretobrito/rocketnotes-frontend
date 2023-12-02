import styled from "styled-components";
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1{
    font-size: 48px;
    color: ${({theme}) => theme.COLORS.ORANGE};
  }

  > h2{
    font-size: 24px;
    margin: 48px 0;
  }

  > p{
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }

  > a{
    margin-top: 124px;
    color: ${({theme}) => theme.COLORS.ORANGE};
  }
`;

export const Background = styled.div`
  position: relative;
  flex: 1;
  overflow: hidden;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)); /* Cor e opacidade do degradê */
    z-index: 1; /* Garante que o degradê fique "acima" da imagem de fundo */
  }
`;