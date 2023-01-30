import Sidebar from "../../components/sidebar/Sidebar";
import Heder from "../../components/heder/Heder";
import dynamic from 'next/dynamic'
import React, { FC, createContext,useState } from 'react'
import Calender from "../../components/calender/Calender";

export type FlagContextType = {
  updata: boolean;
  setUpdata: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UpdateContext = createContext<FlagContextType>({
  updata: false,
  setUpdata: () => {},
});;

export default function Reserve() {

const [updata,setUpdata]=useState<boolean>(false)

  return (
    
    <>
      <UpdateContext.Provider value={{updata,setUpdata}}>
        <Heder/>
        <Sidebar/> 
        <Calender/>
      </UpdateContext.Provider>
    </>
  );
}