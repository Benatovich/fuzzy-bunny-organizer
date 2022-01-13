export function renderBunny(bunny) {
    const div = document.createElement('div');
    const p = document.createElement('p');

    p.textContent = bunny.name;
    div.append(p);

    return div;
}