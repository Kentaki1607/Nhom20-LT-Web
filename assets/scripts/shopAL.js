document.addEventListener('DOMContentLoaded', function () {
    const contentElement = document.getElementById('content');
    const paginationElement = document.querySelector('.pagination');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    const data = [
        {
            image: "./assets/images/ngamhoa.webp",
            name: "Ra bờ suối ngắm hoa kèn",
            price: "170.000đ",
        },
        
        {
            image:"./assets/images/muahe.webp" ,
            name:"Mùa hè không tên",
            price: "120.000đ",
        },

        {
            image: "./assets/images/tuduy.webp" ,
            name: "Tư duy chiến lược",
            price: "180.000đ",
        },

        {
            image: "./assets/images/daiviet.webp" ,
            name: "Đại Việt sử kí toàn thư",
            price: "250.000đ",
        },

        {
            image: "./assets/images/tienganh.webp" ,
            name: "Nghiền từ vựng tiếng anh",
            price: "310.000đ",
        },

        {
            image: "./assets/images/bacthay.webp",
            name: "Những bậc thầy đầu tư",
            price: "160.000đ",
        },

        {
            image: "./assets/images/kinh.webp" ,
            name: "Kinh dịch",
            price: "150.000đ",
        },

        {
            image: "./assets/images/leancode.webp" ,
            name: "Lean Code",
            price: "280.000đ",
        },

        {
            image: "./assets/images/toathanh.webp" ,
            name: "Nỗi nhớ anh hóa một tòa thành",
            price: "110.000đ",
        },

        {
            image: "./assets/images/tetlang.webp" ,
            name: "Tết ở làng đọa ngục",
            price: "210.000đ",
        },

        {
            image: "./assets/images/qtrog.webp",
            name: "Điều quan trọng nhất",
            price: "110.000đ"
        },
        
        {
            image: "./assets/images/kinhtehoc.webp" ,
            name: "Kinh tế học cơ bản",
            price: "120.000đ",
        },
        
        {
            image: "./assets/images/quantrivon.webp" ,
            name: "Phương pháp quản trị vốn",
            price: "220.000đ",
        },
        
        {
            image: "./assets/images/kiemtien.webp" ,
            name: "Kiếm tiền hàng ngày",
            price: "140.000đ",
        },

        {
            image: "./assets/images/vutru.webp" ,
            name: "Hợp nhất với vũ trụ",
            price: "130.000đ",
        },

        {
            image: "./assets/images/kientao.webp",
            name: "Kiến tạo gia đình hạnh phúc",
            price: "160.000đ",
        },
        

        {
            image: "./assets/images/chinhphuc.webp",
            name: "Chinh phục hạnh phúc",
            price: "230.000đ",
        },
        
        {
            image: "./assets/images/giauco.webp",
            name: "Người giàu có nhất thành BaByLon",
            price: "90.000",
        },
        

        {
            image: "./assets/images/miendich.webp",
            name:  "Miễn dịch",
            price: "140.000",
        },
        
        {
            image: "./assets/images/nhansinh.webp",
            name: "Muôn kiếp nhân sinh",
            price: "260.000",
        },
        
        {
            image: "./assets/images/vantinh.webp",
            name: "Vãn Tình",
            price: "80.000đ"
        },

        {
            image: "./assets/images/chienthang.webp",
            name: "Chiến thắng con quỷ trong bạn",
            price: "280.000đ"
        },

        {
            image: "./assets/images/phapy.webp",
            name: "Ghi chép  pháp y",
            price: "170.000đ",
        },

        {
            image: "./assets/images/tinhdep.webp",
            name: "Lời hay tình đẹp",
            price: "120.000đ",
        },
        
        
    ];
    const itemsPerPage = 12;
    let currentPage = 1;

    function displayProducts(page, searchTerm) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const filteredData = data.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const productsToShow = filteredData.slice(startIndex, endIndex);

        contentElement.innerHTML = '';

        productsToShow.forEach(product => {
            const productItem = document.createElement('li');

            const productItemContent = `
                <div class="product-item">
                    <div>
                        <a href="product-detailAL.html">
                            <img src="${product.image}" alt="${product.name}">
                        </a>
                    </div>
                    <div class="product-info">
                        <a class="product-name">${product.name}</a>
                        <div class="product-price">${product.price}<div class="cart-product">
                            <a href="./product-detailAL.html">
                                <svg width="40px" height="40px padding: 1rem 2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#363636">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 5L19 12H7.37671M20 16H8L6 3H3M11.5 7L13.5 9M13.5 9L15.5 7M13.5 9V3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
                                </svg>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            `;

            productItem.innerHTML = productItemContent;
            contentElement.appendChild(productItem);
        });
    }

    function handlePaginationClick(event) {
        event.preventDefault();
        if (event.target.tagName === 'A') {
            if (event.target.textContent === '<<') {
                currentPage = 1;
            } else if (event.target.textContent === '>>') {
                currentPage = Math.ceil(data.length / itemsPerPage);
            } else {
                currentPage = parseInt(event.target.textContent);
            }

            displayProducts(currentPage, searchInput.value);
        }
    }

    function handleSearch() {
        event.preventDefault(); 
        currentPage = 1;
        displayProducts(currentPage, searchInput.value);
    }
    
    searchButton.addEventListener('click', handleSearch);
    paginationElement.addEventListener('click', handlePaginationClick);
    searchButton.addEventListener('click', handleSearch);
    // Hiển thị sản phẩm trang đầu tiên khi trang web được tải
    displayProducts(currentPage, '');

    // Tạo nút phân trang
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Add "<<" link
    const firstPageLink = document.createElement('a');
    firstPageLink.href = '#';
    firstPageLink.textContent = '<<';
    paginationElement.appendChild(firstPageLink);

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.textContent = i;
        paginationElement.appendChild(pageLink);
    }

    // Add ">>" link
    const lastPageLink = document.createElement('a');
    lastPageLink.href = '#';
    lastPageLink.textContent = '>>';
    paginationElement.appendChild(lastPageLink);
   
});
