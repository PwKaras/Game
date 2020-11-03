import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './SideDrawer.css';

const SideDrawer = (props) => {

    const content = useRef();
        
       return (
        <CSSTransition
        in={props.show}
        nodeRef={content}
        timeout={200}
        classNames="slide-in-right"
        mountOnEnter
        unmountOnExit
    >
        <aside
        ref={content}
            className={"side-drawer"
            }
        >
            {props.children}
        </aside>
    </CSSTransition>

    );
};

export default SideDrawer;