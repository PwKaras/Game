import React from 'react';
import './Aside.css';

const Aside = (props) => {
    return (
        <>
            <aside className="aside">
                <ul className={
                    `
                aside-list
                ${props.level && `aside-list__level_${props.level}`}
                `
                }>
                    <li>
                        {props.children}
                    </li>
                </ul>

            </aside>
        </>
    );
};

export default Aside;