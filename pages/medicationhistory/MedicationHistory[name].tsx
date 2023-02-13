import React, { FC, createContext } from 'react'
import { useState} from 'react'
import MedicationHistoryInput from '../../components/medicationhistory/MedicationHistoryInput'
import MedicationHistoryList from '../../components/medicationhistory/MedicationHistoryList'
import Sidebar from '../../components/sidebar/Sidebar'
import { useRouter } from 'next/router'
import styles  from '../../components/medicationhistory/MedicationHistory.module.scss'

export type FlagContextType = {
  updata: boolean;
  setUpdata: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UpdateContext = createContext<FlagContextType>({
  updata: false,
  setUpdata: () => {},
});;

export default function MedicationHistory() {

const router = useRouter();
const name = router.query.name;

  return (
    <>
        <div className={styles.container}>
          <Sidebar/>
          <MedicationHistoryInput name={name}/>
          <MedicationHistoryList name={name}/>
        </div>   
    </>
  )
}
