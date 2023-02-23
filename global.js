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

customElements.define('g-layout', Layout);
customElements.define('g-nav', Nav);
