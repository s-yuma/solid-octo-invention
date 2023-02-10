import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { useEffect, useState } from 'react';
import { HomeCalenderList } from './HomeCalenderList ';

export default function HomeCalender() {

  const {calenderList,fetch} = HomeCalenderList();

  useEffect(()=>{
    fetch()
  },[])
    return(
        <>
        <div >
            <FullCalendar  
                plugins={[dayGridPlugin, interactionPlugin]}        
                locale='ja'  

        // initialEvents={[{ title: '現在の日時', start: new Date() }]} //現在の日時を表示
        
                events={calenderList}
            />
      </div>
        </>
    )
}