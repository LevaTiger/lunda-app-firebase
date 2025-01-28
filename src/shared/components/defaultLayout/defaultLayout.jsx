import AppFooter from "../appFooter/appFooter"
import AppHeader from "../appHeader/appHeader"

import "./default-layout.css"

const DefaultLayout = ({children}) => {



    return(
        <div className="default-layout">
            <AppHeader />
            
            {children}

            <AppFooter />
        </div>
    )
}

export default DefaultLayout;
