import styled from 'styled-components'
import * as Select from '@radix-ui/react-select'

export const HomeContainer = styled.main`
  max-width: 1120px;
  margin: 2rem auto;
`

export const SelectTrigger = styled(Select.Trigger)`
  border: 0;
  padding: 1rem;
  border-radius: 6px;
  width: 237px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  background: ${props => props.theme.color['black-600']};
  color: ${props => props.theme.color.White};

  cursor: pointer;
`

export const SelectContent = styled(Select.Content)`
  background: ${props => props.theme.color.White};
  color: ${props => props.theme.color['black-600']};
  padding: 1rem;
  border-radius: 6px;

  position: fixed;
  top: 90%;
  left: 20%;
`

export const SelectViewport = styled(Select.Viewport)``

export const SelectItem = styled(Select.Item)`
  position: relative;
`

export const GridCards = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  margin-top: 3.125rem;
`
