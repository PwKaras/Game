import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css'

const Button = props => {


    return (
        <Link
            to={props.to}
            exact={props.exact}
            className={
                `button
                ${props.flash}
                {/*CSS way to flash button animation {props.flash && 'button-animation__flashContinuous'} */} 
                button--${props.size || 'default'} 
                ${props.inverse && `button-inverse`} 
                ${props.danger && 'button-danger'}
                `}
        >
            {props.children}
        </Link>
    );
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

// ${setInterval(() => {
                //     if ('button') {
                //         return 'button--inverse'
                //     } else { return'button' }
                // }, 1000)}



// const Button = props => {
//     if (props.href) {
//         return (
//             <a className={`button button--${props.size || 'default'} ${props.inverse && `button--inverse`} ${props.danger && 'button--danger'}`}
//                 href={props.href}
//             >
//                 {props.children}
//             </a>
//         );
//     }
//     if (props.to) {
//         return (
//             <Link
//                 to={props.to}
//                 exact={props.exact}
//                 className={`button button--${props.size || 'default'} ${props.inverse && `button--inverse`} ${props.danger && 'button--danger'}`}
//             >
//                 {props.children}
//             </Link>
//         );
//     }
//     return (
//         <button
//             className={`button button--${props.size || 'default'} ${props.inverse && `button--inverse`} ${props.danger && 'button--danger'}`}
//             type={props.type}
//             onClick={props.onClick}
//             disabled={props.disabled}
//         >
//             {props.children}
//         </button>
//     );
// };

// export default Button;