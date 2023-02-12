import React, { useEffect } from 'react'
import { supabase } from '../../utils/supabaseClient'
import { useState,useContext } from 'react';
import { useRouter } from 'next/router';


export const HomeCalenderList = () => {
  const [calenderList, setCalenderList] = useState<any>({});

  useEffect(() => {
    fetch()
    console.log(+"yobi")
  },[])


  const fetch = async () => {
    console.log("fetc呼出先")
    let {data: list, error } = await supabase
      .from('reserve2')
      .select('title,start')
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
