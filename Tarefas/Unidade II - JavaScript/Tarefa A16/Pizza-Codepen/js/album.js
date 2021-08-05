class Album {
    constructor(photoPaths) {
        this.photoPaths = photoPaths;
        this.photos = [];
        const modalView = document.getElementById('modal-view');
        this.modalScreen = new ModalScreen(modalView, photoPaths);

        this.onThumbnailClick = this.onThumbnailClick.bind(this);
    }

    renderTo(containerElement) {
        this.attachPhotosToContainer(this.photoPaths, containerElement);
    }

    attachPhotosToContainer(photoPaths, containerElement) {
        for (let i = 0; i < photoPaths.length; i++) {
            const thumbnail = new Thumbnail(i, photoPaths[i], this.onThumbnailClick);
            thumbnail.renderTo(containerElement);
        }
    }

    onThumbnailClick(index, src) {
        this.modalScreen.showImageAtIndex(index);
    }
}