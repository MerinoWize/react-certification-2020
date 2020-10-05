import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 16px;
  width: 100%;
  height: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 16px;
  width: 100%;
  height: 25%;
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 16px;
  width: 100%;
  height: 100%;
`;

export const Searchbar = styled.div`
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: auto;
  width: 100%;
  padding: 8px;
  margin: 8px 16px;
`;

export const SearchInput = styled.input`
  color: black;
  font-size: 1.2rem;
  width: 85%;
  padding: 4px 8px;
  border-radius: 15px;
  border: 1px solid white;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b3b3b3;
  padding: 8px;
  border-radius: 8px;
  color: white;
  font-size: 18px;
  text-decoration: none;

  margin: none;
  border: none;

  :hover {
    cursor: pointer;
  }
`;
