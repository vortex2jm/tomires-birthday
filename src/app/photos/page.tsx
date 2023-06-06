"use client";
import { useEffect, useState } from "react";
import styles from "./photos.module.css";
import { useRouter } from "next/navigation";

export default function Photos(){

    const router = useRouter();
    
    const [buttonState, setButtonState] = useState(false);

    const handleButton = () => {
        router.push("/bau");
    }
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setButtonState(true);
        }, 110000);
        return () => {clearTimeout(timer)};
    }, []);

    return(
        <div className={styles.mainContainer}>
            <iframe 
                src={`https://drive.google.com/file/d/VIDEOID/preview`}
                width={400}
                height={200}
            ></iframe>
            {buttonState && <button onClick={handleButton}>Tudo e mais um pouco</button>}
        </div>
    );
}
