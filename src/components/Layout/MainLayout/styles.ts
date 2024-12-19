import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

const ContainerColumns = styled.div`
    display: flex;
    width: 100%;
    flex-grow: 1;
    overflow: hidden; 

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

const ContainerSide = styled.div<{ isLeft?: boolean }>`
    width: ${({ isLeft }) => (isLeft ? '30%' : '70%')};
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    height: 100%;
    min-height: 0;
    flex-grow: 1;

    ${({ isLeft }) => isLeft && `
        @media (max-width: 900px) {
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            height: auto;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: #007bff;
            padding: 10px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
            z-index: 99999;
        }
    `}
     @media (max-width: 900px) {
        width: ${({ isLeft }) => (isLeft ? 'fit-content' : '100%')};
    }   
`;
export { Container, ContainerColumns, ContainerSide };