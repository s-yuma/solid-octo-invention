import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocale from '@fullcalendar/core/locales/ja';
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { useCallback } from "react";
import style from "../../styles/Calender.module.scss"
import { supabase } from '../../utils/supabaseClient'
import { useState } from 'react'

export default function Calender() {
  const [ymd, setYmd]= useState("")
  const [beginningTime, setBeginningTime]= useState("")
  const [endTime, setEndTime]= useState("")
const thisMonth = () => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
      2,
      "0"
    )}`;
  };

  const pushReserve = async (e:any)=> {
    e.preventDefault();
    try {
        const { data, error } = await supabase
        .from('reserve')
        .insert([{
            id: 6,
            username: 'uma',
            ymd ,
            beginningTime,
            endTime
        }])

    } catch (error) {
        console.log(error)
    }
    setYmd("")
    setBeginningTime("");
    setEndTime("");
        
  }



    const handleDateClick = useCallback((arg: DateClickArg) => {
        alert(arg.dateStr);
      }, []);

    return(
      <>
      <form>
        <label htmlFor="">診察時間：</label>
        <input type="date" onChange={event => setYmd(event.target.value) } value={ymd}/>
        <label htmlFor="">診察開始時間：</label>
        <select onChange={event => setBeginningTime(event.target.value) }>
          <option value="time"></option>
          <option value="9:00">9:00</option>
          <option value="9:30">9:30</option>
          <option value="10:00">10:00</option>
          <option value="10:30">10:30</option>
          <option value="11:00">11:00</option>
          <option value="11:30">11:30</option>
          <option value="12:00">12:00</option>
          <option value="12:30">12:30</option>
          <option value="13:00">13:00</option>
          <option value="14:00">14:00</option>
          <option value="14:30">14:30</option>
          <option value="15:00">15:00</option>
          <option value="15:30">15:30</option>
          <option value="16:00">16:00</option>
          <option value="16:30">16:30</option>
          <option value="17:00">17:00</option>
          <option value="17:30">17:30</option>
          <option value="18:00">18:00</option>
        </select>
        <label>～診察終了時間：</label>
        {/* <select value={endTime} onChange={event => setEndTime(event.target.value) }>
          <option value="time"></option>
          <option value="9:00">9:00</option>
          <option value="9:30">9:30</option>
          <option value="10:00">10:00</option>
          <option value="10:30">10:30</option>
          <option value="11:00">11:00</option>
          <option value="11:30">11:30</option>
          <option value="12:00">12:00</option>
          <option value="12:30">12:30</option>
          <option value="13:00">13:00</option>
          <option value="14:00">14:00</option>
          <option value="14:30">14:30</option>
          <option value="15:00">15:00</option>
          <option value="15:30">15:30</option>
          <option value="16:00">16:00</option>
          <option value="16:30">16:30</option>
          <option value="17:00">17:00</option>
          <option value="17:30">17:30</option>
          <option value="18:00">18:00</option>
        </select> */}
        <input type="submit" />
      </form>
      
      
      <div className={style.container}>
        <FullCalendar  
        plugins={[dayGridPlugin, interactionPlugin]}        
        locale='ja'  
          
        initialEvents={[{ title: '現在の日時', start: new Date() }]} //現在の日時を表示
        dateClick={handleDateClick}
        events={[
            { title: "event 1", date: `${thisMonth()}-01`, start:"2022-11-15:00:00",end:"2022-11-15:30:00" }, //eventは予定 dateは日時
            { title: "event 2", date: `${thisMonth()}-02` },
          ]}
      />
      </div>
      </>
    )
}