
import { useState , useContext} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocale from '@fullcalendar/core/locales/ja';
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { useCallback,useEffect } from "react";
import style from "../../styles/Calender.module.scss"
import { UpdateContext } from '../../pages/medicationhistory/MedicationHistory[name]';
import { UseRecordRead } from './UseRecordRead'


export default function RecordCalender(props:any) {
    const {updata, setUpdata}= useContext(UpdateContext)
    const { recordList, fetch } = UseRecordRead();
    
   

    useEffect(() => {
      fetch(props.name)
    },[])
    console.log(props.name+"pro")
    
    // useEffect(() => {
    //     fetch(name)
    //   },[updata,calenderList])
  return (
    <>
      <div className={style.container}>
        <FullCalendar  
        plugins={[dayGridPlugin, interactionPlugin]}        
        locale='ja'  
        // initialEvents={[{ title: '現在の日時', start: new Date() }]} //現在の日時を表示
        events={recordList}

        />
      </div>
    </>
  )
}
