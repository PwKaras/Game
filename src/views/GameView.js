import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';

const GameView = () => {

    const [animationType, setAnimationType] = useState("jump");

    useEffect(
        () => {
            const id = setTimeout(
                () => {
                   const animationTypeArr = ["jump","rightEnter","leftEnter","square",]
                   const randomIndex = Math.floor(Math.random()*4)
                    setAnimationType(animationTypeArr[randomIndex]
                    )
                }, 3000
            )
        }, [animationType]
    )
    console.log(animationType);
    return (
        <>
            <Header />
            <div className="App">
                <header className="App-header">
                    <h2>
                        Game will be here
        </h2>
                    <Button
                    animation={`button-animation__${animationType}`}>CATCH ME</Button>
                </header>

            </div>
        </>
    );
}

export default GameView;