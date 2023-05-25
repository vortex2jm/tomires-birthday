"use client";
import { useEffect, useState } from "react";

export default function (){

    const [textBox, setTextBox] = useState({
        box1: false,
        box2: false
    })

    const handleBox = (boxNumber: number, value: boolean): void => {
        if(boxNumber == 1){
            setTextBox(prevState => ({
                ...prevState,
                box1: value
            }))
            return;
        }
        if(boxNumber == 2){
            setTextBox(prevState => ({
                ...prevState,
                box2: value
            }))
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            handleBox(1, true);
        }, 3000);        
        const timer2 = setTimeout(() => {
            handleBox(2,true);
        },6000);

        // Return
        return () => {
            clearTimeout(timer);
            clearTimeout(timer2);
        }
    }, []
    );

    return (
        <div>   
            {textBox.box1 && <p>Oi eu sou o texto</p>}
            {textBox.box2 && <p>Agora sim, deu tudo certo</p>}
        </div>
    );
}
