import React, {FC, useContext} from 'react';
import {ColGrid} from "../../UI/elements";
import {DAYS} from "../consts";
import {DateContext, DateContextType} from "../../../context/DateContext";
import {HeadDate, HeadDay} from '../styles';
import {areSameDates} from "../../../helpers/areSameDates";
import {getCellDate} from "../../../helpers/getCellDate";

interface DateAndDaysSliderProps {
    weekArray: number[];
    onDateClick: (date: Date) => void;
    pickedDate: Date;
}

const DateAndDaysSlider: FC<DateAndDaysSliderProps> = ({weekArray, onDateClick, pickedDate}) => {

    const {currentDate} = useContext(DateContext) as DateContextType;

    const dateClickHandler = (day: number) => {
        if (!day) return;
        onDateClick(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))
    }

    return (
        <ColGrid $columns={7}>
            {
                DAYS.map((dayOfWeek, index) => (
                    <HeadDay key={dayOfWeek + index}>{dayOfWeek}</HeadDay>
                ))
            }
            {
                weekArray.map((day, index) => (
                    <HeadDate
                        key={day + index}
                        onClick={() => dateClickHandler(day)}
                        isActive={areSameDates(new Date(currentDate.getFullYear(), currentDate.getMonth(), day), pickedDate)}
                    >
                        {day ? day : null}
                    </HeadDate>
                ))
            }

        </ColGrid>
    );
};

export default DateAndDaysSlider;
