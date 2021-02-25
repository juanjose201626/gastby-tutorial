import React from "react"
import {Link} from "gatsby";

export default function Home() {
  return (
    <div style={{color:'green'}}>
      <Link to="/about">About</Link>
      <h1>Hello world!</h1>
      <img src="https://source.unsplash.com/random/400x200" />
    </div>
  );
}
