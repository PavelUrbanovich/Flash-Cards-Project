import React from 'react';
import { TodoBtnComponent } from './TodoBtnComponent';

export const TodoFormComponent = () => {
    return (
            <section className = "form">
                <section className = "output-section">
                    <div className = "output-scope">
        
                    </div>
                </section>
                <section className = "input">
                    <textarea type= "text" defaultValue={''} className = "enter-text">
        
                    </textarea>
                </section>
                <TodoBtnComponent />
            </section>
    )
}