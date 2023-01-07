import React from 'react'
import { useState} from 'react'
import MedicationHistoryInput from '../../components/medicationhistory/MedicationHistoryInput'
import MedicationHistoryList from '../../components/medicationhistory/MedicationHistoryList'
import Sidebar from '../../components/sidebar/Sidebar'
import Heder from '../../components/heder/Heder'

export default function MedicationHistory() {
  const [diseasename, setDiseaseName ]= useState("")
  const [medicine, setMediCine] = useState("")

  return (
    <>
      <Heder/>
      <Sidebar/>
      <MedicationHistoryInput/>
      <MedicationHistoryList/>
    </>
  )
}
