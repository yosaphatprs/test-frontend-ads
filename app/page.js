import Link from 'next/link'
import ContentComponent from '@/components/home/ContentComponent';

export default async function Home() {

  // Consume API menggunakan fetch setiap 10 detik
  const res = await fetch('https://testcasefe2023.ignorelist.com/api/v1/data', {
    next: { revalidate: 10 },
    headers: {
      "nim": "2141720031",
    }
  });
  const books = await res.json();

  return (
    <main>
      <div className='container mx-auto max-w-screen-xl'>
        <div className='header mb-5'>
          <h1 className='md:text-4xl sm:text-2xl font-medium mb-5 border-b-2 pb-2'>Daftar Buku</h1>
          <h4 className='mb-2'>Jumlah buku tersedia: {books.data.length}</h4>
          <Link href='/add'><button className='p-2 px-5 rounded-md text-sm text-white bg-sky-500 hover:bg-sky-700'>+ Tambah Buku</button></Link>
        </div>
        <ContentComponent books={books} />
      </div>
    </main>
  )
}
