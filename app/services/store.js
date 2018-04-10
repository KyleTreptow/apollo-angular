app.service('store', function () {
    this.basicStore = function () {
        return [
            {
                name: 'Short Sword',
                price: '10 gp'
            },
            {
                name: 'Wooden Shield',
                price: '15 gp'
            }
        ]
    }

    this.magicStore = function () {
        return [
            {
                name: 'Healing Potion',
                price: '50 gp'
            },
            {
                name: '+1 Long Sword',
                price: '500 gp'
            }
        ]
    }

    this.legendaryStore = function () {
        return [
            {
                name: 'Sword of Awesomeness',
                price: '1000 gp'
            }
        ]
    }
});
