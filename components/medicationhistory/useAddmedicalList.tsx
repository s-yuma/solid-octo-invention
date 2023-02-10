import React, { useEffect } from 'react'
import { supabase } from '../../utils/supabaseClient'
import { useState,useContext } from 'react';


export const UseAddMedicalList2 = () => {
  const [medicalList, setMedicalList] = useState<any>({});

  useEffect(() => {
    fetch()
  },[])

  const fetch = async () => {
    let {data: list, error } = await supabase
      .from('medicinehistory2')
      .select('*')
      .order('id',{ascending: false})
      console.log("読み込み")
      console.log(list)
      if(error) {
        console.log(error)
      } else {
        setMedicalList(list);
        console.log(typeof(list))
      }
  }

  return {medicalList, fetch};
}