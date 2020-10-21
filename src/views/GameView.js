import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';

const GameView = () => {

    const [animationType, setAnimationType] = useState("jump");
    const [counter, setCounter] = useState(0);

    // randorm changing button`s annimation type
    useEffect(
        () => {
            const id = setTimeout(
                () => {
                    const animationTypeArr = ["jump", "rightEnter", "leftEnter", "square"];
                    const randomIndex = Math.floor(Math.random() * 4);
                    let newAnimationType = animationTypeArr[randomIndex];

                    // avoiding repeated random values
                    if (animationType === newAnimationType) {
                        animationType === "jump" ?
                            setAnimationType("rightEnter") :
                            setAnimationType(animationTypeArr[randomIndex - 1])
                    } else {
                        setAnimationType(newAnimationType)
                    };
                }, 3000
            );
            // clean up effect
            return () => {
                clearTimeout(id);
            };
        }, [animationType]
    );

    const scoreHandler = () => {
        setCounter(counter + 1);
    };

    return (
        <>
            <Header />
            <div className="App">
                <header className="App-header">
                    <h2>
                        My score {counter}
        </h2>
                    <Button
                        onClick={scoreHandler}
                        animation={`button-animation__${animationType}`}>CATCH ME</Button>
                </header>

            </div>
        </>
    );
}

export default GameView;