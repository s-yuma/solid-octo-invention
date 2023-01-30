import React, { useEffect } from 'react'
import { supabase } from '../../utils/supabaseClient'
import { useState,useContext } from 'react';
import { UpdateContext } from '../../pages/reserve/Reserve';

export const useAddcalenderList = () => {
  const [calenderList, setCalenderList] = useState<any>({});
  const {updata, setUpdata}= useContext(UpdateContext)
  useEffect(() => {
    fetch()
  },[updata])

  const fetch = async () => {
    let {data: list, error } = await supabase
      .from('reserve')
      .select('title,start,end');
      console.log("読み込み")
      console.log(list)
      if(error) {
        console.log(error)
      } else {
        setCalenderList(list);
        console.log(typeof(list))
      }
  }

  return {calenderList, fetch};
}
