import styled from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-100"]};
  }
`;

export const HistoryList = styled.div`
  flex: 1;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;

    th {
      background: ${(props) => props.theme["gray-600"]};
      padding: 1rem 1.5rem;
      text-align: left;

      &:first-child {
        border-top-left-radius: 8px;
      }

      &:last-child {
        border-top-right-radius: 8px;
      }
    }
  }
`;
