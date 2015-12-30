(function() {
    function WildGunman() {
        this.setting = {
            'sound': 'modern', // classic, modern
            'volume': 0.5
        };

        this.dom = {
            'overlay': document.querySelector('.overlay'),
            'screen': document.querySelector('.screen'),
            'aim': document.querySelector('.screen.aim'),
            'scoreYou': document.querySelector('.scores div:first-child .count'),
            'scoreGunman': document.querySelector('.scores div:last-child .count'),
            'moneyReward': document.querySelector('.reward .count'),
            'message': document.querySelector('.message'),
            'modal': document.querySelector('.modal'),
            'buttonModalClose': document.querySelector('.modal .close'),
            'buttonPlay': document.getElementById('play'),
            'buttonReplay': document.getElementById('replay'),
            'buttonContinue': document.getElementById('continue'),
            'buttonReset': document.getElementById('reset'),
            'buttonHelp': document.getElementById('help')
        };

        this.level = 1;
        this.scoreYou = 0;
        this.scoreGunman = 0;
        this.moneyReward = 0;
        this.person = 5;
        this.gunman = null;
        this.statusShot = false;
        this.timerShot = null;
        this.timerAnimation = [];
        this.timerDuel = 1000;

        this.init();
    }

    WildGunman.prototype.init = function() {
        var __self = this;

        this.sound = {
            'death': this.loadSound('death'),
            'fire': this.loadSound('fire'),
            'foul': this.loadSound('foul'),
            'intro': this.loadSound('intro'),
            'shot': this.loadSound('shot'),
            'shotFall': this.loadSound('shot-fall'),
            'wait': this.loadSound('wait'),
            'win': this.loadSound('win')
        };

        this.setOverlay('start');

        this.dom.buttonPlay.onclick = function(e) {
            e.preventDefault();
            __self.doPlay();
        };

        this.dom.buttonReplay.onclick = function(e) {
            e.preventDefault();
            __self.doReplay();
        };

        this.dom.buttonContinue.onclick = function(e) {
            e.preventDefault();
            __self.doContinue();
        };

        this.dom.buttonReset.onclick = function(e) {
            e.preventDefault();
            __self.doReset();
        };

        this.dom.buttonHelp.onclick = function(e) {
            e.preventDefault();
            __self.showModal();
        };

        this.dom.buttonModalClose.onclick = function(e) {
            e.preventDefault();
            __self.hideModal();
        };

        this.dom.aim.onclick = function(e) {
            var pointShot = e.toElement.className.split(' ')[0];

            if (__self.statusShot && pointShot === 'gunman') {
                __self.sound.shotFall.play();
                __self.moveToKilled(function() {
                    __self.showSay('You won!!!', 'right');
                    __self.youWon();
                });
            } else {
                __self.sound.shot.play();
                __self.clearAnimation();
                __self.gameOver();
            }
        };
    };

    WildGunman.prototype.doPlay = function() {
        var __self = this;

        this.stopSound(this.sound);
        this.sound.intro.play();
        this.showMessage('Level ' + this.level);
        this.hideOverlay();
        this.createGunman(true);
        this.clearAnimation();

        var timerId = this.moveToDuel(function() {
            __self.doDuel();
        });

        this.timerAnimation.push(timerId);
    };

    WildGunman.prototype.doReplay = function() {
        this.doPlay();
    };

    WildGunman.prototype.doContinue = function() {
        this.level++;
        this.timerDuel -= 150;
        this.clearAnimation();
        this.doPlay();
    };

    WildGunman.prototype.doReset = function() {
        this.level = 1;
        this.statusShot = false;
        this.hideMessage();
        this.stopSound(this.sound);
        this.clearAnimation();
        this.clearScores();
        this.clearScreen();
        this.setOverlay('start');
    };

    WildGunman.prototype.youWon = function() {
        var __self = this;

        var timerId = setTimeout(function() {
            __self.moneyReward += 100;
            __self.scoreYou++;
            __self.addScores();
            __self.sound.win.play();
            __self.setOverlay('continue');
        }, 2000);

        this.timerAnimation.push(timerId);
    };

    WildGunman.prototype.gameOver = function() {
        var __self = this;

        this.sound.intro.pause();

        var timerId = setTimeout(function() {
            __self.scoreGunman++;
            __self.addScores();
            __self.sound.death.play();
            __self.clearAnimation();
            __self.setOverlay('killed');
        }, 2000);

        this.moneyReward -= 150;
        this.timerDuel = 1000;
        this.timerAnimation.push(timerId);
    };

    WildGunman.prototype.addScores = function() {
        this.dom.scoreYou.innerText = this.scoreYou;
        this.dom.scoreGunman.innerText = this.scoreGunman;
        this.dom.moneyReward.innerText = this.moneyReward;
    };

    WildGunman.prototype.clearScores = function() {
        this.scoreYou = 0;
        this.scoreGunman = 0;
        this.moneyReward = 0;

        this.addScores();
    };

    WildGunman.prototype.setOverlay = function(name) {
        this.dom.overlay.classList.remove('start');
        this.dom.overlay.classList.remove('killed');
        this.dom.overlay.classList.remove('continue');

        switch(name) {
            case 'start':
                this.showButton('play');
                this.dom.overlay.classList.add('start');
            break;
            case 'killed':
                this.showButton('replay');
                this.dom.overlay.classList.add('killed');
            break;
            case 'continue':
                this.showButton('continue');
                this.dom.overlay.classList.add('continue');
            break;
        }

        this.dom.overlay.style.display = 'block';
    };

    WildGunman.prototype.hideOverlay = function() {
        this.dom.overlay.style.display = 'none';
    };

    WildGunman.prototype.showButton = function(name) {
        this.dom.buttonPlay.style.display = 'none';
        this.dom.buttonReplay.style.display = 'none';
        this.dom.buttonContinue.style.display = 'none';

        switch(name) {
            case 'play':
                this.dom.buttonPlay.style.display = 'block';
            break;
            case 'replay':
                this.dom.buttonReplay.style.display = 'block';
            break;
            case 'continue':
                this.dom.buttonContinue.style.display = 'block';
            break;
        }
    };

    WildGunman.prototype.showModal = function() {
        this.dom.modal.style.display = 'block';
    };

    WildGunman.prototype.hideModal = function() {
        this.dom.modal.style.display = 'none';
    };

    WildGunman.prototype.showMessage = function(text, x, y) {
        var xPx = x || 15,
            yPx = y || 125;

        this.dom.message.classList.remove('say');
        this.dom.message.classList.remove('arrow-left');
        this.dom.message.classList.remove('arrow-right');

        this.dom.message.style.top = yPx + 'px';
        this.dom.message.style.left = xPx + 'px';
        this.dom.message.innerText = text;
        this.dom.message.style.display = 'block';

        return this.dom.message;
    };

    WildGunman.prototype.hideMessage = function() {
        this.dom.message.style.display = 'none';
    };

    WildGunman.prototype.showSay = function(text, x, y, side) {
        var xPx = x || 10,
            yPx = y || 135;

        if (arguments.length === 2) {
            var gunmanLeft = this.gunman.offsetLeft,
                gunmanTop = this.gunman.offsetTop;

            side = x;
            gunmanTop += Math.floor(Math.random() * (85 - 80 + 1) + 80);

            if (side == 'right') {
                gunmanLeft += 120;
            }
            else if (side == 'left') {
                gunmanLeft -= 230;
            }

            xPx = gunmanLeft;
            yPx = gunmanTop;
        }

        var message = this.showMessage(text, xPx, yPx);

        message.classList.add('say');
        message.classList.remove('arrow-left');
        message.classList.remove('arrow-right');

        if (side === 'right') {
            message.classList.add('arrow-left');
        } else if (side === 'left') {
            message.classList.add('arrow-right');
        }
    };

    WildGunman.prototype.addScreen = function(element) {
        this.dom.screen.appendChild(element);
    };

    WildGunman.prototype.clearScreen = function() {
        this.dom.screen.innerHTML = '';
    };

    WildGunman.prototype.createGunman = function(rand) {
        if (rand) {
            this.person = Math.floor((Math.random() * 5) + 1);
            //this.person = 2;
        }
        var gunman = document.createElement('div');
        gunman.setAttribute('class', 'gunman person' + this.person + ' step1');

        this.clearScreen();
        this.addScreen(gunman);
        this.gunman = gunman;

        return gunman;
    };

    WildGunman.prototype.moveToDuel = function(actionDuel) {
        var __self = this,
            n = 0,
            step = 1;

        var timerId = setInterval(function() {
            if (n === 33) {
                clearInterval(timerId);
                __self.gunman.classList.remove('step1');
                __self.gunman.classList.add('step4');
                if (actionDuel) { actionDuel(); }
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
        }, 100); // 100 - default

        this.timerAnimation.push(timerId);
    };

    WildGunman.prototype.moveToBang = function(actionBang) {
        var __self = this,
            n = 0,
            step = 4;

        this.statusShot = false;

        var timerId = setInterval(function() {
            if (n === 4) {
                clearInterval(timerId);
                if (actionBang) { actionBang(); }
            } else {
                n++;
                step++;
                __self.gunman.classList.remove('step4');
                __self.gunman.classList.remove('step5');
                __self.gunman.classList.remove('step6');
                __self.gunman.classList.remove('step7');
                __self.gunman.classList.add('step' + step);
            }
        }, 120);

        this.timerAnimation.push(timerId);
    };

    WildGunman.prototype.moveToKilled = function(actionKilled) {
        var __self = this,
            n = 0,
            step = 8,
            hat = this.gunman.cloneNode();

        this.statusShot = false;
        clearTimeout(this.timerShot);

        var timerId = setInterval(function() {
            if (step === 10) {
                clearInterval(timerId);
            }
            __self.gunman.classList.add('step' + step);
            if (step === 9) {
                hat.classList.remove('step1');
                hat.classList.add('step11');
                __self.dom.screen.appendChild(hat);

                var timerId2 = setInterval(function() {
                    if (n === 114) {
                        clearInterval(timerId2);
                        if (actionKilled) { actionKilled(); }
                    }
                    if (n < 80) {
                        hat.style.top = -35 - n + 'px';
                    } else {
                        hat.style.top =  parseInt(getComputedStyle(hat).top) + n/100 + 'px';
                    }
                    if (n > 20) {
                        hat.style.right = parseInt(getComputedStyle(hat).right) + 1 + 'px';
                    }
                    n++;
                }, 2);

                __self.timerAnimation.push(timerId2);
            }
            step++;
        }, 200);

        this.timerAnimation.push(timerId);
    };

    WildGunman.prototype.doDuel = function() {
        this.sound.intro.pause();
        this.sound.wait.play();
        this.timerShot = setTimeout(this.doFire.bind(this), 1500);
        this.timerAnimation.push(this.timerShot);
    };

    WildGunman.prototype.doFire = function() {
        var __self = this;

        this.statusShot = true;
        this.sound.fire.play();
        this.showSay('Fire!!!', 'right');

        this.timerShot = setTimeout(function() {
            __self.sound.shot.play();
            __self.moveToBang(function() {
                __self.showSay('You lost!!!', 'left');
            });
            __self.gameOver();
        }, this.timerDuel);
    };

    WildGunman.prototype.clearAnimation = function() {
        clearTimeout(this.timerShot);
        for (var i=0; i<this.timerAnimation.length; i++) {
            clearInterval(this.timerAnimation[i]);
            this.timerAnimation.splice(0, 1);
        }
    };

    WildGunman.prototype.loadSound = function(name) {
        var sfx = 'sfx/' + this.setting.sound + '/' + name + '.m4a',
            audio = new Audio(sfx);
            audio.volume = this.setting.volume;
        return audio;
    };

    WildGunman.prototype.stopSound = function(soundList) {
        var sound;
        for (sound in soundList) {
            soundList[sound].load();
        }
    };

    window.wildGunman = new WildGunman();
})();
