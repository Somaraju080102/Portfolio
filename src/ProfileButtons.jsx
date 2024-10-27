import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

export function ProfileButtons(){
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "./Naga Venkata Somaraju Indukuri_Resume.pdf"; 
        link.setAttribute("download", "SomarajuIndukuri-Resume.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

      const handleContact=()=>{
        const link=document.createElement("a");
        link.href="mailto:somarajuindukuri080102@gmail.com";
        link.setAttribute("target","_blank");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    
    return(
        <div className=' mt-4 d-flex justify-content-center align-items-center'>
                <Stack direction="row" spacing={2}>
      <Button  sx={{
        color:'black',
        backgroundColor:'white',
        border: '2px solid #1976d2',  // Custom border color
        borderRadius: '8px',          // Rounded corners
        '&:hover': {                  // Border on hover
          border: '2px solid #004ba0',
        },
      }}variant="outlined" startIcon={<ConnectWithoutContactIcon/>} onClick={handleContact}  >
        Get In Touch 
      </Button>
      <Button  sx={{
        color:'white',
        backgroundColor:'#161513',  // Custom background color
        border: '2px solid #1976d2',  // Custom border color
        borderRadius: '8px',          // Rounded corners
        '&:hover': {                  // Border on hover
          border: '2px solid #004ba0',
        },
      }} variant="contained" endIcon={<DownloadIcon/>} onClick={handleDownload} >
        Download CV
      </Button>
    </Stack>
        </div>
    )
}