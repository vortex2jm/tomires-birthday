"use client";
import { ChangeEvent, useState } from 'react'
import styles from './page.module.css'
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

export default function Home() {
  
  const router = useRouter();
  
  const [age, setAge] = useState<string>("");

  const handleAge = (event: ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  }

  const handleButtonClick = () => {
    if(age == "26"){
      Swal.fire({
        title:"Meu pau na sua mão", 
        text: "Brincadeirinha rsrs", 
        color: "#fff",
        background: "#333",
      });
      router.push("/telemensagem");
    }
    else{
      Swal.fire({
        title:"Errrrrooooooouuuuuu", 
        text: "(Faustão falando...)", 
        color: "#fff",
        background: "#333",
      });
      setAge("");
    }
  }

  return (
    <div className={styles.mainContainer}>
      <div>
        <p className={styles.title}>Olá to.mires, se você chegou até aqui, quer dizer que é uma vencedora!</p>
        <p className={styles.subtitle}>Já sabe digitar no computador</p>
      </div>
      <div className={styles.inputBox}>
        <input className={styles.inputField} type="text" value={age} onChange={handleAge} placeholder={"Idade"}/>
        {/* <p>Valor do input: {age}</p> */}
        <button className={styles.button} onClick={handleButtonClick}>Clique no botão</button>        
      </div>
    </div>
  )
}
