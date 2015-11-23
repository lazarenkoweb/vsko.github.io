var month = [
    'The Evil',
    'The Vile',
    'The Cruel',
    'The Trashy',
    'The Despicable',
    'The Embarrassing',
    'The Disreputable',
    'The Atrocious',
    'The Twirling',
    'The Orange',
    'The Terrifying',
    'The Awkward'
];

var date = [
    'Mustache',
    'Pickle',
    'Hood Ornament',
    'Raisin',
    'Recycling Bin',
    'Potato',
    'Tomato',
    'House Cat',
    'Teaspoon',
    'Laundry Basket'
];

function getVillainName(birthday) {
    return month[birthday.getMonth()] + ' ' + date[birthday.getDate()%10];
}
