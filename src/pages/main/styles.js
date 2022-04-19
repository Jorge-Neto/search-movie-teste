import styled from 'styled-components';

export const ContainerPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem auto auto;
  width: 75vw;
  padding: 1rem 0.5rem;
  box-shadow: 15px 15px 15px 0px rgba(0 0 0 / 50%);
  background-color: #ecf0f1;
  border-radius: 50px;

  form {
    .searchInput {
      margin-right: 0.5rem;
    }
    .searchInput, .searchButton {
      padding: 2px 5px;
      background-color: #ecf0f1;
      color: #1f2a0b;
      border: 1px solid #1f2a0b;
    }
  }
`;

export const ResultsList = styled.div`
  margin: 1rem;
  width: 90%;
`;

export const FormTitle = styled.h1`
  font-size: 32px;
  color: rgb(73 97 38);
`;

export const FormSubtitle = styled.h2`
  padding-bottom: 0.5rem;
  color: darkolivegreen;
`;
