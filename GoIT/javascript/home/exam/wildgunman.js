(function() {
    function WildGunman() {

        this.dom = {
            'overlay': document.querySelector('.overlay'),
            'modal': document.querySelector('.modal'),
            'closeModal': document.getElementById('close-modal'),
            'help': document.getElementById('help'),
            'play': document.querySelector('.button.play'),
            'screen': document.querySelector('.screen'),
            'aim': document.querySelector('.screen.aim'),
            'message': document.querySelector('.message')
        };

        this.person = 1;
        this.gunman = null;
        this.statusShot = false;

        this.init();
    }

    WildGunman.prototype.init = function() {
        var __self = this;

        //__self.Play();

        this.dom.help.onclick = function(e) {
            __self.dom.modal.style.display = 'block';
        };

        this.dom.closeModal.onclick = function(e) {
            e.preventDefault();
            __self.dom.modal.style.display = 'none';
        };

        this.dom.play.onclick = function(e) {
            __self.Play();
        };

        this.dom.aim.onclick = function(e) {
            //console.log('x:' + e.layerX + ' y: ' + e.layerY);
            //console.log();
            //console.log(e);
            //console.log(__self.statusShot);

            // get element of shot
            var pointShot = e.toElement.className.split(' ')[0];

            __self.sound('sfx/shot.m4a').play();

            //switch(pointShot) {
            //    case 'screen': __self.doGameOver(); break;
            //    case 'gunman': __self.doShot(); break;
            //}
        };
    };

    WildGunman.prototype.Play = function() {
        var __self = this;

        //this.sound('sfx/intro.m4a').play();

        this.dom.overlay.style.display = 'none';
        this.dom.play.classList.remove('play');
        this.dom.play.classList.add('replay');
        this.dom.play.innerText = 'Replay';

        this.createGunman(this.dom.screen);

        //__self.Killed();
        //__self.Fire();

        this.moveToDuel(function() {
            __self.Duel();
            //__self.Killed();
        });
    };

    WildGunman.prototype.Killed = function() {
        var __self = this,
            step = 10,
            n = 0,
            hat = this.gunman.cloneNode();

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
            }
            step++;

        }, 200);
    };

    WildGunman.prototype.createGunman = function(screen) {
        var gunman = document.createElement('div');
        gunman.setAttribute('class', 'gunman gunman' + this.person + ' step1');

        screen.innerHTML = '';
        screen.appendChild(gunman);

        this.gunman = gunman;

        return gunman;
    };

    WildGunman.prototype.moveToDuel = function(action) {
        var __self = this,
            n = 0,
            step = 1;

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
        }, 120);
    };

    WildGunman.prototype.Duel = function() {
        var __self = this;

        this.sound('sfx/wait.m4a').play();

        setTimeout(this.Fire.bind(this), 3000);
    };

    WildGunman.prototype.Fire = function() {
        var __self = this,
            n = 0,
            step = 6;

        this.sound('sfx/fire.m4a').play();
        this.message('Fire!!!', 570, 190);

        this.statusShot = true;

        var __timerId = setInterval(function() {
            if (n === 4) {
                clearInterval(__timerId);
                __self.messageHide();
                __self.GameOver();
            } else {
                n++;
                step++;
                console.log(step);
                __self.gunman.classList.remove('step4');
                __self.gunman.classList.remove('step7');
                __self.gunman.classList.remove('step8');
                __self.gunman.classList.remove('step9');
                __self.gunman.classList.add('step' + step);
            }
        }, 120);
    };

    WildGunman.prototype.GameOver = function() {
        this.sound('sfx/death.m4a').play();

        this.dom.overlay.classList.remove('nogame');
        this.dom.overlay.classList.add('killed');
        this.dom.overlay.style.display = 'block';

        this.statusShot = false;
    };

    WildGunman.prototype.message = function(text, x, y) {
        var xPx = (x || 8) + 'px',
            yPx = (y || 120) + 'px';

        this.dom.message.style.display = 'block';
        this.dom.message.style.top = yPx;
        this.dom.message.style.left = xPx;
        this.dom.message.innerText = text;
    };

    WildGunman.prototype.messageHide = function() {
        if (this.dom.message.style.display == 'block') {

            this.dom.message.style.display = 'none';
            this.dom.message.removeAttribute('style');
        }
    };

    WildGunman.prototype.sound = function(sfx) {
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
 WildGunman.prototype.duel = function() {
 var __self = this;

 this.countStep = 7;

 var __timerId = setTimeout(function() {
 __self.countNum--;

 //console.log('shot');
 //character.classList.add('step7');
 //character.classList.add('step8');

 if (__self.countNum === 0) {
 clearTimeout(__timerId2);
 }

 //__self.duel2();

 }, 10);
 };
 */

//WildGunman.prototype.moveToDuelOld = function(action) {
//    var __self = this,
//        stateRight = parseInt(getComputedStyle(this.gunman).right);
//
//    this.gunman.classList.remove('step1');
//    this.gunman.classList.remove('step2');
//    this.gunman.classList.remove('step3');
//    this.gunman.style.right = stateRight + 10 + 'px';
//
//    var __timerId = setTimeout(function() {
//        if (__self.step >= 3) {
//            __self.step = 0;
//        }
//        __self.step++;
//
//        __self.moveToDuel(action);
//
//        __self.gunman.classList.add('step' + __self.step);
//    }, 100);
//
//    if (stateRight >= 330) {
//        this.gunman.classList.add('step4');
//        clearTimeout(__timerId);
//
//        action();
//    }
//};
//Function.prototype.repeat = function(num) {
//    var n = 1,
//        num = num || 1,
//        __call = this;
//
//    var timerId = setInterval(function() {
//        if (n <= num) {
//            n++;
//            __call();
//        }
//        else {
//            clearInterval(timerId);
//        }
//    }, 100);
//};
//
//WildGunman.prototype.repeatTo = function(num) {
//    var n = 0,
//        num = num || 1;
//
//    var timerId = setInterval(function() {
//        if (n < num) {
//            n++;
//            console.log(n);
//        }
//        else {
//            clearInterval(timerId);
//        }
//    }, 100);
//};
