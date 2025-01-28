
import "./app-header.css"
import logo from '../../../assets/media/lunda-logo.jpg'
const AppHeader = () => {


    return(

        <header className="app-header">
            <nav className="container">
                <ul>
                    <li>
                        <figure><img src={logo} alt="Lunda logo" /></figure>
                    </li>
                
                    <li>
                        <a href="/">Főoldal</a>
                    </li>
                    <li>
                        <a href="/tour">Koncertek</a>
                    </li>
                    <li>
                        <a href="/webshop">Webshop</a>
                    </li>
                   
                </ul>
            </nav>
        </header>

    );
}

export default AppHeader;
