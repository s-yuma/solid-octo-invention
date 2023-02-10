import { useEffect } from "react";
import { useAddReserveList } from "./useAddReserveList"

export default function Reserve() {
    const {reserveList,fetch} = useAddReserveList();

    useEffect(() => {
        fetch()
      },[])
    return (
      <>
      <h2>予約日時
      </h2>
        <div>
        {Object.values(reserveList).map((list:any,index) => (
                <div key={index}  >
                    <div>{list.start}</div>
                </div>
            ))}
        </div>
      </>
    )
}