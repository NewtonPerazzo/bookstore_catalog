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
  text-align: flex-end;
`;

const BooksSlider = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  overflow-x: scroll;
  padding-bottom: 10px;
  height: 180px;
  margin-top: 20px;

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

const CategoryStyle = styled.div`
  display: inline-block;
  font-size: 26px;
  width: auto;
  font-weight: bold;
  font-style: italic;
`;

const CategoryDiv = styled.div`
  width: 20%;
  display: flex;
  color: #007bff;
  align-self: flex-end;
  justify-content: flex-end;
  border-bottom: 6px solid #007bff;
`;

const BorderCategory = styled.div<{ color?: string}>`
  width: 16px;
  height: 6px;
  display: flex;
  background-color:${({ color }) => color || " #007bff"};
  align-self: flex-end;
  justify-content: flex-end;
  transform: skewX(-50deg);
  margin-right: 10px;
`;

const BorderCategoryLast = styled.div`
  width: 16px;
  height: 6px;
  display: flex;
  background-color: #007bff;
  align-self: flex-end;
  justify-content: flex-end;
  clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 100%);
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export { 
  Container, 
  Title, 
  BooksSlider, 
  BooksContainer, 
  SeeMoreTitle, 
  CategoryStyle, 
  CategoryDiv, 
  BorderCategory, 
  BorderCategoryLast, 
  CategoryContainer 
};