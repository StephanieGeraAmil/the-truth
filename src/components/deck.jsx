import React, { useState, useEffect } from "react";

export const Deck = ({name}) => {
   useEffect(() => {
   console.log(name);
  }, []);

  return (
    <div className='deck'>
      <p>{name}</p>
    <div className="card">
        <p>
            Aqui va el versiculo que la persona tanto quiere recordar, para que lo recuerde y memorize.
            Para que lo lea una y otra vez hasta que le quede en la cabeza y pueda recordarlo cada vez que lo necesite en su batalla espiritual.
        </p>
    </div>
    </div>
  )
}
