import React from 'react'

export const Footer = () => {

  let footerStyle ={
    position: "relative",
    top: "30vh",
    width:"100%"
  }
  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center my-3">
        Copyright &copy; MyToDoList.com
      </p>

    </footer>
  )
}
