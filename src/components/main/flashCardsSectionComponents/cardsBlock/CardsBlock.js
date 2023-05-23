import React from 'react';

export const CardsBlock = (props) => {
    let {cardsList} = props;
    return (
            <div className = "cards-block" onClick={(event) => {
                let eventss = event.target;
                let test = document.getElementsByClassName(`${eventss.className}`);
                let testdd;
                let po = Object.entries(eventss);
                if (po[1][1].className === undefined ) {return}
                else {
                    let test3 = eventss.closest('.created-flash-card-front-side');
                    let test55 = test3 === undefined || null;
                    let rr; let dd;
                    if (test3 === null) { testdd = 'null';} 
                    if (test3 !== null) {
                        rr = Object.entries(test3);
                        dd = rr[1][1].className;
                        testdd = dd.includes('created-flash-card-front-side');
                    };
                    let parent = eventss.closest('.created-card');
                    let side2 = parent.querySelector('.created-flash-card-back-side');
                    let side1 = parent.querySelector('.created-flash-card-front-side');
                    let rcd = document.querySelector('.remove-card-cont');
                    let rss= document.getElementsByClassName('remove-btn');
                    let test4 = eventss.closest('div');
                    let test5 = test4 === rcd;
                    if (test5 === true) {
                        parent.remove();
                    }
                    if (testdd === true) {
                        side1.style.animation = 'rotateCard 1.3s linear';
                        setTimeout(() => {
                            side1.style.animation = 'none';
                            side2.style.zIndex = '3';
                            side2.style.opacity = '1';
                            side1.style.opacity = '0';
                            side1.style.zIndex = '1';
                            side2.style.animation = 'rotate2 0.8s linear';
                            side2.style.transform = 'none';
                            side1.style.transform = 'rotateY(84deg)';
                        }, 600);
                    }
                    if (testdd === 'null') {
                        side2.style.animation = 'rotateCard 1.3s linear';
                        setTimeout(() => {
                            side2.style.animation = 'none';
                            side1.style.zIndex = '2';
                            side1.style.opacity = '1';
                            side2.style.opacity = '0';
                            side2.style.zIndex = '1';
                            side1.style.animation = 'rotate2 0.8s linear';
                            side1.style.transform = 'none';
                            side2.style.transform = 'rotateY(84deg)';
                        }, 600);
                    }}
            }
            }>
                {cardsList}
            </div>
    )
};