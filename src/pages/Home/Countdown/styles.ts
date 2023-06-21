import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1.5rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  color: ${(props) => props.theme['green-500']};

  padding: 2rem 0rem;

  overflow: hidden;
  width: 4rem;

  display: flex;
  justify-content: center;
`
