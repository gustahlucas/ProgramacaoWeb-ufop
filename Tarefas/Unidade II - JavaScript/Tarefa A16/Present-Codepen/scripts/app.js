class App {
    constructor(presentContainer, titleContainer) {
        this.presentContainer = presentContainer;
        this.titleContainer = titleContainer;

        this.onPresentOpened = this.onPresentOpened.bind(this);

        this.presents = [];
        this.#fillPresentContainer();
        this.openedCount = 0;
    }

    #fillPresentContainer() {
        for (const source of PRESENT_SOURCES) {
            const present = new Present(this.presentContainer, source, this.onPresentOpened);
            this.presents.push(present);
        }
    }

    onPresentOpened() {
        console.log(this);
        this.openedCount++;
        if (this.openedCount === this.presents.length) {
            this.titleContainer.textContent = 'Enjoy your presents!';
        }
    }
}


