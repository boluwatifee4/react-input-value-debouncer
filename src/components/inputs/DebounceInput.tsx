import React, {useState, useEffect, ChangeEventHandler} from "react";

type Props = {
    delay?: any;
    className?: string;
    style?: React.CSSProperties;
    type?: string;
    value?: string;
    name?: string;
    id?: string,
    label?: string,
    error?:boolean,
    message?: string,
    success?:boolean,
    disabled?: boolean,
    placeholder?:string,
    onChange?: ChangeEventHandler<HTMLInputElement>

};

function useDebounce(value:any,delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(()=>{
        const timeHandler = setTimeout(()=>{
            setDebouncedValue(value)
        }, delay);

        return () =>{
            clearTimeout(timeHandler);
        };

    },[value, delay])

    return debouncedValue
}

// input component to debounce the input pass out the debounced value, pass out the delay, pass out className, pass out style, pass out the placeholder, pass out the type, pass out the value, pass out the onChange

function DebouncerInput({ delay, className, style, placeholder, type, value, onChange, name }: Props) {
    const [debouncedValue, setDebouncedValue] = useState(value)
    // use the useDebounce hook to get the debounced value
    // const debouncedValue = useDebounce(value, delay);
    // return the input element



    useEffect(()=>{
        useDebounce(value, delay);
    },[value, delay])



    return (
        <input
            className={className}
            style={style}
            placeholder={placeholder}
            type={type}
            value={debouncedValue}
            name={name}
            onChange={onChange}
        />
    );
}

export default DebouncerInput;
