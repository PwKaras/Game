import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css'

const Button = props => {


    if(props.to) 
    return (
        <Link
            to={props.to}
            exact={props.exact}
            className={
                `button
                ${props.flash}
                {/*CSS way to flash button animation {props.flash && 'button-animation__flashContinuous'} */} 
                button--${props.size || 'default'} 
                `}
        >
            {props.children}
        </Link>
    );
    return (
        <button
        className={`
        button 
        ${props.drawer && 'button-drawer'}
        ${props.animation && "button-animation" && props.animation}
        `}
        type={props.type}
        onClick={props.onClick}
        >
        {props.children}
        </button>
    )

}

export default Button;


    // const [counter, setCounter] = useState(true);
    // useEffect(
    //     () => {
    //         const id = setTimeout(() => {
    //             setCounter(!counter);
    //         }, 5000);
    //         return () => {
    //             clearTimeout(id);
    //         };
    //     },
    //     [counter],
    // );

// ${console.log(counter)}
// ${`if (counter === true) {return 'button--flash'}`}
                // ${a}
                // ${setInterval(()=>{
                //     if(a ==='button--flash'){
                //         return a ='';
                //     } else {return a='button-flash'}
                // },1000)}
                // ${a}
