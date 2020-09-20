class CardList {

    constructor(container, initial, createCard) {

        this.container = container;
        this.initial = initial;
        this.createCard = createCard;
           }

    render() {
        this.initial.forEach(item => {
            this.addCard(item);
        });        
    }

    addCard(data) {
        const card = this.createCard(data);
        this.container.append(card);

    }
}