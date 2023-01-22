import React, {useState, useEffect, ChangeEventHandler} from "react";

type Props = {
    debounceTime?: any;
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

function DebouncerInput({ debounceTime, className, style, placeholder, type, value, onChange, name }: Props) {

    useEffect(()=>{
        useDebounce(value, debounceTime);
    },[value, debounceTime])



    return (
        <input
            className={className}
            style={style}
            placeholder={placeholder}
            type={type}
            value={value}
            name={name}
            onChange={onChange}
        />
    );
}

export default DebouncerInput;
