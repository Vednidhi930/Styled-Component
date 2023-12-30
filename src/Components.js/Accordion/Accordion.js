import React, { useState } from 'react'
import { questions } from './api';
import "./Accordion.css";

import MainAccordion from './MainAccordion';


export default function Accordion() {
    const [data, setData] = useState(questions);
    return (
        <>
            <section className='main-div'>
             <h1 style ={{textAlign :"center"}}>Js Interview Question</h1>
                {
                    data.map((x) => {
                        const { id, question, answer } = x;
                        return <MainAccordion key={id} {...x} />
                    }

                    )
                }
            </section>
        </>
    )
}
