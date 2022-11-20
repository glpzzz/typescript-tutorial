export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(doc, heading, position) {
        const eLi = document.createElement('li');
        const eH4 = document.createElement('h4');
        eH4.innerText = heading;
        eLi.append(eH4);
        const eP = document.createElement('p');
        eP.innerText = doc.format();
        eLi.append(eP);
        if (position === 'start') {
            this.container.prepend(eLi);
        }
        else if (position === 'end') {
            this.container.append(eLi);
        }
    }
}
