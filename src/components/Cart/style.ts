import styled from 'styled-components';

const Container = styled.div<{ height?: string, width?: string}>`
  align-items: center;

  width: ${({ width }) => width || '100vw'};
  height: ${({ height }) => height || '100%'};

  @media(max-width: 900px){
    display: flex;
    justify-content: center;
  }
`;

const Title = styled.p<{ isToHide?: boolean }>`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  ${({ isToHide }) => isToHide && "display: none"}
`

const TotalText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #007bff;
`

const ClearCart = styled.p<{ isToHide?: boolean }>`
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  ${({ isToHide }) => isToHide && "display: none;"}

  &:hover {
    color: red;
  }
`
const HeaderContainer = styled.div<{ isToMinimize?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 900px){
    ${({ isToMinimize }) => isToMinimize && "justify-content: center;"}
  }
`

const BookContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CartInfoContainer = styled.div<{ isToHide?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;

  ${({ isToHide }) => isToHide && "display: none;"}
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

const MinimizeButton = styled.div<{ isToHide?: boolean }>`
  height: 20px;
  width: 20px;
  border-radius: 100%;
  border: 1px solid #FFF;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;

  @media(min-width: 900px){
    display: none;
  }

  ${({ isToHide }) => isToHide && "display: none;"}
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