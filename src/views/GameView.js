import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/actionTypes';
import Button from '../components/Button';
import Header from '../components/Header';
import Aside from '../components/Aside';

const GameView = (props) => {

    const [animationType, setAnimationType] = useState("jump");
    // hook way to make score counter and level
    // const [counter, setCounter] = useState(0);
    // const [level, setLevel] = useState(1);
    const [timeoutTime, setTimeoutTime] = useState(3000);

    // random change button`s animation type
    const buttonTypeGenerator = useCallback(() => {
        const animationTypeArr = ["jump", "rightEnter", "leftEnter", "square"];
        const randomIndex = Math.floor(Math.random() * 4);
        let newAnimationType = animationTypeArr[randomIndex];

        // avoiding repeated random values
        if (animationType === newAnimationType) {
            animationType === "jump" ?
                setAnimationType("rightEnter") :
                setAnimationType(animationTypeArr[randomIndex - 1]);
        } else {
            setAnimationType(newAnimationType)
        };
    }, [animationType]);

    // score counter, change time (shortage) to generate next button on achieve fixed number of points, level indicator
    const scoreHandler = () => {
        buttonTypeGenerator();
        // setCounter(counter + 1);
        props.onIncrementCounter()

        // change level when player achieve fixed score
        if (props.ctr === 10) {
            props.onLevelUp();
            // setLevel(2);
            setTimeoutTime(2000);
        };
        if (props.ctr === 20) {
            props.onLevelUp();
            // setLevel(3);
            setTimeoutTime(1000);
        };
    };

    // generate different button type if player dont caught the button in indicate (timeout Time) period
    const timeGenerator = useEffect(
        () => {
            const id = setTimeout(
                () => {
                    buttonTypeGenerator();
                }, timeoutTime
            );

            // clean up effect
            return () => {
                clearTimeout(id);
            };
        }, [timeoutTime, buttonTypeGenerator]
    );

    return (
        <div className="App">
            <Header />
            <main className="App-main">
                <div className="App-main-section__shared-view">
                    <div className="App-main-section">

                        <h2>
                            My score {props.ctr}
                        </h2>
                        <div className="center">
                            <Button
                                onClick={scoreHandler}
                                animation={`button-animation__${animationType}`}>CATCH ME</Button>
                        </div>
                    </div>
                </div>
                <Aside
                    level={props.lev} >
                    Level {props.lev}
                </Aside>
            </main>
        </div>
    );
}


// connect 
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        lev: state.lev.level
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onLevelUp: () => dispatch({ type: actionTypes.LEVEL_UP })
    }
};

// connect redux state and action to GameView compontent
export default connect(mapStateToProps, mapDispatchToProps)(GameView);