import React from 'react';
import PropTypes from 'prop-types';

const CustumersActions = ({children}) => {
    return (
        <div>
            <div className='customers-actions'>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

CustumersActions.propTypes = {
    children:PropTypes.node.isRequired
};

export default CustumersActions;