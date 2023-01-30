import React, { FC, createContext } from 'react'
import { useState} from 'react'
import MedicationHistoryInput from '../../components/medicationhistory/MedicationHistoryInput'
import MedicationHistoryList from '../../components/medicationhistory/MedicationHistoryList'
import Sidebar from '../../components/sidebar/Sidebar'
import Heder from '../../components/heder/Heder'

export type FlagContextType = {
  updata: boolean;
  setUpdata: React.Dispatch<React.SetStateAction<boolean>>;
}
export const UpdateContext = createContext<FlagContextType>({
  updata: false,
  setUpdata: () => {},
});;


export default function MedicationHistory() {
  const [diseasename, setDiseaseName ]= useState("")
  const [medicine, setMediCine] = useState("")
  const [list, setList] = useState([])
  const [updata,setUpdata]=useState<boolean>(false)
//   const value = {
//     update,
//     setUpdata 
// }

  return (
    <>
    <UpdateContext.Provider value={{updata,setUpdata}}>
      <Heder/>
      <Sidebar/>
      <MedicationHistoryInput />
      <MedicationHistoryList/>
    </UpdateContext.Provider>
    </>
  )
}
