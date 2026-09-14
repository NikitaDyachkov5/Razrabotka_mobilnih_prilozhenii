class HomePage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <ion-header>
                <ion-toolbar>
                    <ion-title>Blank</ion-title>
                </ion-toolbar>
            </ion-header>

            <ion-content class="ion-padding">
                <div id="container">
                    <strong>Ready to create an app?</strong>
                    <p>
                        Start with Ionic
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://ionicframework.com/docs/components"
                        >
                            UI Components
                        </a>
                    </p>
                </div>

                <ion-router-link href="/new">
                    <ion-button>Navigate</ion-button>
                </ion-router-link>
            </ion-content>
        `;

        this.addEventListener('ionViewWillEnter', () => {
            console.log('HomePage: ionViewWillEnter');
        });

        this.addEventListener('ionViewDidEnter', () => {
            console.log('HomePage: ionViewDidEnter');
        });

        this.addEventListener('ionViewWillLeave', () => {
            console.log('HomePage: ionViewWillLeave');
        });

        this.addEventListener('ionViewDidLeave', () => {
            console.log('HomePage: ionViewDidLeave');
        });
    }
}

customElements.define('home-page', HomePage);