/**
 * Created by bsjoe on 1/8/17.
 */
eventsApp.factory('eventData', function() {
   return {
       event : {
        name: 'Angular Boot Camp',
        date: '1/1/2013',
        time: '10:30 am',
        location: {
        address: 'Google Headquarters',
            city: ' Mountain View',
            province: 'CA'
        },
        imageUrl:'/img/angularjs-logo.png',
            sessions: [
        {
            name : 'Directives Msterclass',
            createrName: 'Bob Smith',
            duration: 1,
            level: 'Advanced',
            abstract: 'In this session you will learn the ins and outs of directives!',
            upVoteCount:0
        },
        {
            name : 'Scopes for fun and profit',
            createrName: 'John Doe',
            duration: 2,
            level: 'Introductory',
            abstract: 'This session will take a closer look at scopes. Learn what they do, how they do it, and how to get them to do it',
            upVoteCount:0
        },
        {
            name: 'Well Behaved Controllers',
            createrName: 'Jane Doe',
            duration: 4,
            level: 'Intermediate',
            abstract: 'Controllers are the beginning of everthing Angular does.  Learn how to craft controllers that will win the respect of your friends and neighbors ',
            upVoteCount:0
        }
    ]
    }
  } ;
});