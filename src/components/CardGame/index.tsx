import { Plus} from "phosphor-react";
import { NavLink } from "react-router-dom";
import { ButtonWishes, CardContent, CardGameImg } from "./styles";


export function CardGame() {
  return (
    <CardContent>
      <NavLink to={'/details'}>
        <CardGameImg >
        </CardGameImg>
      </NavLink>
      <ButtonWishes type="button">
        Add to game
        <Plus size={16} weight='bold' />
      </ButtonWishes>
      <NavLink to={'/details'} ><p>Hades</p></NavLink>
    </CardContent>
  )
}