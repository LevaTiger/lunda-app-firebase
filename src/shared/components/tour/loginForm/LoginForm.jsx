import { useContext, useEffect, useState } from 'react'

import './login-form.css'
import { AuthContext, newDatesContext } from '../tour';

const LoginForm = ()=>{


    

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);

    const [dateformLocation, setDateformLocation] = useState("");
    const [dateformDate, setDateformDate] = useState("");
    const [calendarName, setCalendarName] = useState("");

    
   const {newDates, setNewDate} = useContext(newDatesContext)

   useEffect(()=> {
       const savedDates = localStorage.getItem("date");
       if (savedDates) {
        setNewDate(JSON.parse(savedDates))
       }

   }, [])
   
   

//bejelentkezéshez szükséges kódrész
    const handleLoginSubmit = (event) =>{
        event.preventDefault();

        const adminUser = 'lundazenekar';
        const adminPassword = 'titkosjelszó';

        if (username === adminUser && password === adminPassword) {
            setIsLoggedIn(true);
            console.log('bejelentkezve: lundazenekar')
            
           
        }
        else {
            alert('Hibás felhasználónév vagy jelszó!')
            console.log(`isloggedin állapota: ${isLoggedIn}`)
        }

       
    }

// új dátum adatok tárolására szolgáló függvény

    let addedDates =[];
    const handleAddNewDate = (event)=>{
        event.preventDefault();

        const formData = new FormData(event.target)
        const payload = Object.fromEntries(formData)
        const StoredDates = [...addedDates, payload]
        localStorage.setItem("date", JSON.stringify(StoredDates))
        
        console.log(payload)
       
        setNewDate((addedDates)=>[...addedDates, payload])
        console.log(`newDates: ${JSON.stringify([...addedDates, payload])}`)
        
    }


   

// A sikeres és sikertelen bejelentkezést követő megjelenítési logika:

    return(
        <div className='form-box' >
            {isLoggedIn === true? (
                <div className='dates-editor admin-login'>
                    <form onSubmit={handleAddNewDate}>
                        <div className='form-inputs'>
                            <label htmlFor="location-input">Helyszín: </label>
                            <input 
                                type="text" 
                                id='location-input' 
                                placeholder='Helyszín'
                                name='location'
                            />
                        </div>
                        <div className='form-inputs'>
                            <label htmlFor="date-input">Dátum: </label>
                            <input 
                                type="text" 
                                id='date-input' 
                                placeholder='2025-01-01'
                                name='date'
                            />
                         </div>
                        <div className='form-inputs'>
                            <label htmlFor="event-name-input">Eseménynév: </label>
                            <input 
                                type="text" 
                                id='event-name-input' 
                                placeholder='Eseménynév'
                                name='calendar-name'
                            />
                         </div>
                         <button type="submit">Hozzáadás</button>
                    </form>
                    
                </div>
            ) : (
                <form  className='admin-login' onSubmit={handleLoginSubmit}
                        
                    >
                        <div className='form-inputs'>
                            <label htmlFor="username">Felhasználó: </label>
                            <input 
                                type="text" 
                                id='username' 
                                placeholder='Felhasználónév'
                                required
                                onChange={(event)=>setUsername(event.target.value)}
                             />
                        </div>
                        <div className='form-inputs'>
                            
                            <label htmlFor="password">Jelszó: </label>
                            <input 
                            type="password" 
                            id='password' 
                            placeholder='Jelszó' 
                            required 
                            onChange={(event)=>setPassword(event.target.value)}
                            />
                        </div>
                        <button type="submit">Bejelentkezés</button>
                        
                    </form>
            )}
                </div>
    )
}

export default LoginForm;