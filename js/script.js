const generateBtn = document.getElementById('generate-ticket');
generateBtn.addEventListener('click',
    function () {

        const userName = document.getElementById('user-name').value;
        const userKm = parseInt(document.getElementById('user-km').value);
        const userAge = document.getElementById('user-age').value;
        const price = userKm * 0.21;
        let discount = 0; 

        if (userAge === 'minorenne') {
            discount = price * 20 / 100; 
        } else if ( userAge === 'over') {
            discount = price * 40 / 100;
        };

        const finalPrice = price - discount;

        document.getElementById('ticket-owner').innerHTML = userName;
        document.getElementById('ticket-coach').innerHTML = Math.floor(Math.random() * 10) + 1;
        document.getElementById('ticket-cpcode').innerHTML = Math.floor(Math.random() * 9999) + 1;
        document.getElementById('ticket-price').innerHTML = finalPrice.toFixed(2);

        let promo = document.getElementById('ticket-promo');
        promo = document.getElementById('ticket-promo').innerHTML = 'Standard';

        if (userAge === 'minorenne') {
            promo = document.getElementById('ticket-promo').innerHTML = 'Offerta 20'; 
        } else if ( userAge === 'over') {
            promo = document.getElementById('ticket-promo').innerHTML = 'Offerta 40';
        };
    }
);

const cancelBtn = document.getElementById('cancel-ticket');
cancelBtn.addEventListener('click',
    function () {
        document.getElementById('user-name').value = '';
        document.getElementById('user-km').value = '';
        document.getElementById('user-age').value = '';
        document.getElementById('ticket-owner').innerHTML = '';
        document.getElementById('ticket-promo').innerHTML = '';
        document.getElementById('ticket-price').innerHTML = '';
        document.getElementById('ticket-coach').innerHTML = '';
        document.getElementById('ticket-cpcode').innerHTML = '';
    }
);