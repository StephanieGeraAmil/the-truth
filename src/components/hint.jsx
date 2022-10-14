import React,{useEffect} from 'react'

export const Hint = ({hint}) => {

  useEffect(() => {
   console.log(hint)
  }, []);
  return (
    <p>{hint.name}</p>
  )
}
