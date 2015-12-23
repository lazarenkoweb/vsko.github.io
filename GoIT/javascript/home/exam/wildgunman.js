(function() {
    function WildGunman() {

        this.dom = {
            'overlay': document.querySelector('.overlay'),
            'modal': document.querySelector('.modal'),
            'closeModal': document.getElementById('close-modal'),
            'help': document.getElementById('help'),
            'play': document.querySelector('.button.play'),
            'screen': document.querySelector('.screen'),
            'message': document.querySelector('.message')
        };

        this.init();
    }

    WildGunman.prototype.init = function() {
        var __self = this;

        __self.play();

        this.dom.help.onclick = function(e) {
            __self.dom.modal.style.display = 'block';
        };

        this.dom.closeModal.onclick = function(e) {
            e.preventDefault();
            __self.dom.modal.style.display = 'none';
        };

        this.dom.play.onclick = function(e) {
            __self.play();
        };
    };

    WildGunman.prototype.play = function() {
        this.dom.overlay.style.display = 'none';
        this.dom.play.classList.remove('play');
        this.dom.play.classList.add('replay');
        this.dom.play.innerText = 'Replay';

        this.sound('sfx/win.m4a').play();

        // <div class="gunman gunman1 step1"></div>
        //var gunman = document.createDocumentFragment();
        //this.dom.screen.insertAdjacentHTML('afterbegin', '<div class="gunman gunman1 step1"></div>');
        var gunman = document.createElement('div');
        //console.log(gunman.classList);
        gunman.setAttribute('class', 'gunman gunman1 step1');
        this.dom.screen.appendChild(gunman);
        this.move(gunman);
        this.message('Hello!!!');
    };

    WildGunman.prototype.move = function(character) {
        //console.log(character.style);
        var __character = character,
            count = 0,
            timerId;

        //timerId = setTimeout(function() {
        //    count++;
        //    //__character.style.right = count + 'px';
        //    alert(1);
        //}, 10000);

        for (var i=0; i<370; i++) {
            character.style.right = i + 'px';
        }
    };

    WildGunman.prototype.sound = function(sfx) {
        return new Audio(sfx);
    };

    WildGunman.prototype.message = function(text) {
        this.dom.message.style.display = 'block';
        this.dom.message.style.left = '28%';
        this.dom.message.innerText = text;
    };

    window.wildGunman = new WildGunman();
})();