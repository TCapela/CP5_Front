import Link from 'next/link'

export default function Cabecalho(){
    return (
        <header>
            <nav class="flex h-screen">
                <ul>
                    <li  > <Link href="/">Home</Link> </li>
                    <li> <Link href="/jupiter">Teoria de Jupiter</Link> </li>
                    <li> <Link href="/lua">Teoria Terra e Lua</Link> </li>
                    <li> <Link href="/sol">Teoria do Sol</Link> </li>
                    <li> <Link href="/teoria">Modelo Pratico</Link> </li>
                </ul>
            </nav>
        </header>
    )
}