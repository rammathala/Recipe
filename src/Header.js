import React from 'react';
import './Header.css'
const Header = ({input,fun,search}) => {
    return (
        <div className='Header'>
            <form onSubmit={search} >
                <input required autoFocus placeholder='Search your food...' value={input} onChange={fun}></input>
                <button type='submit' >Search</button>
            </form>
        </div>
    );
};

export default Header;