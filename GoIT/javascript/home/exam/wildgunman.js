(function() {
    function WildGunman() {

        this.dom = {
            'overlay': document.querySelector('.overlay'),
            'modal': document.querySelector('.modal'),
            'closeModal': document.getElementById('close-modal'),
            'play': document.querySelector('.button.play'),
            'reset': document.getElementById('reset'),
            'help': document.getElementById('help'),
            'screen': document.querySelector('.screen'),
            'aim': document.querySelector('.screen.aim'),
            'message': document.querySelector('.message'),
        };

        this.person = 1;
        this.gunman = null;
        this.statusShot = false;
        this.timerShot = null;
        this.timerInterval = [];

        this.init();
    }

    WildGunman.prototype.init = function() {
        var __self = this;

        //this.doPlay();

        this.dom.help.onclick = function(e) {
            __self.dom.modal.style.display = 'block';
        };

        this.dom.closeModal.onclick = function(e) {
            e.preventDefault();
            __self.dom.modal.style.display = 'none';
        };

        this.dom.play.onclick = function(e) {
            __self.doPlay();
        };

        this.dom.reset.onclick = function(e) {
            __self.doReset();
        };

        this.dom.aim.onclick = function(e) {
            var pointShot = e.toElement.className.split(' ')[0];

            __self.sound('shot').play();

            if (__self.statusShot && pointShot === 'gunman') {
                __self.doKilled();
                __self.sound('win').play();
                __self.doContinue();
            } else {
                __self.gameOver();
            }
        };
    };

    WildGunman.prototype.doPlay = function() {
        var __self = this;

        this.dom.overlay.style.display = 'none';

        //this.sound('intro').play();
        __self.hideSay();

        this.createGunman();

        this.moveToDuel(function() {
            __self.Duel();
        });
    };

    WildGunman.prototype.doReset = function() {
        this.dom.overlay.classList.remove('killed');
        this.dom.overlay.classList.remove('continue');
        this.dom.overlay.classList.add('played');

        this.dom.play.classList.remove('replay');
        this.dom.play.classList.remove('continue');
        this.dom.play.classList.add('play');
        this.dom.play.innerText = 'Play';

        this.dom.overlay.style.display = 'block';

        this.clearScreen();
        this.clearAnimation();
    };

    WildGunman.prototype.gameOver = function() {
        this.sound('death').play();

        this.dom.overlay.classList.remove('played');
        this.dom.overlay.classList.remove('continue');
        this.dom.overlay.classList.add('killed');
        this.dom.overlay.style.display = 'block';

        this.dom.play.classList.remove('play');
        this.dom.play.classList.add('replay');
        this.dom.play.innerText = 'Replay';

        this.clearAnimation();
    };

    WildGunman.prototype.doContinue = function() {
        this.dom.overlay.classList.remove('played');
        this.dom.overlay.classList.add('continue');
        this.dom.overlay.style.display = 'block';

        this.dom.play.classList.remove('play');
        this.dom.play.classList.add('continue');
        this.dom.play.innerText = 'Continue';
    };

    WildGunman.prototype.createGunman = function() {
        var gunman = document.createElement('div');
        gunman.setAttribute('class', 'gunman gunman' + this.person + ' step1');

        this.dom.screen.innerHTML = '';
        this.dom.screen.appendChild(gunman);
        this.gunman = gunman;

        return gunman;
    };

    WildGunman.prototype.removeGunman = function() {};

    WildGunman.prototype.clearScreen = function() {
        this.dom.screen.innerHTML = '';
        clearTimeout(this.timerShot);
    };

    WildGunman.prototype.clearAnimation = function() {
        for (var i=0; i<this.timerInterval.length; i++) {
            clearInterval(this.timerInterval[i]);
        }
    };

    WildGunman.prototype.moveToDuel = function(action, time) {
        var __self = this,
            n = 0,
            step = 1,
            time = time || 100;

        var __timerId = setInterval(function() {
            if (n === 33) {
                clearInterval(__timerId);
                __self.gunman.classList.remove('step1');
                __self.gunman.classList.add('step4');
                action();
            } else {
                n++;
                if (step >= 3) {
                    step = 0;
                }
                step++;
                __self.gunman.classList.remove('step1');
                __self.gunman.classList.remove('step2');
                __self.gunman.classList.remove('step3');
                __self.gunman.classList.add('step' + step);
                __self.gunman.style.right = parseInt(getComputedStyle(__self.gunman).right) + 10 + 'px';
            }
        }, time);

        __self.timerInterval.push(__timerId);
    };

    WildGunman.prototype.Duel = function() {
        var __self = this;

        this.sound('wait').play();

        this.timerShot = setTimeout(this.doFire.bind(this), 3000);
    };

    WildGunman.prototype.doFire = function() {
        var __self = this;

        this.sound('fire').play();
        this.say('Fire!!!', 570, 190);
        this.statusShot = true;

        this.timerShot = setTimeout(function() {
            __self.doBang();
            __self.gameOver();
        }, 1000);
    };

    WildGunman.prototype.doBang = function() {
        var __self = this,
            n = 0,
            step = 6;

        this.statusShot = false;

        var __timerId = setInterval(function() {
            if (n === 4) {
                clearInterval(__timerId);
                __self.sound('shot-fall').play();
            } else {
                n++;
                step++;
                __self.gunman.classList.remove('step4');
                __self.gunman.classList.remove('step7');
                __self.gunman.classList.remove('step8');
                __self.gunman.classList.remove('step9');
                __self.gunman.classList.add('step' + step);
            }
        }, 120);

        __self.timerInterval.push(__timerId);
    };

    WildGunman.prototype.doKilled = function() {
        var __self = this,
            step = 10,
            n = 0,
            hat = this.gunman.cloneNode();

        clearTimeout(this.timerShot);

        var __timerId = setInterval(function() {
            if (step === 12) {
                clearInterval(__timerId);
            }
            __self.gunman.classList.add('step' + step);
            if (step === 11) {
                hat.classList.remove('step1');
                hat.classList.add('step13');

                __self.dom.screen.appendChild(hat);

                var __timerId2 = setInterval(function() {

                    if (n === 269) {
                        clearInterval(__timerId2);
                    }

                    hat.style.top = -230+n + 'px';
                    n++;
                    //hat.style.right = parseInt(getComputedStyle(__self.gunman).right) + n/1.5 + 'px';
                }, 5);

                __self.timerInterval.push(__timerId2);
            }
            step++;
        }, 200);

        __self.timerInterval.push(__timerId);

        this.hideSay();
    };

    WildGunman.prototype.say = function(text, x, y) {
        var xPx = (x || 8) + 'px',
            yPx = (y || 120) + 'px';

        this.dom.message.classList.add('arrow-left');
        this.dom.message.style.display = 'block';
        this.dom.message.style.top = yPx;
        this.dom.message.style.left = xPx;
        this.dom.message.innerText = text;
    };

    WildGunman.prototype.hideSay = function() {
        if (this.dom.message.style.display == 'block') {
            this.dom.message.style.display = 'none';
            this.dom.message.removeAttribute('style');
        }
    };

    WildGunman.prototype.sound = function(name) {
        var sfx = 'sfx/' + name + '.m4a';
        return new Audio(sfx);
    };

    WildGunman.prototype.out = function() {
        console.log('out');
    };

    Function.prototype.defer = function(ms) {
        setTimeout(this, ms);
    };

    Function.prototype.delay = function(ms) {
        ms += new Date().getTime();
        while (new Date() < ms) {}
    };

    window.wildGunman = new WildGunman();
})();

/*
setTimeout
    Duel        3000
    doFire      1000
setInterval
    moveToDuel  100
    doBang      120
    doKilled    200 5
 */