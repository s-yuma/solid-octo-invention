import styles from './MedicationHistory.module.scss'
import { useState , useContext} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { useCallback,useEffect } from "react";
import { UseCalenderListRead } from './UseCalenderListRead';
import { UpdateContext } from '../../pages/medicationhistory/MedicationHistory[name]';


export default function CalenderList(props:any) {
    const {updata, setUpdata}= useContext(UpdateContext)
    const {calenderList,fetch} = UseCalenderListRead(props.name);

    useEffect(() => {
      fetch(props.name)
      console.log(calenderList)
    },[])

    useEffect(() => {
        fetch(props.name)
      },[calenderList])

    
  return (
    <>
        <FullCalendar  
          plugins={[dayGridPlugin, interactionPlugin]}        
          locale='ja'  
          // initialEvents={[{ title: '現在の日時', start: new Date() }]} //現在の日時を表示
          events={calenderList}
          contentHeight={'auto'}
          eventClick={
            function (args) {
              alert(args.event.title)
            }
          }
        />
 
    </>
  )
}
