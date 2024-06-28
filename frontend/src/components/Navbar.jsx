import React from 'react'
import { Camera } from 'lucide-react';

const Navbar = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
          Hello world!
      </h1>
      <Camera color="red" size={48} />;
    </div>
  )
}

export default Navbar
