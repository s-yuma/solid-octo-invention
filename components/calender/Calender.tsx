
import { createContext, useCallback,useEffect, useRef } from "react";
import style from "./Calender.module.scss"
import { supabase } from '../../utils/supabaseClient'
import { useState } from 'react'
import { UseCalenderListRead } from "./UseCalenderListRead";
import React, { useContext } from 'react'
import { UpdateContext } from '../../pages/medicationhistory/MedicationHistory[name]';
import CalenderList from './CalenderList';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';

export default function Calender(props:any) {
  const [ymd, setYmd]= useState("")
  const [beginningTime, setBeginningTime]= useState("")
  const inp = useRef<HTMLInputElement | undefined>()
  const [title, setTitle] = useState<string>("")

  const {updata, setUpdata}= useContext(UpdateContext)
  const {calenderList,fetch} = UseCalenderListRead(props.name);

  useEffect(() => {
    fetch(props.name)
  console.log(props.name+"useEfect")

  },[calenderList])

  const pushReserve = async (e:any)=> {
    e.preventDefault();

    try {
        const { data, error } = await supabase
        .from('reserve2')
        .insert([{
            name:props.name,
            title:props.name+"の予定："+title,
            start: `${ymd}T${beginningTime}:00`,
        }])

    } catch (error) {
        console.log(error)
    }
    fetch(props.name);
    console.log(props.name+":fetch")
    setYmd("")
    setBeginningTime("");
    setTitle("")
    setUpdata(updata?false:true)
  }
    return(
      <>
        <div className={style.container} style={{"backgroundColor": "rgb(73,123,158)"}} >
          <div style={{"display":"flex","justifyContent":"space-between"}}>
            <form onSubmit={pushReserve} id="yoyaku" method='post'>
              <div style={{"display":"flex","justifyContent":"space-between","width":"550px", "height":"55px","marginLeft":"30px"}}>
                <input type="date" onChange={event => setYmd(event.target.value) } value={ymd} style={{"flexBasis":"auto"}} required/>
                <FormControl style={{"backgroundColor":"white","width":"100px"}} >
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    予定時間
                  </InputLabel>
                <Select
                  defaultValue={"time"}
                  value={beginningTime}
                  onChange={event => setBeginningTime(event.target.value)}
                  style={{"flexBasis":"0"}}
                >
                  <MenuItem value="time"></MenuItem>
                  <MenuItem value="09:00">8:00</MenuItem>
                  <MenuItem value="09:30">8:30</MenuItem>
                  <MenuItem value="09:00">9:00</MenuItem>
                  <MenuItem value="09:30">9:30</MenuItem>
                  <MenuItem value="10:00">10:00</MenuItem>
                  <MenuItem value="10:30">10:30</MenuItem>
                  <MenuItem value="11:00">11:00</MenuItem>
                  <MenuItem value="11:30">11:30</MenuItem>
                  <MenuItem value="12:00">12:00</MenuItem>
                  <MenuItem value="12:30">12:30</MenuItem>
                  <MenuItem value="13:00">13:00</MenuItem>
                  <MenuItem value="12:30">13:30</MenuItem>
                  <MenuItem value="14:00">14:00</MenuItem>
                  <MenuItem value="14:30">14:30</MenuItem>
                  <MenuItem value="15:00">15:00</MenuItem>
                  <MenuItem value="15:30">15:30</MenuItem>
                  <MenuItem value="16:00">16:00</MenuItem>
                  <MenuItem value="16:30">16:30</MenuItem>
                  <MenuItem value="17:00">17:00</MenuItem>
                  <MenuItem value="17:30">17:30</MenuItem>
                  <MenuItem value="18:00">18:00</MenuItem>
                  <MenuItem value="18:30">18:30</MenuItem>
                  <MenuItem value="19:00">19:00</MenuItem>
                </Select>
                </FormControl>
              <div>
                <TextField id="filled-basic" required label="予定" variant="filled" style={{"backgroundColor":"white"}} value={title} onChange={(event) => {
                  setTitle(event.target.value)}} />
              </div>
              <button type="submit" className={style.button}>登録</button>
          </div>
            </form>
              </div>
        <div style={{"backgroundColor": "#ffff","margin":"20px","width":"1200px","paddingRight":"50px","marginLeft":"150px"}}>
          <CalenderList name={props.name} />
        </div>
        </div>
      </>
    )
}
