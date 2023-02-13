import { useEffect } from 'react'
import { supabase } from '../../utils/supabaseClient'
import { useState,useContext } from 'react';
import { useRouter } from "next/router";

export const UseReserveListiRead = () => {
  const [reserveList, setReserveList] = useState<any>({});
  const router = useRouter();
  const name = router.query.name;

  useEffect(() => {
    fetch()
  },[])

  const fetch = async () => {
    let {data: list, error } = await supabase
      .from('reserve')
      .select('*')
      .eq("title", name)
      console.log("読み込み")
      console.log(list)
      if(error) {
        console.log(error)
      } else {
        setReserveList(list);
        console.log(typeof(list))
      }
  }

  return {reserveList, fetch};
}
