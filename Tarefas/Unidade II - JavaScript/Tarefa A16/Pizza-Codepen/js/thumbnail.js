class Thumbnail {
    constructor(index, src, onThumbClick) {
        this.index = index;
        this.onThumbClick = onThumbClick;

        this.onClick = this.onClick.bind(this);

        this.image = document.createElement('img');
        this.image.src = src;
        this.image.addEventListener('pointerup', this.onClick);
    }

    renderTo(element) {
        element.appendChild(this.image);
    }

    remove() {
        this.image.remove();
    }

    onClick() {
        this.onThumbClick(this.index, this.image.src);
    }
}