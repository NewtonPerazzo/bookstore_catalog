import styled from 'styled-components';
import { IStatus } from '../../types/status';

const Container = styled.div<{ url: string}>`
  height: 100%;
  width: 200px;
  max-height: 130px;
  min-width: 180px;
  background-image: ${({url}) => `url(${url})`};
  background-size: cover;
  align-items: center;
  justify-content: center;
  padding: 10px 10px 10px 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 374px) {
    width: 180px;
  }
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #007bff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 110px;
  margin: 0;
`;

const Subtitle = styled.p<{ color?: string, size?: number }>`
  font-size: ${({ size }) => size || '14px'};
  color: ${({color}) => color || '#FFF'};
  font-weight: ${({color}) => color ? 'bold' : 'normal'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 80px;
  margin: 0;
`;

const ContainerInfo = styled.div<{ justify?: string}>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: ${({justify}) => justify || 'flex-end'};
`;

const Button = styled.button<{ status?: IStatus }>`
  font-size: 14px;
  color: #FFF;
  background-color: ${({ status }) => 
    status === "available" ? "#007bff" :
    status === "unavailable" ? "#DCDCDC" : 
    status === "rented" ? "#FF0000"
  : "#000"};
  border-radius: 8px;
  cursor: ${({ status }) => status === "available" ? "pointer" : "default"};
  border-width: 0;
  height: 30px;
`;

const ContainerBook = styled.div`
`;

const ContainerPrice = styled.div`
  background-color: #007bff;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
`;

const ContainerText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export { Container, Title, Subtitle, Button, ContainerInfo, ContainerBook, ContainerText, ContainerPrice };