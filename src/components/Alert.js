import React from 'react'

export default function Alert(props) {
    const captilize= (word)=>{
        // const lower=word.toLowerCase()
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
  return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{captilize(props.alert.type)}</strong>:{props.alert.msg}
        </div>
  )
}
