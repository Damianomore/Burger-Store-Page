const buttons = document.querySelectorAll('.array-button-selector');
const itemNames = document.querySelectorAll('product-name');
const itemPrices = document.querySelectorAll('product-price');
const items = document.querySelectorAll('.product-card');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = e.target.innerText;
        items.forEach(item => {
            const children = item.childNodes;
            //console.log(children[3].childNodes[1]);
            
            if(children[3].childNodes[1].textContent.includes(`${filter}`))
            {
                console.log(`${filter}`);
                item.style.display = 'block';
            }
            else if(filter === "All")
            {
                item.style.display = 'block';

            }
            else
            {
                item.style.display = 'none';
            }
            
            
        })

    });
});

//children[3].childNodes[1].textContent.includes(`${filter}`)