import './menu.css';
const Menu = ({ openMenu, setOpenMenu }) => {
    const handleClick = () => {
        setOpenMenu(!openMenu);
        const element = document.getElementById("menu");
        if (openMenu === false) {
            element.classList.remove("active");
        }
        // else {
        //     element.classList.add("active");
        // }
    }
    return (

        < div className='m' id='menu' >
            <div className="m-top"></div>
            <div className="m-data">
                <ul>
                    <li onClick={handleClick}><a href="#intro">Home</a></li>
                    <li onClick={handleClick} > <a href="#about">About Me</a></li>
                    <li onClick={handleClick}><a href="#projects">Projects</a></li>
                    <li onClick={handleClick}><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div >
    );
}

export default Menu;