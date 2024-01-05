'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import spinnerIcon from '../../public/images/spinnerIcon.svg'
import InputText from '@/components/InputText'
import TextArea from '@/components/TextArea'

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

    return (
        <div className='h-screen flex'>
            <div className='container p-5 border-gray-800 shadow-md mx-auto my-auto max-w-screen-xl'>
                <div className='header mb-5'>
                    <h1 className='md:text-3xl sm:text-xl font-medium mb-5 pb-2'>Form Tambah Buku</h1>
                </div>
                <div className='contentForm'>
                    <form className='flex flex-col' onSubmit={onSubmit}>
                        <div className="relative h-10 mb-4 w-full min-w-[200px]">
                            <InputText required placeholder="Tuliskan Judul Buku" name='title' label='Judul' />
                        </div>
                        <div className="relative h-32 mb-4 w-full min-w-[200px]">
                            <TextArea required placeholder="Tuliskan Deskripsi Buku" name='description' label='Deskripsi' />
                        </div>
                        <div className="relative h-10 mb-4 w-full min-w-[200px]">
                            <InputText required placeholder="Tuliskan Harga Buku" name='price' label='Harga' />
                        </div>
                        <div className="relative h-10 w-full min-w-[200px]">
                            <InputText required placeholder="Tuliskan Penulis Buku" name='author' label='Penulis' />
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