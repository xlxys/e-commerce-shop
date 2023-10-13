import "./Footer.css"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export default function Footer() {

  return (
    <div className="footer">
      <div className="socials">
        <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a>
        <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://www.twitter.com/"><i className="fa-brands fa-twitter"></i></a>
        <a href="https://www.youtube.com/"><i className="fa-brands fa-youtube"></i></a>
        <a href="https://www.github.com/"><i className="fa-brands fa-github"></i></a>
      </div>


      <div className="footer-newsletter">
        <p>Our Newsletter :</p>
        <TextField sx={{ input: { color: '#fff' } }} id="outlined-basic" label="Email" variant="outlined" />
        <Button 
          variant="outlined" 
          sx={{ color: '#fff', borderColor: '#fff' }}
        >
        Subscribe
        </Button>
      </div>


      <div className="footer-bottom">
        <p>© 2023 All rights reserved xlyxs</p>
      </div>
    </div>
  );
}

