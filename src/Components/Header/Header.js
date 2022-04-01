import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const header = () => {
    return (
        <div>
            <h1>Hello</h1>
            <nav style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)'}} >
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='friends'>Friends</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </nav>    
        </div>
    );
};

export default header;