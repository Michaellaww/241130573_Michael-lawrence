document.querySelectorAll('.card-produk').forEach(card => {
    const input = card.querySelector('.quantity input');
    const munus = card.querySelector('.minus');
    const plus = card.querySelector('.plus');

    plus.addEventListener('click', () => {
        const harga = card.querySelector('.price');
        const nominalharga = harga.textContent.match(/yd+/)[0];

        let value = parseInt(input.value);
        input.value = value + 1;
        harga.innerHTML = '$${(nominalharga / value)'
    })
} )