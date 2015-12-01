function Machine(power) {
    this._power = power;
    this._enabled = false;

    var self = this;

    this.enable = function() {
        self._enabled = true;
    };

    this.disable = function() {
        self._enabled = false;
    };
}

function Fridge(power) {
    Machine.apply(this, arguments);

    var food = [];

    this.addFood = function(item) {
        if (!this._enabled) {
            throw new Error('Холодильник выключен');
        }

        if (arguments.length == 1) {
            if (this.countFood() >= (power/100)) {
                throw new Error('Слишком много еды');
            }
            food.push(item);
        } else {
            for (var i=0; i<arguments.length; i++) {
                this.addFood(arguments[i]);
            }
        }
    };

    this.getFood = function() {
        return food.slice();
    };

    this.countFood = function() {
        return food.length;
    }
}

//var fridge = new Fridge(200);
//fridge.addFood("котлета"); // ошибка, холодильник выключен

//var fridge = new Fridge(500);
//fridge.enable();
//fridge.addFood("котлета");
//fridge.addFood("сок", "зелень");
//fridge.addFood("варенье", "пирог", "торт"); // ошибка, слишком много еды

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
alert( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

alert( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье
