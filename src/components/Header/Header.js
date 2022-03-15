import {HeaderBtn} from "./HeaderBtn";
import "./Header.scss"

export const Header = ( { currentPage }) => {
    const buttons = [
        {value: 'Home', id: 0},
        {value: 'Toys', id: 1},
        {value: 'Tree', id: 2}
    ]

    return (
        <header className={`header ${currentPage[0] === 'Home' ? 'home-header' : ''}`}>
            <nav className={'nav-container'}>
                <ul className={'nav-list'}>
                    {buttons.map((item) => (<HeaderBtn currentPage={currentPage} value={item.value} key={item.id}/>))}
                </ul>
            </nav>
        </header>
    )
}
