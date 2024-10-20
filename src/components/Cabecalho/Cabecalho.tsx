import Link from 'next/link'

export default function Cabecalho(){
    return (
        <header>
            <nav>
                <ul>
                    <li> <Link href="#">Teoria de Jupiter</Link> </li>
                    <li> <Link href="#">Teoria Terra e Lua</Link> </li>
                    <li> <Link href="#">Teoria do Sol</Link> </li>
                    <li> <Link href="#">Modelo Pratico</Link> </li>
                </ul>
            </nav>
        </header>
    )
}