import Videogame from "../../components/Videogame"
import CartStore from "../../store/cart"

function VideogamePage() {
  return (<Videogame store={CartStore}/>)
}

export default VideogamePage