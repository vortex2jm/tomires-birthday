"use client";
import { useEffect, useState } from "react";
import styles from "./comments.module.css"
import { useRouter } from "next/navigation";

export default function (){

    const router = useRouter();

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

    const handleButton = () => {
        router.push("/ready");
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            handleBox(1, true);
        }, 5000);        
        const timer2 = setTimeout(() => {
            handleBox(2,true);
        },10000);

        // Return
        return () => {
            clearTimeout(timer);
            clearTimeout(timer2);
        }
    }, []
    );

    return (
        <div className={styles.mainContainer}>
            {!textBox.box2 && <h1 className={styles.title}>Olá de novo to.mires, hoje é um dia muito especial</h1>}
            {textBox.box1 && !textBox.box2 && 
                <div className={styles.telemensagem}>
                    <h2>
                        E é por isso que tem um carro de telemensagem te esperando lá embaixo
                    </h2>
                    <img src="telemensagem.jpg" alt="telemensagem" width={800} height={400}></img>
                </div>
            }
            {textBox.box2 && 
                <div className={styles.mentirinha}>
                    <h2>Mentirinha audhuashduashduah</h2>
                    <button onClick={handleButton}>Vamos lá</button>
                </div>
            }
        </div>
    );
}
