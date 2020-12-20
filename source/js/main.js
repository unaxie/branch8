function productsList() {
    const fakeStoreApi = 'https://fakestoreapi.com/products/';
    $.ajax({
        type: "GET",
        url: fakeStoreApi,
        dataType: "json",
        success: function (response) {
            const products = [];
            products.push(...response);
            createProductList(products);
        },
        error: function (thrownError) {
            console.log(thrownError);
        }
    });
}

function createProductList(products) {
    const productsList = products.map(product => {
        return `
            <li class="productsList-item col-lg-4 col-6 p-lg-4"><a class="productsList-item-link" href="${product.image}">` +
            `<figure class="productsList-item-figure ratioImg ratioImg-1by1">` +
            `<img class="ratioImgContent" src="${product.image}">` +
            `<div class="productsList-item-interactions">` +
            `<button class="btn interactions-icon"><span>` +
            `<svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">` +
            `<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.09053 5.00869H17.9096L18.9818 15.445C19.1672 17.0769 17.9119 18.51 16.2913 18.51L2.7087 18.51C1.08808 18.51 -0.167246 17.0769 0.0181994 15.445L1.09053 5.00869ZM2.40808 6.50869L1.48668 15.6168C1.40224 16.3599 1.97334 17.01 2.7087 17.01L16.2913 17.01C17.0267 17.01 17.5977 16.3599 17.5133 15.6168L16.592 6.50869H2.40808Z" transform="translate(1)"></path>` +
            `<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M7.3466 0.622759C7.90387 0.233871 8.61575 0 9.49996 0C10.3842 0 11.0961 0.233871 11.6533 0.622759C12.2048 1.00762 12.5612 1.51352 12.7903 1.99321C13.0183 2.47048 13.1286 2.93833 13.183 3.2803C13.2105 3.45311 13.2246 3.59868 13.2317 3.70389C13.2353 3.75662 13.2372 3.79958 13.2382 3.83116C13.2387 3.84696 13.239 3.85994 13.2392 3.86992L13.2393 3.8826L13.2394 3.88722L13.2394 3.88908C13.2394 3.88908 13.2394 3.89065 12.5002 3.89065C11.7612 3.90271 11.7611 3.89133 11.7611 3.89133L11.7611 3.89294L11.7608 3.8796C11.7603 3.86517 11.7593 3.84065 11.757 3.80751C11.7525 3.74096 11.7431 3.64118 11.7237 3.51955C11.6844 3.27264 11.6072 2.95533 11.4601 2.64744C11.3142 2.34196 11.108 2.06271 10.8157 1.85869C10.5291 1.65871 10.1159 1.5 9.49996 1.5C8.88403 1.5 8.47081 1.65871 8.18424 1.85869C7.8919 2.06271 7.68573 2.34196 7.53981 2.64744C7.39275 2.95533 7.31551 3.27264 7.2762 3.51955C7.25684 3.64118 7.24742 3.74096 7.24288 3.80751C7.24062 3.84065 7.23959 3.86517 7.23913 3.8796L7.23879 3.89337L7.23878 3.89193C7.23878 3.89193 7.23878 3.89065 6.49968 3.89065C5.76057 3.89065 5.76057 3.8899 5.76057 3.8899L5.76058 3.88722L5.7606 3.8826L5.76075 3.86992C5.7609 3.85994 5.76118 3.84696 5.76169 3.83116C5.76269 3.79958 5.7646 3.75662 5.76819 3.70389C5.77537 3.59868 5.7894 3.45311 5.81691 3.2803C5.87136 2.93833 5.98164 2.47048 6.20961 1.99321C6.43873 1.51352 6.79512 1.00762 7.3466 0.622759Z"></path>` +
            `</svg></span></button>` +
            `<button class="btn interactions-icon"><span>` +
            `<svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">` +
            `<path d="M 9.5 5 C 5.363281 5 2 8.402344 2 12.5 C 2 13.929688 2.648438 15.167969 3.25 16.0625 C 3.851563 16.957031 4.46875 17.53125 4.46875 17.53125 L 15.28125 28.375 L 16 29.09375 L 16.71875 28.375 L 27.53125 17.53125 C 27.53125 17.53125 30 15.355469 30 12.5 C 30 8.402344 26.636719 5 22.5 5 C 19.066406 5 16.855469 7.066406 16 7.9375 C 15.144531 7.066406 12.933594 5 9.5 5 Z M 9.5 7 C 12.488281 7 15.25 9.90625 15.25 9.90625 L 16 10.75 L 16.75 9.90625 C 16.75 9.90625 19.511719 7 22.5 7 C 25.542969 7 28 9.496094 28 12.5 C 28 14.042969 26.125 16.125 26.125 16.125 L 16 26.25 L 5.875 16.125 C 5.875 16.125 5.390625 15.660156 4.90625 14.9375 C 4.421875 14.214844 4 13.273438 4 12.5 C 4 9.496094 6.457031 7 9.5 7 Z"></path>` +
            `</svg></span></button>` +
            `</div></figure>` +
            `<div class="productsList-item-overlay">` +
            `<h2 class="title">${product.title}</h2>` +
            `<span class="px-2 price-original">$${product.price}</span>` +
            `<span class="px-2 price-sale">$${product.price}</span></div>` +
            `</a></li>`;
    }).join("");

    const appendProductsList = $('.productsList');
    appendProductsList.append(productsList);
}
function subNavOperate() {
    $('.btn-menu').on('click', function (e) {
        e.preventDefault();
        $('.sideNav').addClass('active');
    });
    $('.btn.close').on('click', function (e) {
        e.preventDefault();
        $('.sideNav').removeClass('active');
    });
    $('.list-item').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('expanded');
        $(this).children('.list.secondary').slideToggle();
        // $('html').toggleClass('scroll-locked');
    })
}