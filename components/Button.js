import React from 'react'
import Link from 'next/link'

const Button = ({ route, text, type, styles }) => {
    return (
        <>
            <Link href={route}><button className={`p-2 w-20 rounded-md text-sm text-white ${styles}` + (type == 'success' ? ' bg-green-500 hover:bg-green-700' : ' bg-red-500 hover:bg-red-700')}>{text}</button></Link>
        </>
    )
}

export default Button