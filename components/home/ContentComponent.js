'use client'
import React from 'react'
import Image from 'next/image'
import searchIcon from "../../public/images/searchIcon.svg";
import gridIcon from "../../public/images/gridIcon.svg";
import printIcon from "../../public/images/printIcon.svg";
import sortIcon from "../../public/images/sortIcon.svg";
import uploadIcon from "../../public/images/uploadIcon.svg";
import chevronRightIcon from "../../public/images/chevronRightIcon.svg";
import chevronLeftIcon from "../../public/images/chevronLeftIcon.svg";
import Button from '@/components/Button';

const ContentComponent = (books) => {

    books = books.books;
    // console.log(books)
    let rowsPerPage = 5;
    let page = 1;

    // Menghitung jumlah index yang ditampilkan
    const countIndexOf = () => {
        let index = 0;
        if (books.data.length < rowsPerPage) {
            index = books.data.length;
        } else {
            index = rowsPerPage;
        }
        return index;
    }

    // Menghitung index awal yang ditampilkan
    const countIndexStart = () => {
        let index = 0;
        if (books.data.length <= rowsPerPage) {
            index = 1;
        } else {
            index = rowsPerPage + page - 1;
        }
        return index;
    }

    // Mengubah jumlah data yang ditampilkan
    const changeRowsPerPage = () => {
        let rowsPerPage = document.getElementById("rowsPerPage");
        rowsPerPage = rowsPerPage.options[rowsPerPage.selectedIndex].value;
        // console.log(rowsPerPage)
    }

    return (
        <div className='content'>
            <div className='rounded-sm border-2 shadow-md max-w-full p-5'>
                <div className='contentHeader flex justify-between px-5'>
                    <h5 className='text-xl font-medium'>Data Buku</h5>
                    <div className='inline'>
                        <Image className='inline mx-2'
                            alt='searchIcon'
                            src={searchIcon}
                        />
                        <Image className='inline mx-2'
                            alt='uploadIcon'
                            src={uploadIcon}
                        />
                        <Image className='inline mx-2'
                            alt='printIcon'
                            src={printIcon}
                        />
                        <Image className='inline mx-2'
                            alt='gridIcon'
                            src={gridIcon}
                        />
                        <Image className='inline mx-2'
                            alt='sortIcon'
                            src={sortIcon}
                        />
                    </div>
                </div>
                <div className='contentBody max-w-full'>
                    <table className="table w-full">
                        <thead className='h-32'>
                            <tr>
                                <th className='w-2/12 text-left'>Judul</th>
                                <th className='w-8/12 text-left'>Deskripsi</th>
                                <th className='w-1/12 text-left'>Harga</th>
                                <th className='w-1/12 text-left'>Penulis</th>
                                <th className='w-1/12 text-left'>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                books.data.length > 0 ? (
                                    books.data.map(book => <tr key={book.id} className='text-sm border-t-2 border-b-2 h-32'>
                                        <>
                                            <td className='pr-5'>{book.title}</td>
                                            <td className='pr-5'>{book.description}</td>
                                            <td className='pr-5 md:align-middle sm:align-text-top'>{book.price}</td>
                                            <td className='pr-5 md:align-middle sm:align-text-top'>{book.author}</td>
                                            <td className='flex flex-col h-32'>
                                                <div className='my-auto'>
                                                    <Button route={'edit/' + book.id} text="Ubah" type="success" styles="mb-2" />
                                                    <Button route={'delete/' + book.id} text="Hapus" type="danger" />
                                                </div>
                                            </td>
                                        </>
                                    </tr>)
                                ) : (
                                    <tr className='border-t-2 border-b-2 h-20'>
                                        <td colSpan={5} className='text-center text-gray-700'>
                                            Sorry, no matching records found
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className='contentFooter flex justify-end'>
                    <div className='flex flex-row h-12 justify-center items-center'>
                        <h1 className='mr-2'>Rows per page:</h1>
                        <select className='mr-4' id="rowsPerPage" name="rowsPerPage" onChange={changeRowsPerPage}>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="100">100</option>
                        </select>
                        <h1 className='mr-4'>{countIndexStart()}-{countIndexOf()} of {books.data.length}</h1>
                        <Image className='inline mx-2'
                            alt='chevronLeftIcon'
                            src={chevronLeftIcon}
                        />
                        <Image className='inline mx-2'
                            alt='chevronRightIcon'
                            src={chevronRightIcon}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentComponent