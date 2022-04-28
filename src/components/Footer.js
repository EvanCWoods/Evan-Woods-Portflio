import React from "react"; 
import "../styles/footer.css";

function Footer() { 
    return ( 
    <div className="footer-container"> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" /> 
        <div className="footer-left"> 
            <p>Develped by Evan Woods</p> 
        </div> 
        <div className="footer-mid"> 
            <p>Copyright &copy; 2022 EW</p> 
        </div> 
        <div className="footer-right"> 
            <i class="fa-brands fa-github"></i> 
            <i class="fa-brands fa-linkedin-in"></i> 
        </div> 
    </div> 
    ) 
} 
    
export default Footer;