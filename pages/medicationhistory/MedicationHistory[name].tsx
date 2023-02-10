import React, { FC, createContext } from 'react'
import { useState} from 'react'
import MedicationHistoryInput from '../../components/medicationhistory/MedicationHistoryInput'
import MedicationHistoryList from '../../components/medicationhistory/MedicationHistoryList'
import Sidebar from '../../components/sidebar/Sidebar'
import { useRouter } from 'next/router'

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

const router = useRouter();
const name = router.query.name;


  return (
    <>
    <UpdateContext.Provider value={{updata,setUpdata}}>
      <div style={{"marginTop":"-20px","marginBottom":"-20px"}}>
        <div style={{"marginTop":"20px"}}>
          <Sidebar/>
        </div>
      <MedicationHistoryInput name={name}/>
      <MedicationHistoryList name={name}/>
      </div>
    </UpdateContext.Provider>
    </>
  )
}
