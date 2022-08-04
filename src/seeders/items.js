export default [{
    id: 1,
    alias: 'barbarian',
    title: 'The Barbarian',
    descr: 'The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for destruction. He has Killer yellow horseshoe mustache.',
    img: require('@/assets/img/barbarian.png'),
    level: 4,
    link: '/barbarian',
    info: [{
        title: 'training',
        value: '20s'
      },
      {
        title: 'speed',
        value: '16'
      },
      {
        title: 'cost',
        value: '150'
      }
    ]
  },
  {
    id: 2,
    title: 'Archer',
    alias: 'archer',
    descr: 'The Archer is a female warrior with sharp eyes. She wears a short, light green dress, a hooded cape, a leather belt and an attached small pouch.',
    img: require('@/assets/img/archer.png'),
    link: '/archer',
    level: 4,
    info: [{
        title: 'training',
        value: '25s'
      },
      {
        title: 'speed',
        value: '24'
      },
      {
        title: 'cost',
        value: '300'
      }
    ]
  },
  {
    id: 3,
    alias: 'giant',
    title: 'The Giant',
    descr: 'Slow, steady and powerful, Giants are massive warriors that soak up huge amounts of damage. Show them a turret or cannon and you will see their fury unleashed!',
    img: require('@/assets/img/giant.png'),
    level: 4,
    link: '/giant',
    info: [{
        title: 'training',
        value: '2m'
      },
      {
        title: 'speed',
        value: '12'
      },
      {
        title: 'cost',
        value: '2250'
      }
    ]
  },
  {
    id: 4,
    alias: 'goblin',
    title: 'The Goblin',
    descr: 'These pesky little creatures only have eyes for one thing: LOOT! They are faster than a Spring Trap, and their hunger for resources is limitless.',
    img: require('@/assets/img/goblin.png'),
    level: 5,
    link: '/goblin',
    info: [{
        title: 'training',
        value: '30s'
      },
      {
        title: 'speed',
        value: '32'
      },
      {
        title: 'cost',
        value: '100'
      }
    ]
  },
  {
    id: 5,
    title: 'Wizard',
    alias: 'wizard',
    descr: 'The Wizard is a terrifying presence on the battlefield. Pair him up with some of his fellows and cast concentrated blasts of destruction on anything, land or sky!',
    img: require('@/assets/img/wizard.png'),
    level: 6,
    link: '/wizard',
    info: [{
        title: 'training',
        value: '5m'
      },
      {
        title: 'speed',
        value: '16'
      },
      {
        title: 'cost',
        value: '3800'
      }
    ]
  },

]
