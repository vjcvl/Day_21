let c = document.getElementById('count');
setTimeout(() => {
    console.log(`10`);
    c.innerHTML = `10`;
    setTimeout(() => {
        console.log(`9`);
        c.innerHTML = `9`;
        setTimeout(() => {
            console.log(`8`);
            c.innerHTML = `8`;
            setTimeout(() => {
                console.log(`7`);
                c.innerHTML = `7`;
                setTimeout(() => {
                    console.log(`6`);
                    c.innerHTML = `6`;
                    setTimeout(() => {
                        console.log(`5`);
                        c.innerHTML = `5`;
                        setTimeout(() => {
                            console.log(`4`);
                            c.innerHTML = `4`;
                            setTimeout(() => {
                                console.log(`3`);
                                c.innerHTML = `3`;
                                setTimeout(() => {
                                    console.log(`2`);
                                    c.innerHTML = `2`;
                                    setTimeout(() => {
                                        console.log(`1`);
                                        c.innerHTML = `1`;
                                        setTimeout(() => {
                                            console.log(`hello`);
                                            c.innerHTML = `Happy Independance Day!!!`;
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
