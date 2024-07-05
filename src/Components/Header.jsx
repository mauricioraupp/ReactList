export default function Header(){
    return(
        <header className="fixed w-full bg-green-900">
            <nav className="flex justify-start items-center w-full p-6 gap-6">
                <li className="text-white text-base font-medium list-none">Home</li>
                <li className="text-white text-base font-medium list-none">Contato</li>
                <li className="text-white text-base font-medium list-none">Sobre</li>
                <li className="text-white text-base font-medium list-none">Login</li>
            </nav>
        </header>
    )
}

