class Layout extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<style scoped>
        g-layout {
            display: grid; 
            grid-template-rows: 110px 1fr 150px;
            min-height: 100%;
            position: relative;
        }
        
        @media screen and (max-width: 750px) {
            g-layout {
                grid-template-rows: 200px 1fr 150px;
            }
        }   
        @media screen and (max-width: 670px) {
            g-layout {
                grid-template-rows: 200px 1fr 250px;
            }
        }       
        @media screen and (max-width: 550px) {
            g-layout {
                grid-template-rows: 300px 1fr 250px;
            }
        }         
        </style>`;
    }
}

class Nav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<style scoped>
            g-nav {
                display: flex;
                justify-content: space-between;
                width: calc(100% - 80px);
                heigth: 100%;
                padding-left: 40px;
                padding-right: 40px;
                position: relative;
                max-width: 1200px;
                left: 50%;
                transform: translateX(-50%);
            }
            g-nav > div {
                position: relative;
            }
            g-nav > div:nth-child(2) h1{
                position: absolute;
                bottom: calc(15% - 15px);
                left: 80px;
                font-size: 75px;
            }
            g-nav .swissmark {
                position: absolute;
                width: 30px;
                height: 30px;
                background: #D10000;
                left: 390px;
                bottom: 65px;
            }
            g-nav .swissmark::after {
                content: "";
                display: flex;
                width: 7px;
                height: 20px;
                background: #fff;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                position: absolute;
            }
            g-nav .swissmark::before {
                content: "";
                display: flex;
                height: 7px;
                width: 20px;
                background: #fff;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                position: absolute;
            }
            g-nav img {
                height: 70%;
                position: relative;
                top: 50%;
                transform: translateY(-50%);
                z-index: 2;
            }
            g-nav a {
                color: #000;
                text-decoration: none;
                cursor: pointer;
            }

            g-nav > div:nth-child(3) > img {
                position: absolute;
                right: 0px;
            }
            g-nav #bottle {
                right: 30px;
                transform: translateY(calc(-50% - 5px));
            }
            g-nav #burger {
                right: 30px;
                height: 45px;
                transform: translateY(calc(-50% - 15px));
            }

            @media screen and (max-width: 750px) {
                g-nav > div:nth-child(2) h1, g-nav .swissmark {
                    display: none;
                }
                g-nav #bottle {
                    height: 50%;
                    right: 40px;
                    transform: translateY(calc(-50% + 12px));
                }
                g-nav #burger {
                    right: 40px;
                    height: 25%;
                    transform: translateY(calc(-50% - 10px));
                }
                g-nav #fries {
                    height: 50%;
                    transform: translateY(calc(-50% + 20px));
                }
            }   
            @media screen and (max-width: 550px) {
                g-nav {
                    padding-left: 0px;
                    padding-right: 0px;
                    padding-top: 20px;
                    padding-bottom: 20px;
                    height: calc(100% - 40px);
                    width: 100%;
                    flex-direction: column;
                }
                g-nav > div {
                    max-height: 50%;
                }
                g-nav > div:nth-child(2) img {
                    height: 70%;
                    max-width: 100%;
                    position: relative;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                g-nav #bottle, g-nav #burger, g-nav #fries {
                    height: 70%;
                    transform: translateX(-50%) translateY(0px);
                    top: 25px;
                    left: 50%;
                }
                g-nav #burger {
                    height: 45%;
                    transform: translateX(calc(-50% - 40px))
                }
                g-nav #bottle {
                    top: 15px;
                    transform: translateX(calc(-50% + 40px));
                }
                g-nav #fries {
                    transform: translateX(calc(-50% - 10px))
                }
            }      
        </style>
        
        <div><a href="google.ch" target"_blank"><img src="./public/logo.png"><h1>cDonald's</h1><div class="swissmark"></div></a></div>
        <div><img src="./public/bottle.svg" id="bottle"><a href="google.ch"><img src="./public/burger.svg" id="burger"></a><a href="google.ch" target"_blank"><img src="./public/fries.svg" id="fries"></a></div>`
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<style scoped>
        footer, footer > div {
            height: 100%;
        }
        footer {
            position: relative;
            display: flex;
            justify-content: space-between;
            width: calc(100% - 80px);
            padding-left: 40px;
            padding-right: 40px;
        }
        footer > div:nth-child(1) {
            display: flex;
            align-items: center;
            gap: 40px;
            font-weight: 700;
        }
        footer > div:nth-child(2) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: right;
        }
        footer > div > div {
            display: flex;
            flex-direction: column;
        }
        img {
            height: 80%;
        }   
        a {
            color: #166F00;
            font-weight: 600;
            cursor: pointer;
        }

        @media screen and (max-width: 670px) {
            footer {
                flex-direction: column;
                align-items: center;
            }
            footer > div {
                height: 50%
            }
            footer > div:nth-child(2) {
                text-align: center;
                gap: 5px;
            }
            img {
                height: 60%;
            }   
        }       
        </style>
        
        <footer>
        <div><img src="./public/logo.png"><div><span>Copyright</span><span>McDonald</span><span>© 2023</span></div></div><div><a>Conditions générales</a><a>Normes</a><a>Emplois</a><a>Provenance d'aliments</a></div>
        </footer>`;
    }
}

class Login extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<style scoped> 
        g-login {
            min-height: 500px;
            width: 100%;
        }
        g-login > div {
            max-width: 400px;
            width: 80%;
            position: relative;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            flex-direction: column;
            gap: 20px;
            -webkit-box-shadow: 3px 7px 17px 1px rgba(61,61,61,0.49); 
            box-shadow: 3px 7px 17px 1px rgba(61,61,61,0.49);
            padding: 20px;
        }
        button {
            text-transform: uppercase;
            background: #FFCC04;
            border: none;
            padding-top: 5px;
            padding-bottom: 5px;
            color: #166F00;
            font-weight: 900;
            font-size: 50px;
            cursor: pointer;
        }
        header {
            display: flex;
            align-items: flex-end; 
            gap: 10px;
        }
        header h2 {
            font-size: 260%;
        }
        header a {
            font-size: 200%;
        }
        g-login > div > div {
            margin-top: 20px;
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        g-login > div > div > div {
            display: flex;
            align-items: center;
            gap: 20px;
        }
        g-login > div > div > div input {
            width: calc(100% - 35px);
        }
        input {
            border: none;
            border-bottom: 2px solid #000;
            padding: 5px;
        }
        @media screen and (max-width: 550px) {
            header h2 {
                font-size: 200%;
            }
            header a {
                font-size: 160%;
            }
            button {
                font-size: 40px;
            }
        }
        @media screen and (max-width: 400px) {
            g-login > div {
                width: 85%;
                box-shadow: none;
            }
            header h2 {
                font-size: 160%;
            }
            header a {
                font-size: 100%;
            }
            button {
                font-size: 20px;
            }
        }
        </style>
        
        <div>
            <header><h2>Connexion</h2><a>S'inscrire</a></header>
            <div>
                <input placeholder=e-mail />
                <div><input placeholder=password type=password /><span class="material-symbols-outlined" onclick="changeVisibility(event);">visibility</span></div>
            </div>
            <button>Se connecter</button>
        </div>`;
    }
}


customElements.define('g-layout', Layout);
customElements.define('g-nav', Nav);
customElements.define('g-footer', Footer);
customElements.define('g-login', Login);

function changeVisibility(e) {
    const t = e.target;
    if (t.innerText == 'visibility') {
        t.innerHTML = 'visibility_off';
        t.parentElement.querySelector('input').type = 'text';
    }
    else {
        t.innerHTML = 'visibility';
        t.parentElement.querySelector('input').type = 'password';
    }
}
