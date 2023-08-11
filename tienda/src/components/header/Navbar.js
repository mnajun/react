import BrandComponent from "./Brand"
import ItemListContainer from "./ItemsListContainer";
import CartWidget from "./CartWidget";



const NavBar = () => {
    return(
        <header>
            <div className="containerBrand">
                <BrandComponent />
            </div>

            <nav className="containerItemList">
                <ItemListContainer
                    itemUno = "Pizzas"
                    itemDos = "Empanadas"
                    itemTres = "Minutas"
                    itemCuatro = "Cafeteria"
                    />
            </nav>

            <div className="containerCart">
                    <CartWidget />
            </div>

            

            


            
        </header>
    )
}

export default NavBar;