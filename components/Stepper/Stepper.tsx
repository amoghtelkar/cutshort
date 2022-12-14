import { FC, useState } from 'react';
import styles from './Stepper.module.scss';

interface IStepper {
    selectedStep: number;
    steps: number[];
}

export const Stepper: FC<IStepper> = ({ selectedStep, steps }) => {

    return (
        <>
            <div className={styles.stepper}>
                {steps.map((step, index) =>
                    <div key={index} className={styles.step} style={steps.length - 1 === index ? { display: 'contents' } : {}}>
                        <div className={index <= selectedStep ? styles.platform : styles.platformInAvtive} style={steps.length - 1 === index ? { width: '40%' } : {}} >
                            <label>{step}</label>
                        </div>
                        {steps.length - 1 === index ? undefined : <div className={styles.connecter}>
                        <hr style={ index < selectedStep ? {background:"#5A4AD1"} : index === selectedStep ? {background:"linear-gradient(90deg, #5A4AD1 50%, white 50%)"} : {} }/>
                        </div>}

                    </div>
                )}
            </div>
        </>
    )
}