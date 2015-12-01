function Menu(options) {
    var options = Object.create(options);
    options.width = options.width || 100;
    options.height = options.height || 200;

    console.log(options.width);
    console.log(options.height);
}

var options = {
    width: 100,
    height: 200
};

Menu(options);
