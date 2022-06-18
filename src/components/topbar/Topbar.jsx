import './topbar.css';
import Hamburger from '../../images/hamburger1.png'

const Topbar = ({ openMenu, setOpenMenu }) => {

    const handleClick = () => {
        setOpenMenu(!openMenu);
        // const element = document.getElementById("menu");
        // if (openMenu === true) {
        //     element.classList.add("active");
        // }
        // else {
        //     element.classList.remove("active");
        // }

    }

    return (
        <div className="tb" id='topbar' >
            <img src={Hamburger} alt="" className="tb-icon" onClick={handleClick} />
        </div>
    );
}

export default Topbar;