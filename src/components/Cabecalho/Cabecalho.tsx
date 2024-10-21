import Link from 'next/link'

export default function Cabecalho(){
    return (
        <header className="bg-gray-300 p-4 text-blue-600 font-bold">
            <nav>
                <ul className="flex items-center justify-around">
                    <li> <Link className='_-none' href="/">Home</Link> </li>
                    <li> <Link href="/jupiter">Teoria de Jupiter</Link> </li>
                    <li> <Link href="/lua">Teoria Terra e Lua</Link> </li>
                    <li> <Link href="/sol">Teoria do Sol</Link> </li>
                    <li> <Link href="/teoria">Modelo Pratico</Link> </li>
                </ul>
            </nav>
        </header>
    )
}