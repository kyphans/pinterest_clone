import React from 'react';
import PropTypes from 'prop-types';
import styles from './Mainboard.module.scss'
import Pin from '../Pin';

Mainboard.propTypes = {

};

function Mainboard(props) {

    const { pins } = props
    console.log('pins from mainboard:', pins)
    return (
        <div className={styles.Wrapper}>
            <div className={styles.Container}>
                {pins.map((pin, index) => {
                    let { urls } = pin
                    let { alt_description } = pin
                    return <Pin
                        key={index}
                        urls={urls}
                        alt_description={alt_description}
                    />
                })}

            </div>
        </div>
    );
}

export default Mainboard;