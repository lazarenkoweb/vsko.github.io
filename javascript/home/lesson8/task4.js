function Article() {
    this.created = new Date();

    Article.count++;
    Article.date = this.created;
}

Article.showStats = function() {
    console.log('Всего: ' + this.count + ', Последняя: ' + this.date);
};

Article.count = 0;

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)
