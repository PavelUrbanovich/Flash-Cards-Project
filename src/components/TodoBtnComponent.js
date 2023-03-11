import React from 'react';

export const TodoBtnComponent = () => {
    return (
        <section className = "btn-section">
            <button className = "get-btn" onClick = {() => {
                const enterText = document.querySelector('.enter-text');
                const outputScope = document.querySelector('.output-scope');
                const newEl = document.createElement('div');
                const closeBtnForNewEl = document.createElement('div');
                closeBtnForNewEl.className = 'close-btn-zone';
                closeBtnForNewEl.innerHTML = '<div class="close-btn">&times;</div>';
                newEl.append(closeBtnForNewEl);
                newEl.className = 'new-el-styles';
                const txtSection = document.createElement('div');
                txtSection.className = 'txt-section-styles';
                txtSection.textContent = enterText.value;
                newEl.append(txtSection);
                if (enterText.value.length >= 1) outputScope.append(newEl)
                else {return};
                enterText.value = '';
                const outScope = document.querySelector('.output-scope');
                const closeBtn = document.querySelectorAll('.close-btn');
                outScope.addEventListener('click', (event) => {
                    let eventss = event.target;
                    let btns = Object.entries(closeBtn);
                    let test = btns.some(el => el[1] === eventss);
                    if (test === true) {
                        let kk = eventss.closest('.new-el-styles');
                        kk.style.animation = 'disappearance 1s linear';
                        setTimeout(() =>kk.remove(), 800);
                    } else {return}
                })
            }}>
                Enter
            </button>
        </section>
    )
}