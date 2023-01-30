import styles from './MedicationHistory.module.scss'
import { useState } from 'react';
import { useAddMedicalList } from './useAddmedicalList';
import { UpdateContext } from '../../pages/medicationhistory/MedicationHistory';
import React, { useContext, useEffect  } from 'react'

export default function MedicationHistoryList() {
    const {medicalList,fetch} = useAddMedicalList();
    const {updata, setUpdata}= useContext(UpdateContext)
useEffect(() => {
  fetch()
},[updata])

  return (
    <>
    <div className={styles.HistoryList}>
        <h3>◆薬歴リスト◆</h3>
          
            {Object.values(medicalList).map((list:any,index) => (
                <div key={index} className={styles.list} >
                  <div className={styles.disease} >{list.diseasename}</div>
                  <div className={styles.disease}>{list.medicine}</div>
                </div>
            ))}
    </div>
    </>
  )
}
