import './menu.css';
const Menu = ({ openMenu, setOpenMenu }) => {
    const handleClick = () => {
        setOpenMenu(!openMenu);
        const element = document.getElementById("menu");
        if (openMenu === true) {
            element.classList.add("active");
        }
        else {
            element.classList.remove("active");
        }
    }
    return (

        < div className='m' id='menu' >
            <ul>
                <li onClick={handleClick}><a href="#intro">Home</a></li>
                <li onClick={handleClick} > <a href="#about">About Me</a></li>
                <li onClick={handleClick}><a href="#projects">Projects</a></li>
                <li onClick={handleClick}><a href="#contact">Contact</a></li>
            </ul>
        </div >
    );
}

export default Menu;