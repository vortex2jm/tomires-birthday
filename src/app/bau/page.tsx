"use client";

import Swal from "sweetalert2";
import styles from "./bau.module.css"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Bau(){
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

    const handleButton = async () => {
        Swal.fire({
            title:"Meu pau no seu cu", 
            text: "aushduahsd, não tem missão, mas tem mais vídeo!", 
            color: "#fff",
            background: "#333",
          });
          router.push("/video");
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            handleBox(1, true);
        }, 5000);        
        const timer2 = setTimeout(() => {
            handleBox(2,true);
        },11000);

        // Return
        return () => {
            clearTimeout(timer);
            clearTimeout(timer2);
        }
    }, []
    );

    return (
        <div className={styles.mainContainer}>
            {!textBox.box2 && <h1 className={styles.title}>Depois de fortes emoções, agora é hora de Tainha e Vinho</h1>}
            {textBox.box1 && !textBox.box2 && 
                <div className={styles.gif}>
                    <h2>
                        Mas antes você terá que realizar uma missão!!!
                    </h2>
                    <img src="comemoracao.gif" alt="telemensagem" width={400} height={200}></img>
                </div>
            }
            {textBox.box2 && 
                <div className={styles.end}>
                    <h2>Clique no baú</h2>
                    <button onClick={handleButton}></button>
                </div>
            }
        </div>
    );
}
