import styled from 'styled-components';

export const RatingLists = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const RatingList = styled.ul`
  list-style: none;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const RatingItem = styled.li`
  font-size: 14px;
  @media screen and (min-width: 1024px) {
    margin: 0px 0px 15px !important;
  }
  @media screen and (width: 425px) {
    margin: 5px 0px 10px !important;
  }
`;
