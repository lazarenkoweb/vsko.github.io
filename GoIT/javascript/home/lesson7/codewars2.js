function createSecretHolder(secret) {
    this._secret = secret;

    this.getSecret = function() {
        return this._secret;
    };

    this.setSecret = function(secret) {
        this._secret = secret;
    };

    return this;
}

var obj = createSecretHolder(5);
console.log(obj.getSecret()); // 5
console.log(obj.setSecret(2));
console.log(obj.getSecret()); // 2
