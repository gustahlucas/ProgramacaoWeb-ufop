class Present {
    constructor(containerElement, presentSrc, onOpenCallback) {
        this.onOpenCallback = onOpenCallback;
        this.containerElement = containerElement;
        this.presentSrc = presentSrc;


        // Bind event listeners.
        this.#openPresent = this.#openPresent.bind(this);

        // Create image and append to container.
        this.image = document.createElement('img');
        this.image.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';
        this.image.addEventListener('click', this.#openPresent);
        this.containerElement.append(this.image);
    }

    #openPresent = () => {
        this.image.src = this.presentSrc;
        this.image.removeEventListener('click', this.#openPresent);
        this.onOpenCallback();
    };
}


