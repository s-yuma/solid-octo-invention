import styles from './MedicationHistory.module.scss'
import { useState , useContext} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocale from '@fullcalendar/core/locales/ja';
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { useCallback,useEffect } from "react";
import style from "../../styles/Calender.module.scss"
import { supabase } from '../../utils/supabaseClient'
import { useAddcalenderList } from './useAddcalenderList';
import { title } from 'process';
import { useUser } from '@auth0/nextjs-auth0/client';
import { UpdateContext } from '../../pages/medicationhistory/MedicationHistory';

export default function calenderList() {
    const {updata, setUpdata}= useContext(UpdateContext)
    const {calenderList,fetch} = useAddcalenderList();
    
    useEffect(() => {
        fetch()
      },[updata,calenderList])
  return (
    <>
      <div className={style.container}>
        <FullCalendar  
        plugins={[dayGridPlugin, interactionPlugin]}        
        locale='ja'  
          
        initialEvents={[{ title: '現在の日時', start: new Date() }]} //現在の日時を表示
        events={calenderList}

        // events={[
        //   { title: "event 1",start:"2023-01-12T10:30:00",end:"2023-01-12T10:30:00" }, //eventは予定 dateは日時
        // ]}
        />
      </div>
    </>
  )
}
