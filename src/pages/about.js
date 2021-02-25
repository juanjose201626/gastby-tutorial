import React from "react"
import {Link} from "gatsby";
import Header from "../components/header"
export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Header headerText="Acerca de Gatsby" />
      <p>Such wow. Very React.</p>
    </div>
  )
}