import { React } from "react";

// It's a good practice to keep the component name the same as the file name

const Footer = () => {
    return (
        <>
        <h4>Connect with me</h4>
        <div className='footer'>
            <div className="link"><a href='https://www.github.com/orbitze' target='blank'>GitHub</a></div>
            <div className="link"><a href='https://www.linkedin.com/in/meghaverma6' target='blank'>LinkedIn</a></div>
            <div className="link"><a href='https://codepen.io/orbitze' target='blank'>CodePen</a></div>
        </div>
        </>
    );
}

export default Footer;