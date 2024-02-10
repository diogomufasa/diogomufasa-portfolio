import React from 'react';
import {styles} from './constants';

const Subheader = ({ title, icon } : { title: string, icon: any}) => {
    return (
        <div className={styles
    .wrapper}>
            <h1>{ title }</h1>
            <div className={styles
            .icon}>{ icon }</div>
        </div>
    )
}

export default Subheader;