import { Box } from "@mui/material"
import Sidebar from "../components/sidebar/Sidebar"


function Dashboard() {
  return (
    <Box sx={{display: "flex", backgroundColor: "#37146B"}} >
      <Box>
        <Sidebar />
      </Box>
      <Box>
        {/* <Navbar />  */}
      </Box>
    </Box>
  )
}

export default Dashboard
