import React, {FC, JSX} from 'react';
import {arrayFrom} from "../../../helpers/arrayFrom";
import {CalendarEventTable, StyledEventCell} from "../styles";

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
