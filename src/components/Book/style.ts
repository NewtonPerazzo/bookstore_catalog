import styled from 'styled-components';
import { IStatus } from '../../types/status';

const Container = styled.div`
  height: 100%;
  width: 200px;
  max-height: 130px;
  min-width: 180px;
  background-color: #FFF;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;

  @media (max-width: 374px) {
    width: 180px;
  }
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Subtitle = styled.p<{ color?: string}>`
  font-size: 14px;
  color: ${({color}) => color || '#000'};
  font-weight: ${({color}) => color ? 'bold' : 'normal'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ContainerButton = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
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
  height: 40px;
`;

export { Container, Title, Subtitle, Button, ContainerButton };