import React, { useEffect } from 'react'
import { supabase } from '../../utils/supabaseClient'
import { useState,useContext } from 'react';
import { useRouter } from 'next/router';

export const UseRecordRead = () => {
  const [recordList, setRecordList] = useState<any>();
  // useEffect(() => {
  //   fetch()
  // },[updata])

  const fetch = async (name:string | string[] | undefined) => {
    console.log(name+"sese")
    let {data: list, error } = await supabase
      .from('toilet')
      .select('title,start')
      .eq("name",name)
      console.log("読み込み")
      console.log(list)
      if(error) {
        console.log(error)
      } else {
        setRecordList(list);
        console.log(list)
      }
  }
  

  return {recordList, fetch};
}
