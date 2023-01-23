import { PlusCircle } from 'phosphor-react'
import FIFA from '../../assets/fifa17.jpg'
import { About, ButtonAddGame, CarouselImages, DetailsContainer, DetailsContent, InfoGamePrincipal, InfoGameSecond } from './styles'

export function DetailsGame(){
  return (
    <DetailsContainer>
      <h1>FIFA 23</h1>
      <DetailsContent>
        <InfoGamePrincipal>
          <CarouselImages>
            <img src={FIFA} alt="" />
          </CarouselImages>
          <About>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illo quia, quos sit at maiores dolore. Sequi aspernatur magnam, aut iure earum possimus quia provident sint aliquid optio at et!</p>
          </About>
        </InfoGamePrincipal>
        <InfoGameSecond>
          <div>
            <h2>Plataforma</h2>
            <p>PlayStation 5, Xbox Series S/X, PlayStation 4, PC, Xbox One</p>
          </div>
          <div>
            <h2>Gênero</h2>
            <p>Action, Shooter, Adventure, RPG</p>
          </div>
          <div>
            <h2>Caracteristicas</h2>
            <p>Action, Shooter, Adventure, RPG</p>
          </div>
          <ButtonAddGame>
            <PlusCircle size={24}/>
            Add to game
          </ButtonAddGame>
        </InfoGameSecond>
      </DetailsContent>
    </DetailsContainer>
  )
}