import Product from './class_product.js'
import User from './class_user.js'

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const heading = $('#add-product__heading')
const submit = $('#add-product__submit')
const inputName = $('#add-product__name')
const inputPath = $('#add-product__path')
const inputOldPrice = $('#add-product__old-price')
const inputCurrentPrice = $('#add-product__current-price')
const inputSaled = $('#add-product__saled')
const inputBrand = $('#add-product__brand')
const inputOrigin = $('#add-product__origin')

const containerProducts = $('.container-products')
const cartListItems = $('.header__cart-list-item')

const quantityProductInCart = $('.header__cart-notice')
const notifyCart = $('.header__cart-list')

const categoryItems = $$('.category-item')

const loginBtn = $('.header__navbar-item-login')
const registerBtn = $('.header__navbar-item-register')
const modal = $('.modal')
const loginForm = $('.login')
const loginFormBtn = $('.btn__login')
const inputEmail = $('.auth-form__input-email')
const inputPassword = $('.auth-form__input-password')
const user = $('.header__navbar-user')
const logOutUser = $('.header_navbar-menu-item__logout')

const errorMessageEmail = $('.form-error-message__email')
const errorMessagePassword = $('.form-error-message__password')

let fakeUser = new User('vui@gmail.com', '123123')

let product1 = new Product(
    'Cáp chia nguồn VGA 6pin ra 2x8Pin (6+2) cấp nguồn cho card VGA',
    'https://cf.shopee.vn/file/6f5886a4c5e6429bf850f131fdc7d0b1',
    '65.000',
    '45.000',
    32,
    'Không rõ',
    'Hà Nội',
    10
)

let product2 = new Product(
    'Pin cmos Laptop PC 1 vỉ 5 viên dùng cho thiết bị điện tử ARIGATO PCA1',
    'https://cf.shopee.vn/file/a23a470f8863d87e6a0a30869adef12a',
    '15.000',
    '8.500',
    12,
    'Không rõ',
    'Hà Nội',
    10
)


let product3 = new Product(
    'Ram DDR3L 4GB 2Gb laptop ram DDR3 4Gb 2Gb bus 1066 1333 1600 pc3 pc3l 12800s 10600s 8500s',
    'https://cf.shopee.vn/file/c3e8d56e4e54f255f49512cf2cf92e4c',
    '180.000',
    '145.000',
    22,
    'Không rõ',
    'TP. Hồ Chí Minh',
    10
)
    
let product4 = new Product(
    'Máy Xay Thịt 300W Lõi Đồng, Máy Xay Đa Năng( Bảo Hành 1:1 45 ngày và BH 1 Năm)',
    'https://cf.shopee.vn/file/1c8977a48a51c877137e5ae3e27ed5ef',
    '300.000',
    '275.000',
    102,
    'Không rõ',
    'TP. Hồ Chí Minh',
    10
)

let product5 = new Product(
    'Máy hút bụi cầm tay mini xe hơi PH16 Hoco Chính Hãng Siêu sạch',
    'https://cf.shopee.vn/file/091d579f26cf1b8621f408d3abf7bd27',
    '600.000',
    '555.000',
    48,
    'Không rõ',
    'Hà Nội',
    9
)

let product6 = new Product(
    'MỚI NHẤT 2020 - NỒI CHIÊN KHÔNG DẦU NHẬT BẢN KENTA',
    'https://cf.shopee.vn/file/870299bb39cc17ac743f8384105d3250',
    '500.000',
    '435.000',
    92,
    'Không rõ',
    'TP. Hồ Chí Minh',
    10
)

let product7 = new Product(
    'Giày cầu lông / bóng chuyền Kawasaki K080, K088 chính hãng, đế kếp, chống lật cổ chân, bảo hành 12 tháng',
    'https://cf.shopee.vn/file/ff613596c6118b5a17103eaaa720f2d5',
    '700.000',
    '655.000',
    57,
    'Không rõ',
    'TP. Hồ Chí Minh',
    12
)

let product8 = new Product(
    'Túi du lich vuông, túi trống 4 size TULI chính hãng ms : 01020304',
    'https://cf.shopee.vn/file/86143111e12106dbe239e92305cc31a5',
    '350.000',
    '315.000',
    120,
    'Không rõ',
    'TP. Hồ Chí Minh',
    11
)

