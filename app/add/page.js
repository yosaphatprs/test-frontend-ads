'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import spinnerIcon from '../../public/images/spinnerIcon.svg'

const AddBooks = () => {
    const [isLoading, setLoading] = useState(false);

    async function onSubmit(event) {
        event.preventDefault()
        setLoading(true)
        const formData = new FormData();
        formData.append("title", event.target.title.value);
        formData.append("description", event.target.description.value);
        formData.append("price", parseInt(event.target.price.value));
        formData.append("author", event.target.author.value);
        if (!Number.isInteger(parseInt(formData.get('price')))) {
            alert("Harga harus berupa angka")
            // console.log("Bukan Integer");
        }
        const response = await fetch('https://testcasefe2023.ignorelist.com/api/v1/data', {
            headers: {
                "nim": "2141720031",
            },
            method: 'POST',
            body: formData,
        }).then((response) => { response.json() }).then((data) => { console.log(data); setLoading(false); }).catch((error) => { console.log(error); setLoading(false); });
    }

    const closeAlert = () => {
        isOpen = false;
    }

    return (
        <div className='h-screen flex'>
            <div className='container p-5 border-gray-800 shadow-md mx-auto my-auto max-w-screen-xl'>
                <div className='header mb-5'>
                    <h1 className='md:text-3xl sm:text-xl font-medium mb-5 pb-2'>Form Tambah Buku</h1>
                </div>
                <div className='contentForm'>
                    <form className='flex flex-col' onSubmit={onSubmit}>
                        <div className="relative h-10 mb-4 w-full min-w-[200px]">
                            <input required placeholder="Tuliskan Judul Buku" name="title"
                                className="peer h-full w-full rounded-[7px] border border-gray-200 border-t-transparent bg-transparent px-3 py-4 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-sky-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                            <label
                                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-sky-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-sky-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-sky-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-sky-500">
                                Judul
                            </label>
                        </div>
                        <div className="relative h-32 mb-4 w-full min-w-[200px]">
                            <textarea required placeholder="Tuliskan Deskripsi Buku" name='description'
                                className="peer h-full w-full rounded-[7px] border border-gray-200 border-t-transparent bg-transparent px-3 py-4 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-sky-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                            <label
                                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-sky-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-sky-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-sky-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-sky-500">
                                Deskripsi
                            </label>
                        </div>
                        <div className="relative h-10 mb-4 w-full min-w-[200px]">
                            <input required placeholder="Tuliskan Harga Buku" name='price'
                                className="peer h-full w-full rounded-[7px] border border-gray-200 border-t-transparent bg-transparent px-3 py-4 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-sky-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                            <label
                                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-sky-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-sky-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-sky-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-sky-500">
                                Harga
                            </label>
                        </div>
                        <div className="relative h-10 w-full min-w-[200px]">
                            <input required placeholder="Tuliskan Penulis Buku" name='author'
                                className="peer h-full w-full rounded-[7px] border border-gray-200 border-t-transparent bg-transparent px-3 py-4 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-sky-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                            <label
                                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-sky-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-sky-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-sky-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-sky-500">
                                Penulis
                            </label>
                        </div>
                        {
                            isLoading ? (
                                <Image className='animate-spin mx-auto mt-5'
                                    alt='chevronLeftIcon'
                                    src={spinnerIcon}
                                />
                            ) : (
                                <button type='submit' className='bg-sky-700 text-white p-2 rounded-md mt-4'>Tambah</button>
                            )
                        }
                    </form>
                </div>
            </div>
        </div>

    )
}

export default AddBooks