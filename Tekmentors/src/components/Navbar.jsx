import React from 'react';
import styles from "./Navbar.module.css"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleProblem1 = () =>{
        navigate("/")
    }
    
    const handleProblem2 = () =>{
        navigate("/problem2")
    }

  return (
    <div className={styles.navbar}>
       <div onClick={handleProblem1} className={styles.navLeft}> <h3>Problem 1</h3></div>
       <div onClick={handleProblem2} className={styles.navRight}> <h3>Problem 2</h3></div> 
    </div>
  )
}

export default Navbar