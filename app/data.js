function numberVotes(){
    // return Math.floor((Math.random()*50)+15);
    return 1;
}

const children=[
    {
        id:1,
        firstName:"First name: Minions",
        lastName:"Last name: Minions",
        gender:"Gender: female",
        img:'http://funnyminionsmemes.com/wp-content/uploads/2016/04/40-Funny-Minions-Quotes-and-sayings-23-Minion-Quotes-and-Sayings-500x496.jpg',
        votes:numberVotes(),
        // toysNum:1
    },
    {
        id:2,
        firstName:"First name: Minions",
        lastName:"Last name: Minions",
        gender:"Gender: male",
        img:"https://s-media-cache-ak0.pinimg.com/736x/34/21/40/342140658301011dc3f531a3f49ee0f7.jpg",
        votes:numberVotes(),
        // toysNum:4
    },
    {
        id:3,
        firstName:"First name: Minions",
        lastName:"Last name: Minions",
        gender:"Gender: male",
        img:"http://quotesnhumor.com/wp-content/uploads/2015/06/Top-39-Funniest-Minions-Pictures-Funny-Humorous.jpg",
        votes:numberVotes(),
        // toysNum:5
    }
];
export{children,numberVotes};
