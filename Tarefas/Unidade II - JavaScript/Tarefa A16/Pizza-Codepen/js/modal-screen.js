class ModalScreen {
    constructor(containerElement, photoPaths) {
        this.containerElement = containerElement;
        this.photoPaths = photoPaths;
        this.currentIndex = -1;
        this.currentModalPhoto = null;

        this.showNextPhoto = this.showNextPhoto.bind(this);
        this.showPrevPhoto = this.showPrevPhoto.bind(this);
        this.onModalClick = this.onModalClick.bind(this);

        this.containerElement.addEventListener('pointerdown', this.onModalClick);
    }

    clear() {
        this.currentIndex = -1;
        this.currentModalPhoto = null;
        this.containerElement.innerHTML = '';
    }

    hide() {
        document.body.classList.remove('no-scroll');
        this.containerElement.classList.add('hidden');
    }

    showImageAtIndex(index, entranceStyle) {
        this.currentIndex = index;
        document.body.classList.add('no-scroll');

        const src = this.photoPaths[index];
        if (this.currentModalPhoto) {
            this.currentModalPhoto.remove();
        }
        this.currentModalPhoto = new ModalPhoto(src, this.showNextPhoto, this.showPrevPhoto);
        this.currentModalPhoto.renderTo(this.containerElement, entranceStyle);

        this.containerElement.style.top = window.pageYOffset + 'px';
        this.containerElement.classList.remove('hidden');
    }

    showNextPhoto() {
        if (this.currentIndex + 1 === this.photoPaths.length) {
            this.currentModalPhoto.snapToPlace();
        } else {
            this.showImageAtIndex(this.currentIndex + 1, 'next');
        }
    }

    showPrevPhoto() {
        if (this.currentIndex === 0) {
            this.currentModalPhoto.snapToPlace();
        } else {
            this.showImageAtIndex(this.currentIndex - 1, 'prev');
        }
    }

    onModalClick() {
        this.clear();
        this.hide();
    }
}