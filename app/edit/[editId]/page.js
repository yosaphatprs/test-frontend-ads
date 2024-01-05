'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import BookFormComponent from '@/components/BookFormComponent'
import spinnerIcon from '../../../public/images/spinnerIcon.svg'

const EditBuku = ({ params, searchParams }) => {
    const [isLoading, setLoading] = useState(true);
    const [books, setBooks] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://testcasefe2023.ignorelist.com/api/v1/data/' + params.editId, {
                    headers: {
                        "nim": "2141720031",
                    }
                });
                const data = await response.json();
                setBooks(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [params.editId])

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
        }
        const response = await fetch('https://testcasefe2023.ignorelist.com/api/v1/data/' + params.editId, {
            headers: {
                "nim": "2141720031",
            },
            method: 'PUT',
            body: formData,
        }).then((response) => response.json()).then((data) => { console.log(data); setBooks(data); setLoading(false); }).catch((error) => { console.log(error); setLoading(false); });
    }

    return (
        <div className='h-screen flex'>
            {
                isLoading ? (
                    <Image className='animate-spin mx-auto mt-5'
                        alt='chevronLeftIcon'
                        src={spinnerIcon}
                    />
                ) : (
                    <BookFormComponent formTitle='Form Edit Buku' books={books} onSubmit={onSubmit} btnText='Edit' isLoading={isLoading} />
                )
            }

        </div>
    )
}

export default EditBuku