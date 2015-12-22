$(function () {
    function Cart () {
        var __self = this;

        this.lsFieldId = 'cart';

        this.domElems = {
            cart: $('.cart'),
            cartSize: $('.minicart .size'),
            itemTmpl: $('.cart__item_tmpl'),
            totalPrice: $('.cart .totals .price'),
            orderButton: $('.cart__make-order')
        };

        //$('.bigcart').click(function (e) {
        //    var item = {
        //        id: 'a-1',
        //        name: 'Клюшка для гольфа',
        //        price: '150',
        //        qty: '1'
        //    };
        //
        //    __self.addToCart(item);
        //});

        $('.bigcart').on('click', '.product-item', function() {
            var productIndex = $(this).attr('class').replace('product-item', '').trim(' '),
                item = {};

            switch (productIndex) {
                case 'pan': item = {id: 'a-1', name: 'Сковородка', price: '150', qty: '1'}; break;
                case 'guitar': item = {id: 'a-4', name: 'Гитара', price: '250', qty: '1'}; break;
                case 'phone': item = {id: 'a-3', name: 'Телефон', price: '32', qty: '1'}; break;
                case 'chainsaw': item = {id: 'b-1', name: 'Бензопила', price: '100', qty: '1'}; break;
                case 'tyres': item = {id: 'b-8', name: 'Шины', price: '86', qty: '1'}; break;
                default: item = {id: 'x-1', name: 'Неизветсный товар', price: '0', qty: '1'};
            }

            __self.addToCart(item);
        });

        $('.bigcart').on('click', '.button-random', function() {
            var productIndex = ['pan', 'guitar', 'phone', 'chainsaw', 'tyres'],
                productData = {
                    'pan': {id: 'a-1', name: 'Сковородка', price: '150', qty: '1'},
                    'guitar': {id: 'a-4', name: 'Гитара', price: '250', qty: '1'},
                    'phone': {id: 'a-3', name: 'Телефон', price: '32', qty: '1'},
                    'chainsaw': {id: 'b-1', name: 'Бензопила', price: '100', qty: '1'},
                    'tyres': {id: 'b-8', name: 'Шины', price: '86', qty: '1'}
                },
                r =  Math.floor(Math.random()*productIndex.length);

            __self.addToCart(productData[productIndex[r]]);
        });

        //this.domElems.cart.on('click', '.popbtn', function() {
        //    console.log($(this));
        //});

        this.domElems.orderButton.click(function() {
            alert('Вы заказали ' + __self.getCartSize() + ' товаров на сумму: $' + __self.getTotalPrice());
            __self.cartArray = [];
            __self.updateStorage();
            __self.viewCart();
        });
    }

    Cart.prototype.init = function () {
        window.ls.initField(this.lsFieldId);

        this.viewCart();
    };

    Cart.prototype.updateStorage = function () {
        window.ls.updateField(this.lsFieldId, this.cartArray);
    };

    Cart.prototype.getCartItems = function () {
        this.cartArray = window.ls.getFieldData(this.lsFieldId);

        return this.cartArray;
    };

    Cart.prototype.getCartSize = function () {
        var size = 0;

        this.getCartItems().forEach(function(item) {
            size += parseInt(item.qty);
        });

        return size;
    };

    Cart.prototype.getTotalPrice = function () {
        var items = this.getCartItems(),
            totalPrice = 0;

        items.forEach(function (item) {
            totalPrice += item.price * item.qty;
        });

        return totalPrice;
    };

    Cart.prototype.viewCart = function () {
        this.viewTotalPrice();

        this.viewCartList();

        this.viewCartSize();
    };

    Cart.prototype.viewCartList = function () {
        var __self = this,
            items = this.getCartItems(),
            listHtml = [];

        items.forEach(function (item) {
            listHtml.push(__self.viewCartItem(item));
        });

        this.clearViewCart();

        $('.cart .totals').before(listHtml);
    };

    Cart.prototype.clearViewCart = function() {
        $('.cart__item').remove();
    };

    Cart.prototype.viewCartSize = function() {
        this.domElems.cartSize.text(this.getCartSize());
    };

    Cart.prototype.viewCartItem = function (item) {
        var tmpl = this.domElems.itemTmpl.clone().removeClass('cart__item_tmpl'),
            itemPrice = item.qty * item.price;

        tmpl.find('.quantity').text(item.qty);
        tmpl.find('.itemName').text(item.name);
        tmpl.find('.price').text('$' + itemPrice);

        return tmpl;
    };

    Cart.prototype.addToCart = function (item) {
        var foundProduct = false;

        this.cartArray.forEach(function(cartItem) {
            if (cartItem.id === item.id) {
                cartItem.qty++;
                cartItem.price = parseInt(item.price);
                foundProduct = true;
            }
        });

        if (!foundProduct) {
            this.cartArray.push(item);
        }

        this.updateStorage();

        this.viewCart();
    };

    Cart.prototype.viewTotalPrice = function () {
        this.domElems.totalPrice.text('$' + this.getTotalPrice());
    };

    window.cart = new Cart();

    cart.init();

});
