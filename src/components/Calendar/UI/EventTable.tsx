import React, {FC, JSX, ReactNode} from 'react';
import {CalendarEvent} from "../../../models/CalendarEvent";
import {arrayFrom} from "../../../helpers/arrayFrom";
import {StyledEventCell, CalendarEventTable} from "../styles";

interface CalendarEventTableProps {
    renderItem: (cell: number) => JSX.Element | null;
}

const EventTable: FC<CalendarEventTableProps> = ({renderItem}) => {
    return (
        <CalendarEventTable>
            {
                arrayFrom(168).map(cell =>
                    <StyledEventCell key={cell}>
                        {renderItem(cell)}
                    </StyledEventCell>
                )
            }
        </CalendarEventTable>

    );
};

export default EventTable;
