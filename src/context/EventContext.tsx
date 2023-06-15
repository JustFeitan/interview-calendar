import {createContext, FC, JSX, ReactNode, useState} from "react";
import {CalendarEvent} from "../models/CalendarEvent";

interface EventContextProviderProps {
    children: JSX.Element
}

export interface EventContextType {
    events: CalendarEvent[],
    setEvents: (events: CalendarEvent[]) => void;
}
export const EventContext = createContext<EventContextType | null>(null);

export const EventContextProvider: FC<EventContextProviderProps> = ({children}) => {

    const [events, setEvents] = useState<CalendarEvent[]>([])

    return (
        <EventContext.Provider value={{events, setEvents}}>
            {children}
        </EventContext.Provider>
    )
}







