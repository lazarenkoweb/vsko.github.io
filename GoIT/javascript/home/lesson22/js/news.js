$(function() {

    var RSSReader = function () {

        this.feedUrl = 'http://node.dev.puzankov.com/rss/data';

        this.numPerPage = 5;

        this.articlesList = $('.articles');

        this.articleTmpl = $('.article_tmpl');

        this.pageNavigation = $('.page-navigation');

        this.init();
    };

    RSSReader.prototype.pageNum = 1;

    RSSReader.prototype.init = function () {
        var __self = this;

        this.getFeed(__self.getUrlHash());
        this.updateMenu();

        $(window).on('hashchange', function (e) {
            __self.pageNum = 1;
            __self.getFeed(__self.getUrlHash());
            __self.updateMenu();
        });

        this.pageNavigation.on('click', '.nav-page a', function(e) {
            e.preventDefault();
            __self.pageNum = $(this).text();
            __self.getFeed(__self.getUrlHash());
        });

        this.pageNavigation.on('click', '.nav-previous a', function(e) {
            e.preventDefault();
            __self.pageNum--;
            __self.getFeed(__self.getUrlHash());
        });

        this.pageNavigation.on('click', '.nav-next a', function(e) {
            e.preventDefault();
            __self.pageNum++;
            __self.getFeed(__self.getUrlHash());
        });
    };

    RSSReader.prototype.updateMenu = function () {
        var current = this.getUrlHash();

        $('.sf-menu li').each(function (i, item) {
            $(item).removeClass('current-menu-item');
        });

        $('.menu__li_' + current).addClass('current-menu-item');
    };

    RSSReader.prototype.getUrlHash = function () {
        return (window.location.hash || 'habr').replace('#', '');
    };

    RSSReader.prototype.getFeed = function (feedId) {
        var __self = this,
            hashList = [],
            currentHash = null;

        $('.sf-menu li a').each(function(i, item) {
            currentHash = $(item).attr('href').replace('#', '');
            hashList.push(currentHash);
        });

        if (hashList.indexOf(feedId) === -1) {
            this.showError('Error: Invalid hash');
            return;
        }

        $.ajax({
            url: this.feedUrl,
            data: { kind: feedId },
            method: 'GET',
            dataType: 'json'
        })
        .success(this.onGetData.bind(this))
        .error(function (error) {
            var errorText = JSON.parse(error.responseText).details;
            __self.showError(errorText);
        });
    };

    RSSReader.prototype.showError = function(message) {
        this.articlesList.html('<div class="error">' + message + '</div>');
        this.pageNavigation.fadeOut(2000);
    };

    RSSReader.prototype.onGetData = function (data) {
        this.renderFeed(data.items);
        this.renderPagination(data.items.length);
    };

    RSSReader.prototype.renderFeed = function (dataList) {
        var __self = this,
            listHtml = [],
            step = (this.numPerPage*this.pageNum),
            begin = step-this.numPerPage;

        // Debug info
        //console.log('All articles: ' + dataList.length);
        //console.log('All pages: ' + dataList.length/this.numPerPage);
        //console.log('Page num: ' + this.pageNum);
        //console.log('Slice: ' + begin + ' ' + step);
        //console.log('---');

        dataList.slice(begin, step).forEach(function (item) {
            listHtml.push(__self.renderItem(item));
        });

        this.articlesList.html(listHtml);
    };

    RSSReader.prototype.convertDate = function (date) {
        var stringDate = new Date(date);
        return stringDate.getDate() + '.' + stringDate.getMonth() + '.' + stringDate.getFullYear();
    };

    RSSReader.prototype.renderItem = function (item) {
        var newItem = this.articleTmpl.clone().removeClass('article_tmpl');

        newItem
            .find('.post-heading')
            .html(item.title);

        newItem
            .find('.excerpt')
            .html(item.summary);

        newItem
            .find('.author')
            .html(item.author);

        newItem
            .find('.date')
            .html(this.convertDate(item.pubDate));

        newItem
            .find('.action-button')
            .attr('href', item.guid);

        return newItem;
    };

    RSSReader.prototype.renderPagination = function(totalArticles) {
        var countPages = totalArticles/this.numPerPage,
            linksHtml = '';

        if (this.pageNum > 1) {
            linksHtml += '<div class="nav-previous"><a href="#">OLDER</a></div>';
        }

        for (var i=0; i<countPages; i++) {
            var num = i+1;
            if (this.pageNum == num) {
                linksHtml += '<div class="nav-page"><span>' + num + '</span></div>';
            } else {
                linksHtml += '<div class="nav-page"><a href="#">' + num + '</a></div>';
            }
        }

        if (this.pageNum < countPages) {
            linksHtml += '<div class="nav-next"><a href="#">NEWER</a></div>';
        }

        this.pageNavigation.html(linksHtml);
    };

    window.rssReader = new RSSReader();
});
