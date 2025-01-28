import { useContext } from 'react'
import LoginForm from '../loginForm/LoginForm'
import './admin-login.css'

const AdminLogin = ()=>{

  
    return(
        <div>
            
            <details>
                <summary>Szerkesztés</summary>
                <LoginForm />
            </details>
            
        </div>
    )
}

export default AdminLogin

