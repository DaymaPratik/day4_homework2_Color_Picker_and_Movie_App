import './Header.css'

const Header = ({tittle}) => {
    return (
        <header>
            <h1 className='head'>{tittle}</h1>
        </header>
    );
}

export default Header;
