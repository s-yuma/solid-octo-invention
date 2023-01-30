import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocale from '@fullcalendar/core/locales/ja';
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { useCallback,useEffect } from "react";
import style from "../../styles/Calender.module.scss"
import { supabase } from '../../utils/supabaseClient'
import { useState } from 'react'
import { useAddcalenderList } from './useAddcalenderList';
import { title } from 'process';
import React, { useContext } from 'react'
import { UpdateContext } from '../../pages/medicationhistory/MedicationHistory';
import CalenderList from './CalenderList';
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Calender() {
  const [ymd, setYmd]= useState("")
  const [beginningTime, setBeginningTime]= useState("")
  const [endTime, setEndTime]= useState("")
  const { user } = useUser();
  const {updata, setUpdata}= useContext(UpdateContext)
  const {calenderList,fetch} = useAddcalenderList();
  const [title ,setTitle] = useState<any>("ゲスト")

  useEffect(() => {
    fetch()
  },[updata])

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
            title: user?.name,
            start: `${ymd}T${beginningTime}:00`,
            end: '12:30'
        }])

    } catch (error) {
        console.log(error)
    }
    fetch();
    setYmd("")
    setBeginningTime("");
    setEndTime("");
    setUpdata(updata?false:true)
  }



    const handleDateClick = useCallback((arg: DateClickArg) => {
        alert(arg.dateStr);
      }, []);

    return(
      <>
      <form onSubmit={pushReserve} id="yoyaku" method='post'>
        <label >診察日時：</label>
        <input type="date" onChange={event => setYmd(event.target.value) } value={ymd}/>
        <label >診察開始時間：</label>
        <select id="time1" name="time1" onChange={event => setBeginningTime(event.target.value) }>
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
        {/* <label>～診察終了時間：</label>
        <select id="time2" name="time2" onChange={event => setEndTime(event.target.value) }>
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
        <button type="submit">送信</button> */}
      </form>
      <button type='submit' form='yoyaku'>登録</button>
      <CalenderList/>
      </>
    )
}