import React, {FC} from 'react';
import {AppHeader} from './styles/AppHeader'
import { PlusLgIcon } from '../UI/Icons';
import {useEvents} from "../../hooks/useEvents";



const Header: FC = () => {

    const {addEvent} = useEvents();

    return (
        <AppHeader>
            Interview Calendar
            <PlusLgIcon
                onClick={addEvent}
                size={40}
            />
        </AppHeader>
    );
};

export default Header;
