import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ children }) => {
    return (
        <div style={{ position: 'relative', bottom: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', backgroundColor: 'red', height: '2rem' }}>
            footer
            {children}
        </div>
    )
}

Footer.propTypes = {
    children: PropTypes.element,
};

export default Footer
