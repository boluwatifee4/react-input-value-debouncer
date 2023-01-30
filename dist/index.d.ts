import React, { ChangeEventHandler } from 'react';

type Props = {
    debounceTime?: any;
    className?: string;
    style?: React.CSSProperties;
    type?: string;
    value?: any;
    name?: string;
    id?: string;
    label?: string;
    error?: boolean;
    message?: string;
    success?: boolean;
    disabled?: boolean;
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
};
declare function DebouncerInput({ debounceTime, className, style, placeholder, type, value, onChange, name }: Props): JSX.Element;

export { DebouncerInput };
