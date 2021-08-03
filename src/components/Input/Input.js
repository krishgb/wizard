import React, { useState } from 'react'

const Input = props => {
    const [inp, setInp] = useState(props.value)
    const { setValue } = props

    const inputHandler = (event) => {
        const [state, value] = [event.target.name, event.target.value.trim()]
        setInp(value)
        setValue(state, value)
    }
    return (
        <>
            <label htmlFor={props.name}>
                <span>{props.label}</span>

                <input
                    autoComplete="off"
                    id={props.name}
                    name={props.name}
                    placeholder={props.placeholder}
                    required={props?.required === false ? false : true}
                    type={props?.type || "text"}
                    minLength={props?.minLength || "0"}
                    maxLength={props?.maxLength || "150"}
                    min={props?.min || "0"}
                    max={props?.max || "10000000000000"}
                    onChange={inputHandler}
                    list={props?.id}
                    value={inp}
                    autoCapitalize={props?.capitalize ? inp : undefined}
                />

            </label>
            <br />

            {
                props.id &&
                <datalist id={props.id}>
                    {props.list.map(li => <option value={li}>{li}</option>)}
                </datalist>
            }

        </>
    )
}

export default Input