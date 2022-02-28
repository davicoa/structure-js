import React from 'react';
import PropTypes from 'prop-types';

const ScreenContainer = ({ children, props }) => {
    return (
        <div style={{ minHeight: '100%', minWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {children}
        </div>
    )
}
ScreenContainer.propTypes = {
    children: PropTypes.element,
};
export default ScreenContainer
