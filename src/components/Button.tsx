import { ButtonContainer } from './Button.styles'

interface ButtonProps {
  variant: string
}

export function Button({ variant }: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
