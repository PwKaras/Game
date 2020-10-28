import React, { useCallback, useEffect, useState } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import Aside from '../components/Aside';

const GameView = () => {

    const [animationType, setAnimationType] = useState("jump");
    const [counter, setCounter] = useState(0);
    const [counterIsChange, setCoutnerIsChange] = useState(false);
    const [level, setLevel] = useState(1)
    const [timeoutTime, setTimeoutTime] = useState(3000)


    // score counter, shortage time to generate next button on achieve fixed number of points, level indicator
    const scoreHandler = () => {
        setCounter(counter + 1);
        setCoutnerIsChange(true);
        if (counter === 10) {
            setLevel(2);
            setTimeoutTime(2000);
        };
        if (counter === 20) {
            setLevel(3);
            setTimeoutTime(1000);
        };
    };

    // generate different button type in indicate (timeoutTime) time period 
    const buttonGenerator = useEffect(
        () => {
            const id = setTimeout(
                () => {
                    const animationTypeArr = ["jump", "rightEnter", "leftEnter", "square"];
                    const randomIndex = Math.floor(Math.random() * 4);
                    let newAnimationType = animationTypeArr[randomIndex];

                    if (counterIsChange === true) {
                        setTimeoutTime(1);
                        setCoutnerIsChange(false);
                        console.log("clear");
                    };
                    if (counterIsChange === false) {
                        setTimeoutTime(timeoutTime);
                        // avoiding repeated random values
                        if (animationType === newAnimationType) {
                            animationType === "jump" ?
                                setAnimationType("rightEnter") :
                                setAnimationType(animationTypeArr[randomIndex - 1]);
                        } else {
                            setAnimationType(newAnimationType)
                        };

                    }
                }, timeoutTime
            );
            if (counterIsChange === true) {
                console.log("au")
            }
            // clean up effect
            return () => {
                clearTimeout(id);
            };
        }, [animationType, timeoutTime]
    );



    return (
        <>
            <Header />
            <div className="App">
                <main className="App-main">
                    <div className="App-main-section__shared-view">
                        <div className="App-main-section">

                            <h2>
                                My score {counter}
                            </h2>
                            <div className="center">
                                <Button
                                    onClick={scoreHandler}
                                    animation={`button-animation__${animationType}`}>CATCH ME</Button>
                            </div>
                        </div>
                    </div>
                    <Aside
                        level={level} >
                        Level {level}
                    </Aside>
                </main>

            </div>
        </>
    );
}

export default GameView;