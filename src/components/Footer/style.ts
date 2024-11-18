import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 40px;
  background-color: #007bff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;

  @media(max-width: 900px){
    justify-content: flex-end;
  }

  p {
    font-size: 13px;
    color: #FFF;
  }

  div {
    display: flex;
  }
`;

export { Container };