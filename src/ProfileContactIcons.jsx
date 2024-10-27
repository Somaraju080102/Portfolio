import EmailIcon from '@mui/icons-material/Email';
export function ProfileIcons(){

    function handleInstagram(){
        const link=document.createElement('a');
        link.href='https://www.instagram.com/soma._.raju/';
        link.setAttribute("target", "_blank");
        document.body.appendChild(link);
        link.click();

    }
    function handleLinkedin(){
        const link=document.createElement('a');
        link.href='https://www.linkedin.com/in/somaraju-indukuri-b5148a216/';
        link.setAttribute("target", "_blank");
        document.body.appendChild(link);
        link.click();

    }
    return(
        <div>
                   <i style={{color: 'white',margin:'1px', fontSize: '1.5rem'}} className="bi-envelope-fill d-flex justify-content-center align-items-center">somarajuindukuri080102@gmail.com</i>

            <div className='d-flex  justify-content-center align-items-center'>
            <i style={{color: 'white',marginRight:'4px', fontSize: '2rem'}} className="bi-instagram" onClick={handleInstagram}></i>
            <i style={{color: 'white',marginLeft:'4px', fontSize: '2rem'}} className="bi-linkedin" onClick={handleLinkedin}></i>
            

            </div>
            </div>
    )
}