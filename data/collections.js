
const candies = [
    {
        id: 1,
        name: 'Snowkers',
        description: 'Similar to Snickers but white as the snow.'
    },
    {
        id: 2,
        name: 'Venus',
        description: 'Who wants Mars, when you can get Venus!'
    },
    {
        id: 3,
        name: 'Brix',
        description: 'Just like Twix, but shaped like a brick.'
    },
    {
        id: 4,
        name: 'Rootsie Toll',
        description: 'An upside down Tootsie Roll!'
    },
    {
        id: 5,
        name: 'Z&Zs',
        description: 'M&M has made itself a powerful enemy.. We call it Zett-N-Zetts!'
    }
];

const offers = [
    {
        id: 1,
        name: 'Two unique',
        candies: [
            {
                id: 1,
                name: 'Snowkers',
                description: 'Similar to Snickers but white as the snow.'
            },
            {
                id: 2,
                name: 'Venus',
                description: 'Who wants Mars, when you can get Venus!'
            }
        ]
    },
    {
        id: 2,
        name: 'The Last of Us',
        candies: [
            {
                id: 3,
                name: 'Brix',
                description: 'Just like Twix, but shaped like a brick.'
            },
            {
                id: 4,
                name: 'Rootsie Toll',
                description: 'An upside down Tootsie Roll!'
            },
            {
                id: 5,
                name: 'Z&Zs',
                description: 'M&M has made itself a powerful enemy.. We call it Zett-N-Zetts!'
            }
        ]
    }
];

const pinatas = [
    {
        id: 1,
        name: 'Wheaty',
        surprise: '5 kg of Z&Zs!',
        maximumHits: 5,
        currentHits: 0
    },
    {
        id: 2,
        name: 'Snappy',
        surprise: 'Two meters of Brix!',
        maximumHits: 10,
        currentHits: 0
    }
];

module.exports = {
    candies,
    offers,
    pinatas
};
