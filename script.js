const heading = document.getElementById('h2');
const childNodes = Array.from(heading.childNodes);

heading.innerHTML = '';

childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
        const words = node.textContent
            .split(' ')
            .filter(word => word.trim() !== '');

        words.forEach((word, index) => {
            const span = document.createElement('span');
            span.textContent = word;
            heading.appendChild(span);
            heading.appendChild(document.createTextNode(' '));
        });
    } else {
        heading.appendChild(node);
    }
});