let product9 = new Product(
    'THÙNG ĐỰNG CÁ đa năng phụ kiện câu cá KK-9',
    'https://cf.shopee.vn/file/74298303564239cdd139dd1978302241',
    '345.000',
    '300.000',
    62,
    'Không rõ',
    'Hà Nội',
    10
)

const app = (() => {
    let myProducts = JSON.parse(localStorage.getItem('myProducts')) ?? [product1, product2, product3]
    let myProductsInCart  = JSON.parse(localStorage.getItem('myProductsInCart')) ?? []
    let users = []

    return {
        dataEdit: {
            isEdit: false,
            index: null,
        },

        categoryItem: 'laptop',
        productsLaptop: JSON.parse(localStorage.getItem('myProducts1')) ?? [product1, product2, product3],
        productsNoithat: JSON.parse(localStorage.getItem('myProducts2')) ?? [product4, product5, product6],
        productsThethao: JSON.parse(localStorage.getItem('myProducts3')) ?? [product7, product8, product9],

        localStorageProducts() {
            localStorage.setItem('myProducts', JSON.stringify(myProducts))
            if(this.categoryItem == 'laptop') {
                localStorage.setItem('myProducts1', JSON.stringify(myProducts))
                this.productsLaptop
            } else if(this.categoryItem == 'noithat') {
                localStorage.setItem('myProducts2', JSON.stringify(myProducts))
            } else if(this.categoryItem == 'thethao') {
                localStorage.setItem('myProducts3', JSON.stringify(myProducts))
            }
        },

        add(product) {
            if(this.dataEdit.isEdit) {
                myProducts[this.dataEdit.index] = product
                this.localStorageProducts()
                heading.innerHTML = "Thêm sản phẩm mới"
                submit.innerHTML = "ADD"
                this.dataEdit.isEdit = false
            } else {
                myProducts.push(product)
                this.localStorageProducts()
            }
        },
        delete(index) {
            if(confirm(`Bạn có chắc muốn xóa sản phẩm có tên: ${myProducts[index].name}`)) {
                myProducts.splice(index, 1)
                this.localStorageProducts() 
            }
        },
        edit(index) {
            inputName.value = myProducts[index].name
            inputPath.value = myProducts[index].path
            inputOldPrice.value = myProducts[index].oldPrice
            inputCurrentPrice.value = myProducts[index].currentPrice
            inputSaled.value = myProducts[index].saled
            inputBrand.value = myProducts[index].brand
            inputOrigin.value = myProducts[index].originName
            inputName.focus()
        },
        addToCart(index) {
            if(myProductsInCart.includes(myProducts[index])){
                myProducts[index].quantity++
                localStorage.setItem('myProductsInCart', JSON.stringify(myProductsInCart))
            } else {
                myProductsInCart.push(myProducts[index])
                myProductsInCart[myProductsInCart.length - 1].quantity = 1
                localStorage.setItem('myProductsInCart', JSON.stringify(myProductsInCart))
            }
        },
        deleteFromCart(index) {
            myProductsInCart.splice(index, 1)
            localStorage.setItem('myProductsInCart', JSON.stringify(myProductsInCart))
        },
        handleActions(e) {
            e.preventDefault()
            const editBtn = e.target.closest(".btn-edit-product")
            if(editBtn) {
                if(this.checkUserOnline()) {
                    heading.innerHTML = "Sửa lại sản phẩm!!!"
                    submit.innerHTML = "EDIT"
                    const index = editBtn.dataset.index
                    this.dataEdit.isEdit = true
                    this.dataEdit.index = index
                    this.edit(index)
                    this.render()
                } else {
                    alert("Hãy đăng nhập trước khi thực hiện thao tác")
                }
            }

            const addBtn = e.target.closest(".btn-add-product")
            if(addBtn) {
                if(this.checkUserOnline()) {
                    const index = addBtn.dataset.index
                    this.addToCart(index)
                    this.checkHasCart()
                    this.renderToCart()
                } else {
                    alert("Hãy đăng nhập trước khi thực hiện thao tác")
                }
            }

            const deleteBtn = e.target.closest(".btn-delete-product")
            if(deleteBtn) {
                if(this.checkUserOnline()) {
                    const index = deleteBtn.dataset.index
                    this.delete(index)
                    this.render()
                } else {
                    alert("Hãy đăng nhập trước khi thực hiện thao tác")
                }
            }
        },
        
        getCtegoryItemsIndex() {
            let i
            Array.from(categoryItems).forEach(function (categoryItem, index) {
                if(categoryItem.classList.contains('category-item--active')) {
                    i = index
                }
            })
            return i
        },

        handleClickCategoryItems() {
            for( let i = 0; i < categoryItems.length; i++ ) {
                categoryItems[i].onclick = (e) => {
                    e.preventDefault()
                    let index = this.getCtegoryItemsIndex()
                    localStorage.setItem('iActive', JSON.stringify(i))
                    categoryItems[index].classList.remove('category-item--active')
                    categoryItems[JSON.parse(localStorage.getItem('iActive'))].classList.add('category-item--active')
                    if(i==0) {
                        this.categoryItem = 'laptop'
                        myProducts = JSON.parse(localStorage.getItem('myProducts1')) ?? [product1, product2, product3]
                        this.localStorageProducts()
                    } else if(i==1) {
                        this.categoryItem = 'noithat'
                        myProducts = this.productsNoithat
                        this.localStorageProducts()
                    } else if(i==2) {
                        this.categoryItem = 'thethao'
                        myProducts = this.productsThethao
                        this.localStorageProducts()
                    }
                    this.render()
                }
            }
        },

        handleProducts(e) {
            const delProductBtn = e.target.closest('.header__cart-item-remove')
            if(delProductBtn) {
                if(this.checkUserOnline()) {
                    const index = delProductBtn.dataset.index
                    this.deleteFromCart(index)
                    this.checkHasCart()
                    this.renderToCart()
                } else {
                    alert("Hãy đăng nhập trước khi thực hiện thao tác")
                }
            }
        },

        checkHasCart() {
            if(myProductsInCart.length === 0 || quantityProductInCart.innerText == 0) {
                notifyCart.classList.add('header__cart-list-no-cart')
            } else {
                notifyCart.classList.remove('header__cart-list-no-cart')
            }
        },

        checkUserOnline() {
            let status = false
            users.forEach(user => {
                if(user.status === 'online') {
                    return status = true
                }
            })
            return status
        },

        renderToCart() {

            let htmls = myProductsInCart.map((product, index) => {
                return `
                    <li class="header__cart-item">
                        <img src="${product.path}" alt="" class="header__cart-img">
                        <div class="header__cart-item-info">
                            <div class="header__cart-item-head">
                                <h3 class="header__cart-item-name">${product.name}</h3>
                                <div class="header__cart-price-wrap">
                                    <span class="header__cart-item-price">${product.currentPrice}đ</span>
                                    <span class="header__cart-item-multi">x</span>
                                    <span class="header__cart-item-qnt">${product.quantity}</span>
                                </div>
                            </div>
                            <div class="header__cart-item-body">
                                <h2 class="header__cart-item-des">Phân loại hàng: Đen</h2>
                                <span class="header__cart-item-remove" data-index=${index}>Xoá</span>
                            </div>
                        </div>
                    </li>
                `
            }).join('')

            if(this.checkUserOnline()) {
                quantityProductInCart.innerText = myProductsInCart.length
                this.checkHasCart()
                cartListItems.innerHTML = htmls
            } else {
                quantityProductInCart.innerText = 0
                this.checkHasCart()
            }
        },

        render() {
            const htmls = myProducts.map((product, index) => {
                return `
                    <div class="col l-2-4 m-4 c-6">
                        <a class="home-product__item" href="">
                            <div class="home-product__item-img" style="background-image: url(${product.path})"></div>
                            <h4 class="home-product__item-name">${product.name}</h4>
                            <div class="home-product__item-price">
                                <span class="home-product__item-price-old">${product.oldPrice}đ</span>
                                <span class="home-product__item-price-current">${product.currentPrice}đ</span>
                            </div>
                            <div class="home-product__item-action">
                                <div class="home-product__item-heart">
                                    <i class="home-product__item-heart-icon-no-like fa-regular fa-heart"></i>
                                    <i class="home-product__item-heart-icon-liked fa-solid fa-heart"></i>
                                </div>
                                <div class="home-product__item-rating">
                                    <i class="home-product__item-star--gold fa-solid fa-star"></i>
                                    <i class="home-product__item-star--gold fa-solid fa-star"></i>
                                    <i class="home-product__item-star--gold fa-solid fa-star"></i>
                                    <i class="home-product__item-star--gold fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <span class="home-product__item-saled">${product.saled} Đã bán</span>
                            </div>
                            <div class="home-product__item-origin">
                                <span class="home-product__item-brand">${product.brand}</span>
                                <span class="home-product__item-origin-name">${product.originName}</span>
                            </div>
                            <div class="home-product__item-favourite">
                                <i class="fa-solid fa-check"></i>
                                <span>Yêu thích</span>
                            </div>
                            <div class="home-product__item-sale-off">
                                <span class="home-product__item-sale-off__percent">${Math.round((product.oldPrice - product.currentPrice)*100/product.oldPrice)}%</span>
                                <span class="home-product__item-sale-off__label">Giảm</span>
                            </div>
                            <div class="control-product">
                                <button class="btn-edit-product" data-index="${index}">Edit</button>
                                <button class="btn-add-product" data-index="${index}">Add</button>
                                <button class="btn-delete-product" data-index="${index}">Delete</button>
                            </div>
                        </a>
                    </div>
                `
            }).join('')

            containerProducts.innerHTML = htmls

        },
        init() {
            // Handle DOM events
            submit.onclick = () => {
                if(this.checkUserOnline()) {
                    const newProduct = new Product(inputName.value, inputPath.value, inputOldPrice.value, inputCurrentPrice.value, inputSaled.value, inputBrand.value, inputOrigin.value)
                    this.add(newProduct)
                    this.render()
                    
                    inputName.value = ""
                    inputPath.value = ""
                    inputOldPrice.value = ""
                    inputCurrentPrice.value = ""
                    inputSaled.value = ""
                    inputBrand.value = ""
                    inputOrigin.value = ""
                    inputName.focus()
                } else {
                    alert("Hãy đăng nhập trước khi thực hiện thao tác")
                }
            }

            loginBtn.onclick = function() {
                modal.classList.add('active')
            }

            modal.onclick = function() {
                modal.classList.remove('active')
            }

            loginForm.onclick = function(e) {
                e.stopPropagation()
            }

            loginFormBtn.onclick = () => {
                let email = inputEmail.value
                let password = inputPassword.value

                if(email === '' && password === '') {
                    inputEmail.classList.add('invalid')
                    errorMessageEmail.innerText = 'Vui lòng nhập trường này'
                    inputPassword.classList.add('invalid')
                    errorMessagePassword.innerText = 'Vui lòng nhập trường này'
                } else if (email === '') {
                    inputEmail.classList.add('invalid')
                    errorMessageEmail.innerText = 'Vui lòng nhập trường này'
                } else if (password === '') {
                    inputPassword.classList.add('invalid')
                    errorMessagePassword.innerText = 'Vui lòng nhập trường này'
                } else if(email === fakeUser.email && password === fakeUser.password) {
                    let user1 = new User(email, password)
                    user1.setStatus('online')
                    users.push(user1)
                    inputEmail.value =''
                    inputPassword.value = ''
                    errorMessagePassword.innerText = ''
                    modal.classList.remove('active')
                    loginBtn.classList.add('disabled')
                    registerBtn.classList.add('disabled')
                    user.classList.add('active')
                    this.renderToCart()
                    console.log(users)
                } else {
                    errorMessagePassword.innerText = 'Tài khoản hoặc mật khẩu không đúng, vui lòng nhập lại!'
                }
            }

            inputEmail.oninput = function() {
                inputEmail.classList.remove('invalid')
                errorMessageEmail.innerText = ''
            }
            inputPassword.oninput = function() {
                inputPassword.classList.remove('invalid')
                errorMessagePassword.innerText = ''
            }

            logOutUser.onclick = (e) => {
                e.preventDefault()
                user.classList.remove('active')
                loginBtn.classList.remove('disabled')
                registerBtn.classList.remove('disabled')
                users.pop()
                this.renderToCart()
                console.log(users)
            }

            this.handleClickCategoryItems()
            if (JSON.parse(localStorage.getItem('iActive'))) {
                let index = this.getCtegoryItemsIndex()
                categoryItems[index].classList.remove('category-item--active')
                categoryItems[JSON.parse(localStorage.getItem('iActive'))].classList.add('category-item--active')
            }

            containerProducts.onclick = this.handleActions.bind(this)
            cartListItems.onclick = this.handleProducts.bind(this)
            this.render()
            this.checkHasCart()
            this.renderToCart()
        }
    }
})()

app.init()
