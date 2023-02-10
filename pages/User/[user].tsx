import { useRouter } from "next/router";
import Sidebar from "../../components/sidebar/Sidebar";
import { createContext, useContext, useState } from "react";


const User = () => {
  const router = useRouter();
  const user = router.query.name
  const [name,setName] = useState<string>()

  console.log(typeof(name))
  console.log(name+"aa")
  return (
    <div>
      <h1>{user}のPageです</h1>

          <Sidebar />
    </div>
  );
};

export default User;