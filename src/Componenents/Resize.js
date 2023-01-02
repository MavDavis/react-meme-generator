import React, { useEffect, useState } from "react";
export default function Resize() {
  const [size, setSize] = useState(window.innerWidth);

  const toggleSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", toggleSize);
    return (() => {
      window.removeEventListener("resize", toggleSize());
    })
  }, []);
  return (
    <>
      <p>windows inner-width: {size}</p>
    </>
  );
}
