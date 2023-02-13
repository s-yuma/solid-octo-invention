import React, { useEffect } from 'react'
import { supabase } from '../../utils/supabaseClient'
import { useState,useContext } from 'react';

export const UseCalenderListRead = (props:any) => {
  const [calenderList, setCalenderList] = useState<any>({});

  useEffect(() => {
    fetch(props.name)
  },[])

  const fetch = async (name:string | string[] | undefined) => {
    console.log(name+"fetc呼出先")
    let {data: list, error } = await supabase
      .from('reserve2')
      .select('title,start')
      .eq("name",name)
      console.log("読み込み")
      console.log(list)
      if(error) {
        console.log(error)
      } else {
        setCalenderList(list);
        console.log(list)
      }
  }
  

  return {calenderList, fetch};
}
