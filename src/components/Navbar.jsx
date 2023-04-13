import React from 'react';
import './Navbar.css';



const Navbar = () => {
    return (
        <section className='menuSection' >
            <div className='menuSection__navBar'>
                <ul className='menu__ul'>
                    <li className='logo'>GAMC</li>
                    <li className='munu__li'>Home</li>
                    <li className='munu__li'>About</li>
                    <li className='munu__li'>Projects</li>
                    <li className='munu__li'>Boutique</li>
                    <li className='munu__li'>Investments</li>
                    <li className='lettersSection'>Resourses</li>
                    <li className='munu__li'>Reading list</li>
                    <li className='munu__li'>Aesthetic goods</li>
                    <li className='munu__li'>Talent</li>
                    <li className='munu__li'>Newsletters</li>
                    <li className='munu__li'>Podcast</li>
                    <li className='lettersSection'>Stay in touch</li>
                    <li className='munu__li'>Contact</li>
                    <li className='munu__li'>Twiter</li>
                </ul>
                <div className='buttonsSection'>
                    <div className='buttonSelected'>
                        Ligth
                    </div>
                    <div className='buttonSelected'>
                        Dark
                    </div>
                    <div className='buttonSelected'>
                        Auto
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar;