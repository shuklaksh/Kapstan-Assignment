import { Box } from "@mui/material"
import Sidebar from "../components/sidebar/Sidebar"
import Navbar from "../components/navbar/Navbar"


function Dashboard() {
  return (
    <Box sx={{display: "flex"}} >
      <Box>
        <Sidebar />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Navbar /> 
      </Box>
    </Box>
  )
}

export default Dashboard
