import { GridCards, HomeContainer, SelectContent, SelectItem, SelectTrigger, SelectViewport } from './styles'
import * as Select from '@radix-ui/react-select';
import { CaretDown } from 'phosphor-react';
import { CardGame } from '../../components/CardGame';
import { Header } from './components/Header';

export function Home(){
  return (
    <HomeContainer>
      <Header/>

      <Select.Root>
        <SelectTrigger>
          <Select.Value placeholder="Orde by:" />
          <Select.Icon>
            <CaretDown size={24}/>
          </Select.Icon>
        </SelectTrigger>
        <Select.Portal>
          <SelectContent>
            <SelectViewport>
              <Select.Group>
                <SelectItem value='relevance'>Relevancia</SelectItem>
                <SelectItem value='relevance'>Relevancia</SelectItem>
                <SelectItem value='relevance'>Relevancia</SelectItem>
              </Select.Group>
            </SelectViewport>
          </SelectContent>
        </Select.Portal>
      </Select.Root>
      
      <GridCards>
        <CardGame/>
        <CardGame/>
        <CardGame/>
        <CardGame/>
        <CardGame/>
        <CardGame/>
        <CardGame/>
        <CardGame/>
      </GridCards>
      
    </HomeContainer>
   
  )
}