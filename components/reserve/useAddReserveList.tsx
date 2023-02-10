import { useEffect } from 'react'
import { supabase } from '../../utils/supabaseClient'
import { useState,useContext } from 'react';
import { useUser } from "@auth0/nextjs-auth0/client";

export const useAddReserveList = () => {
  const [reserveList, setReserveList] = useState<any>({});
  const { user } = useUser();
  useEffect(() => {
    fetch()
  },[])

  const fetch = async () => {
    let {data: list, error } = await supabase
      .from('reserve')
      .select('*')
      .eq("title", user?.name)
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
