import './menu.css';
const Menu = ({ openMenu, setOpenMenu }) => {
    const handleClick = () => {
        setOpenMenu(!openMenu);
        // const element = document.getElementById("menu");
        // if (openMenu === false) {
        //     element.classList.remove("active");
        // }
        // else {
        //     element.classList.add("active");
        // }
    }

    return (

        < div className={'m ' + (openMenu && "active")} id='menu' >
            <div className="m-top"></div>
            <div className="m-data">
                <ul>
                    <a href="#intro" className='m-link'><li onClick={handleClick} className='m-title'>Home</li></a>
                    <a href="#about" className='m-link'><li onClick={handleClick} className='m-title'>Who Am I</li></a>
                    <a href="#projects" className='m-link'><li onClick={handleClick} className='m-title'>Projects</li></a>
                    <a href="#contact" className='m-link'><li onClick={handleClick} className='m-title'>Get in Touch</li></a>
                </ul>
            </div>
        </div >
    );
}

export default Menu;