import React, {FC} from 'react';
import {arrayFrom} from "../../../helpers/arrayFrom";
import {StyledHour, SideHours} from "../styles";

const CalendarSideHours: FC = () => {
    return (
        <SideHours>
            {arrayFrom(24).map(hour => (
                <StyledHour key={hour}>
                    {hour.toString().length === 1? '0'+ hour : hour}:00
                </StyledHour>
            ))}
        </SideHours>
    );
};

export default CalendarSideHours;
