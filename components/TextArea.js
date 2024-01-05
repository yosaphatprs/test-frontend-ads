import React, { useState, useEffect } from 'react'

const TextArea = ({ placeholder, name, label, value }) => {
    const [state, setState] = useState("");

    useEffect(() => {
        const changeValue = async () => {
            try {
                setState(value);
            } catch (error) {
                console.error(error);
            }
        };
        changeValue();
    }, [value])

    return (
        <>
            <textarea required value={value != "" ? state : ""} placeholder={placeholder} name={name} onChange={e => setState(e.target.value)}
                className="peer h-full w-full rounded-[7px] border border-gray-200 border-t-transparent bg-transparent px-3 py-4 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-sky-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
            <label
                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-sky-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-sky-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-sky-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-sky-500">
                {label}
            </label>
        </>
    )
}

export default TextArea