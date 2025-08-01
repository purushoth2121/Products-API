function GetProducts() {
    fetch('https://dummyjson.com/products', { method: "get" })
        .then(res => res.json())
        .then(res => {
            allProducts = res.products;
            for (let x of res.products) {

                console.log(x);
                let divtag = document.createElement('div');
                divtag.className = 'card';

                let imgtag = document.createElement('img');
                imgtag.src = x.thumbnail;
                imgtag.alt = x.title;
                imgtag.className = 'card-img';

                let title = document.createElement('h1');
                title.textContent = x.title;

                let ptag = document.createElement('p');
                ptag.textContent = x.description;

                let priceTag = document.createElement('p');
                priceTag.textContent = `Price: $${x.price}`;
                priceTag.className = 'price';

                button = document.createElement('button');
                button.textContent = 'Buy Now';
                button.className = 'buy-button';
                button.onclick = function () {
                    alert('Your purchase has been placed successfully!');
                };

                let ratingTag = document.createElement('p');
                ratingTag.textContent = `Rating: ${x.rating}`;
                ratingTag.className = 'rating';

                let shippingTag = document.createElement('p');

                shippingTag.textContent = `Shipping: ${x.shippingInformation
                    ? x.shippingInformation : 'Free Shipping'
                    }`;

                let policyTag = document.createElement('p');
                policyTag.textContent = `Policy: ${x.returnPolicy}`;
                policyTag.className = 'policy';

                let warentyTag = document.createElement('p');
                warentyTag.textContent = `Warranty: ${x.warrantyInformation
                    }`;

                divtag.appendChild(imgtag);
                divtag.appendChild(title);
                divtag.appendChild(ptag);
                divtag.appendChild(priceTag);
                divtag.appendChild(ratingTag);
                divtag.appendChild(shippingTag);
                divtag.appendChild(button);
                divtag.appendChild(warentyTag);
                divtag.appendChild(policyTag);


                document.body.appendChild(divtag);


            }

            let footerTag = document.createElement('p');
            footerTag.textContent = '© 2025 Product Shop. All rights reserved. purushoth';
            footerTag.className = 'footer';
            document.body.appendChild(footerTag);
        });
}
GetProducts();