import styled from 'styled-components';

const Container = styled.div<{ height?: string}>`
  width: 100%;
  align-items: center;

  height: ${({ height }) => height || '100%'};
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`

const TotalText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #007bff;
`

const ClearCart = styled.p`
  font-size: 14px;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: red;
  }
`
const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const BookContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CartInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`

const TotalContainer = styled.div`
padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ButtonTotal = styled.button`
  height: 30px;
  background-color: #FFF;
  color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

const MinimizeButton = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 100%;
  border: 1px solid #FFF;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;

  @media (min-width: 900px) {
    display: none;
  }
`

const BookInfo = styled.p`
  color: #fff;
  max-width: 50%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export { 
  Container, 
  Title, 
  HeaderContainer, 
  ClearCart, 
  BookContainer, 
  CartInfoContainer, 
  TotalText, 
  TotalContainer, 
  ButtonTotal,
  MinimizeButton,
  BookInfo
};