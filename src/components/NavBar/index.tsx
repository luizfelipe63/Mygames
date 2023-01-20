import { CardFavorites, InputSearch, NavContainer } from "./styles";
import Logo from '../../assets/Logo-Mygames.svg'
import { HeartStraight, MagnifyingGlass } from "phosphor-react";

export function NavBar() {
  return (
    <NavContainer>
      <img src={Logo} alt="" />
      <InputSearch>
        <MagnifyingGlass size={16} weight='bold' color='#fff'/>
        <input type="text" placeholder="Search..." />
      </InputSearch>
      <CardFavorites>
        <HeartStraight size={24} weight='fill'/>
        <span>3</span>
      </CardFavorites>
    </NavContainer>
  )
}