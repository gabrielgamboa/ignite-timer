import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  border-radius: 8px;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  font-weight: bold;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['red-500']};
  color: ${(props) => props.theme['gray-100']};
`
