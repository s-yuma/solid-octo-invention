import Sidebar from "../../components/sidebar/Sidebar";
import React, { FC, createContext,useState } from 'react'
import { useRouter } from "next/router";
import dynamic from 'next/dynamic';
import Header from "../../components/header/Header";
const Calender = dynamic(() => import('../../components/calender/Calender'), {
    ssr: false
});
export type FlagContextType = {
  updata: boolean;
  setUpdata: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UpdateContext = createContext<FlagContextType>({
  updata: false,
  setUpdata: () => {},
});;

export default function Reserve() {
  const router = useRouter();
  const name = router.query.name;
  console.log(name+"test")

  return (
    <>
        <Header/>
        {/* <Sidebar />  */}
        <Calender name={name} />
  </>
  );
}