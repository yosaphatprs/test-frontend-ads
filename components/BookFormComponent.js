'use client'
import React from 'react'
import InputText from './InputText'
import TextArea from './TextArea'

const BookFormComponent = ({ formTitle, onSubmit, btnText, isLoading, books }) => {
    // console.log(books)
    return (
        <div className='container p-5 border-gray-800 shadow-md mx-auto my-auto max-w-screen-xl'>
            <div className='header mb-5'>
                <h1 className='md:text-3xl sm:text-xl font-medium mb-5 pb-2'>{formTitle}</h1>
            </div>
            <div className='contentForm'>
                <form className='flex flex-col' onSubmit={onSubmit}>
                    <div className="relative h-10 mb-4 w-full min-w-[200px]">
                        <InputText required placeholder="Tuliskan Judul Buku" value={books.data.title} name='title' label='Judul' />
                    </div>
                    <div className="relative h-32 mb-4 w-full min-w-[200px]">
                        <TextArea required placeholder="Tuliskan Deskripsi Buku" value={books.data.description} name='description' label='Deskripsi' />
                    </div>
                    <div className="relative h-10 mb-4 w-full min-w-[200px]">
                        <InputText required placeholder="Tuliskan Harga Buku" value={books.data.price} name='price' label='Harga' />
                    </div>
                    <div className="relative h-10 w-full min-w-[200px]">
                        <InputText required placeholder="Tuliskan Penulis Buku" value={books.data.author} name='author' label='Penulis' />
                    </div>
                    {
                        isLoading ? (
                            <Image className='animate-spin mx-auto mt-5'
                                alt='chevronLeftIcon'
                                src={spinnerIcon}
                            />
                        ) : (
                            <button type='submit' className='bg-sky-700 text-white p-2 rounded-md mt-4'>{btnText}</button>
                        )
                    }
                </form>
            </div>
        </div>
    )
}

export default BookFormComponent