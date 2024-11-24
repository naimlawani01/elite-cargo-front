import React from 'react';

const HeaderLogo = ( { logoColor } ) => {
    return (
        <a className="logo logo-primary transform-scale-h" title="Logo" href={ process.env.PUBLIC_URL + '/' }>
            <img width="60"
                 className={ 'logo-primary-' + ( logoColor === 'light' ? 'light' : 'dark' ) }
                 src={ 'assets/img/logo/' + ( logoColor === 'light' ? 'elite' : 'elite' ) + ".png" } alt="Logo"
            />
        </a>
    );
};

export default HeaderLogo;
