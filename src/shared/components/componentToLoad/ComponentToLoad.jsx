import ShopItemCard from "../../../components/shopItemsCard/shopItemCard";
import Errorpage from "../errorpage/errorpage";
import Homepage from "../homepage/homepage";
import Tour from "../tour/tour";
import Webshop from "../webshop/webshop";


const ComponentToLoad = () => {

    const currentPath = window.location.pathname.toLowerCase();

    let componentToRender;

    

    switch(currentPath) {
        case "/":
            componentToRender = <Homepage />
            break;
        case "/tour":
            componentToRender = <Tour />
            break;
        case "/webshop":
            componentToRender = <Webshop />
            break;

        case "/shopitemcard":
            componentToRender = <ShopItemCard />
            break;
        default:
            componentToRender = <Errorpage />
    }


    return (
        <div>{componentToRender}</div>
    )
}

export default ComponentToLoad;