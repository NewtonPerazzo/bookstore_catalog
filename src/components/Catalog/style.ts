import styled from 'styled-components';

const Container = styled.div.attrs<{ isToShowMore: boolean }>(props => ({
  style: {
    overflowY: props.isToShowMore ? 'scroll' : 'hidden',
  },
}))`
  width: 100%;
  height: 100%;
  display: flex;

  &::-webkit-scrollbar {
    margin-top: 5px;
    height: 5px;
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(255, 255, 255, 0.3);
    border-radius: 10px;
  }

  @media (max-width: 900px) {
    overflow-y: scroll;
  }
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

const BooksContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

const BooksSlider = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  overflow-x: scroll;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    height: 5px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 10px;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: rgb(255, 255, 255, 0.3);
    }
  }
`;

const SeeMoreTitle = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: flex-end;

  p {
    font-size: 13px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
      color: #007bff;
    }
  }
`;

export { Container, Title, BooksSlider, BooksContainer, SeeMoreTitle };