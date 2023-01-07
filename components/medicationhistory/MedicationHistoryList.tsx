import React, { useEffect } from 'react'
import styles from './MedicationHistory.module.scss'
import { useState } from 'react';
import { useAddMedicalList } from './useAddmedicalList';
export default function MedicationHistoryList() {
    const {medicalList} = useAddMedicalList();

  return (
    <>
    <div className={styles.HistoryList}>
        <h3>◆薬歴リスト◆</h3>
          
            {Object.values(medicalList).map((list:any,index) => (
                <div key={index} className={styles.list} >

                  <div className={styles.disease} >{list.medicine}</div>
                  <div className={styles.disease}>{list.medicine}</div>
                </div>
            ))}
    </div>
    </>
  )
}
