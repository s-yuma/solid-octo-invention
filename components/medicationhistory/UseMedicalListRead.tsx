import React, { useEffect } from 'react'
import { supabase } from '../../utils/supabaseClient'
import { useState,useContext } from 'react';
import { useRouter } from "next/router";


export const UseMedicalListRead = () => {
  const [medicalList, setMedicalList] = useState<any>({});

  const router = useRouter();
  const name = router.query.name;

  useEffect(() => {
    fetch()
  },[])

  const fetch = async () => {
    let {data: list, error } = await supabase
      .from('medicinehistory2')
      .select('*')
      .order('id',{ascending: false})
      .eq("name",name)
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