import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';

const WelcomeView = () => {

    //not CSS way to flash button - active and disable props.flash
    const [isFlash, setIsFlash] = useState(true);
    // useEffect(
    //     () => {
    //         const id = setTimeout(() => {
    //             setIsFlash(!isFlash);
    //         }, 1000);
    //         return () => {
    //             clearTimeout(id);
    //         };
    //     },
    //     [isFlash],
    // );
    useEffect(
        () => {
            const id = setTimeout(() => {
                if(isFlash === true) {
                    setIsFlash(false);
                } else {
                    setIsFlash(true);
                }
            }, 1000);
            return () => {
                clearTimeout(id);
            };
        },
        [isFlash],
    );

    return (
        <>
            <Header />
            <div className="App">
                <header className="App-header">
                    <h2 className="App-header__title__animation__jump">ARE YOU FAST?</h2>
                    <h2 className="App-header__title__animation__rightEnter">REALLY FAST?</h2>
                    <h2 className="App-header__title__animation__leftEnter">TRY TO CATCH ME?</h2>
                    <Button to={`/game`}
                    // CSS way to flash button animation
                    // flash={`button-animation__flashContinuous`}
                    flash={`${isFlash === true ? 'button-flash': 'button'}`}
                    >START GAME</Button>
                </header>
            </div>
        </>
    );
}

export default WelcomeView;