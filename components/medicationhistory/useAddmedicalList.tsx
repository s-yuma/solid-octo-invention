
import React, { useEffect } from 'react'
import { supabase } from '../../utils/supabaseClient'
import { useState } from 'react';


export const useAddMedicalList = () => {
  const [medicalList, setMedicalList] = useState<any>({});

  useEffect(() => {
      fetch()
  },[])

  const fetch = async () => {
    let {data: list, error } = await supabase
      .from('medicinehistory')
      .select('*');
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
