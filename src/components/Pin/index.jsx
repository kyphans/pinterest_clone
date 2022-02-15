import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pin.module.scss'

index.propTypes = {

};

function index(props) {

    const { urls } = props
    const { alt_description } = props

    return (
        <div className={styles.Wrapper}>
            <div className={styles.Container}>
                <img src={urls.regular} alt={alt_description} />
            </div>
        </div>
    );
}

export default index;