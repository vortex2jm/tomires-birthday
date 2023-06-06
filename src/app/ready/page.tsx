"use client";
import { useEffect, useState } from "react";
import styles from "./ready.module.css"
import Swal from 'sweetalert2';
import { useRouter } from "next/navigation";

export default function Ready(){

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
        Swal.fire({
            title:"Tô nem aí", 
            text: "Vai ter que assistir assim mesmo", 
            color: "#fff",
            background: "#333",
          });
          router.push("/photos");
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
            {!textBox.box2 && <h1 className={styles.title}>Como é novidade para nós, é seu aniversário!!!</h1>}
            {textBox.box1 && !textBox.box2 && 
                <div className={styles.gif}>
                    <h2>
                        Por isso não poderia deixar de passar por momentos emocionantes...
                    </h2>
                    <img src="feeling.gif" alt="telemensagem" width={400} height={200}></img>
                </div>
            }
            {textBox.box2 && 
                <div className={styles.end}>
                    <h2>Clique no botão abaixo para prosseguir</h2>
                    <button onClick={handleButton}>Não estou preparada</button>
                </div>
            }
        </div>
    );
}
