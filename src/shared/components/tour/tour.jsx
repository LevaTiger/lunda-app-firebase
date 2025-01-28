import { createContext, useContext, useState} from 'react';
import AdminLogin from './adminLogin/AdminLogin';
import './tour.css'
import { AddToCalendarButton } from 'add-to-calendar-button-react';

export const newDatesContext = createContext();



const Tour = () =>{

    
    const [newDates, setNewDate] = useState([]);
    

   
    return (
        <newDatesContext.Provider value={{newDates, setNewDate}}>
            <div className='bg-img'>
                    <div>
                        <AdminLogin />
                    </div>

                <div className='container'>
                    <h1>Koncertek</h1>
                    <div className="dates">

                        <CalendarDate />

                        {
                            newDates.length> 0? (
                                newDates.map((date, index)=>(
                                    <div key={index} className='calendar-date'>
                                        <h3>{date.location} | {date.date} | {date['calendar-name']}</h3> 
                                        <AddToCalendarButton
                                            name={date['calendar-name']}
                                            startDate={date.date}
                                            options={['Apple','Google','Yahoo','iCal']}
                                            timeZone={`Europe/${date.location}`}
                                        />
                                        
                                    </div>
                                ))
                            ) :(
                                <div className="upcoming">
                                    <h4>Dátumok folyamatban...</h4>
                                </div>
                            )
                        }
                    </div>


                    
                </div>

            </div>
        </newDatesContext.Provider>
    )
}


const CalendarDate = () =>{

    return(
        <div className='calendar-date'>
            <h3>Derekegyház | 2025. 07. 10.</h3>
            <AddToCalendarButton
                name="Lunda-Derekegyház 19:00"
                startDate="2025-07-10"
                options={['Apple','Google','Yahoo','iCal']}
                timeZone="Europe/Budapest" 
            />
        </div>
    )
}

export default Tour;