import styled from 'styled-components';


const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const TooltipText = styled.span`
  visibility: hidden;
  background-color: #FFF;
  color: #000;
  text-align: center;
  border-radius: 8px;
  padding: 8px;
  position: fixed;
  z-index: 9999;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.3s;
  height: 15px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 12px;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: #FFF transparent transparent transparent;
  }
`;

const TooltipWrapper = styled.div`
  &:hover ${TooltipText} {
    visibility: visible;
    opacity: 1;
  }
`;

export { TooltipWrapper, TooltipContainer, TooltipText };
