import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

interface Props {
  data: [];
}

const myData2 = [
  {
    login: 'tomxkay',
    id: 26029124,
    node_id: 'MDQ6VXNlcjI2MDI5MTI0',
    avatar_url: 'https://avatars2.githubusercontent.com/u/26029124?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/tomxkay',
    html_url: 'https://github.com/tomxkay',
    followers_url: 'https://api.github.com/users/tomxkay/followers',
    following_url:
      'https://api.github.com/users/tomxkay/following{/other_user}',
    gists_url: 'https://api.github.com/users/tomxkay/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/tomxkay/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/tomxkay/subscriptions',
    organizations_url: 'https://api.github.com/users/tomxkay/orgs',
    repos_url: 'https://api.github.com/users/tomxkay/repos',
    events_url: 'https://api.github.com/users/tomxkay/events{/privacy}',
    received_events_url: 'https://api.github.com/users/tomxkay/received_events',
    type: 'User',
    site_admin: false,
    name: 'Thomas Kay',
    company: 'MedProcure',
    blog: '',
    location: 'Charlotte',
    email: null,
    hireable: true,
    bio: 'I write typescript.',
    public_repos: 7,
    public_gists: 4,
    followers: 4,
    following: 1,
    created_at: '2017-02-25T18:11:21Z',
    updated_at: '2020-03-14T19:18:20Z',
  },
  {
    login: 'mdawsondev',
    id: 30132328,
    node_id: 'MDQ6VXNlcjMwMTMyMzI4',
    avatar_url: 'https://avatars1.githubusercontent.com/u/30132328?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/mdawsondev',
    html_url: 'https://github.com/mdawsondev',
    followers_url: 'https://api.github.com/users/mdawsondev/followers',
    following_url:
      'https://api.github.com/users/mdawsondev/following{/other_user}',
    gists_url: 'https://api.github.com/users/mdawsondev/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/mdawsondev/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/mdawsondev/subscriptions',
    organizations_url: 'https://api.github.com/users/mdawsondev/orgs',
    repos_url: 'https://api.github.com/users/mdawsondev/repos',
    events_url: 'https://api.github.com/users/mdawsondev/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/mdawsondev/received_events',
    type: 'User',
    site_admin: false,
    name: 'Matt Dawson',
    company: 'MedProcure',
    blog: 'https://mdawsondev.com',
    location: 'South Carolina',
    email: null,
    hireable: true,
    bio: 'Sci-fi, cats, and full stack. ‍ ❤️ ',
    public_repos: 15,
    public_gists: 6,
    followers: 9,
    following: 19,
    created_at: '2017-07-13T00:09:32Z',
    updated_at: '2020-03-16T12:50:16Z',
  },
  {
    login: 'gaearon',
    id: 810438,
    node_id: 'MDQ6VXNlcjgxMDQzOA==',
    avatar_url: 'https://avatars0.githubusercontent.com/u/810438?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/gaearon',
    html_url: 'https://github.com/gaearon',
    followers_url: 'https://api.github.com/users/gaearon/followers',
    following_url:
      'https://api.github.com/users/gaearon/following{/other_user}',
    gists_url: 'https://api.github.com/users/gaearon/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/gaearon/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/gaearon/subscriptions',
    organizations_url: 'https://api.github.com/users/gaearon/orgs',
    repos_url: 'https://api.github.com/users/gaearon/repos',
    events_url: 'https://api.github.com/users/gaearon/events{/privacy}',
    received_events_url: 'https://api.github.com/users/gaearon/received_events',
    type: 'User',
    site_admin: false,
    name: 'Dan Abramov',
    company: '@facebook ',
    blog: 'http://twitter.com/dan_abramov',
    location: null,
    email: null,
    hireable: null,
    bio:
      'Working on @reactjs. Co-author of Redux and Create React App. Building tools for humans.',
    public_repos: 241,
    public_gists: 70,
    followers: 54176,
    following: 171,
    created_at: '2011-05-25T18:18:31Z',
    updated_at: '2020-02-19T17:44:34Z',
  },
  {
    login: 'appleboy',
    id: 21979,
    node_id: 'MDQ6VXNlcjIxOTc5',
    avatar_url: 'https://avatars0.githubusercontent.com/u/21979?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/appleboy',
    html_url: 'https://github.com/appleboy',
    followers_url: 'https://api.github.com/users/appleboy/followers',
    following_url:
      'https://api.github.com/users/appleboy/following{/other_user}',
    gists_url: 'https://api.github.com/users/appleboy/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/appleboy/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/appleboy/subscriptions',
    organizations_url: 'https://api.github.com/users/appleboy/orgs',
    repos_url: 'https://api.github.com/users/appleboy/repos',
    events_url: 'https://api.github.com/users/appleboy/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/appleboy/received_events',
    type: 'User',
    site_admin: false,
    name: 'Bo-Yi Wu',
    company: 'Mediatek',
    blog: 'http://about.me/appleboy',
    location: 'Hsinchu, Taiwan',
    email: null,
    hireable: true,
    bio:
      'I really believe committing every day on an open source project is the best practice.',
    public_repos: 456,
    public_gists: 49,
    followers: 2972,
    following: 269,
    created_at: '2008-08-26T02:05:56Z',
    updated_at: '2020-03-08T14:54:47Z',
  },
  {
    login: 'stof',
    id: 439401,
    node_id: 'MDQ6VXNlcjQzOTQwMQ==',
    avatar_url: 'https://avatars0.githubusercontent.com/u/439401?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/stof',
    html_url: 'https://github.com/stof',
    followers_url: 'https://api.github.com/users/stof/followers',
    following_url: 'https://api.github.com/users/stof/following{/other_user}',
    gists_url: 'https://api.github.com/users/stof/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/stof/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/stof/subscriptions',
    organizations_url: 'https://api.github.com/users/stof/orgs',
    repos_url: 'https://api.github.com/users/stof/repos',
    events_url: 'https://api.github.com/users/stof/events{/privacy}',
    received_events_url: 'https://api.github.com/users/stof/received_events',
    type: 'User',
    site_admin: false,
    name: 'Christophe Coevoet',
    company: '@Incenteev',
    blog: '',
    location: 'Paris',
    email: null,
    hireable: null,
    bio: null,
    public_repos: 536,
    public_gists: 38,
    followers: 1687,
    following: 39,
    created_at: '2010-10-14T13:56:42Z',
    updated_at: '2020-03-17T13:17:08Z',
  },
  {
    login: 'fabpot',
    id: 47313,
    node_id: 'MDQ6VXNlcjQ3MzEz',
    avatar_url: 'https://avatars3.githubusercontent.com/u/47313?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/fabpot',
    html_url: 'https://github.com/fabpot',
    followers_url: 'https://api.github.com/users/fabpot/followers',
    following_url: 'https://api.github.com/users/fabpot/following{/other_user}',
    gists_url: 'https://api.github.com/users/fabpot/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/fabpot/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/fabpot/subscriptions',
    organizations_url: 'https://api.github.com/users/fabpot/orgs',
    repos_url: 'https://api.github.com/users/fabpot/repos',
    events_url: 'https://api.github.com/users/fabpot/events{/privacy}',
    received_events_url: 'https://api.github.com/users/fabpot/received_events',
    type: 'User',
    site_admin: false,
    name: 'Fabien Potencier',
    company: 'Symfony/Blackfire',
    blog: 'http://fabien.potencier.org/',
    location: 'Lille, France',
    email: null,
    hireable: null,
    bio: null,
    public_repos: 42,
    public_gists: 12,
    followers: 10065,
    following: 0,
    created_at: '2009-01-17T13:42:51Z',
    updated_at: '2020-03-16T16:17:24Z',
  },
];

const myData = [
  {
    country: 'AD',
    'hot dog': 120,
    'hot dogColor': 'hsl(225, 70%, 50%)',
    burger: 195,
    burgerColor: 'hsl(234, 70%, 50%)',
    sandwich: 163,
    sandwichColor: 'hsl(282, 70%, 50%)',
    kebab: 94,
    kebabColor: 'hsl(94, 70%, 50%)',
    fries: 97,
    friesColor: 'hsl(274, 70%, 50%)',
    donut: 40,
    donutColor: 'hsl(32, 70%, 50%)',
  },
  {
    country: 'AE',
    'hot dog': 12,
    'hot dogColor': 'hsl(343, 70%, 50%)',
    burger: 181,
    burgerColor: 'hsl(336, 70%, 50%)',
    sandwich: 99,
    sandwichColor: 'hsl(104, 70%, 50%)',
    kebab: 125,
    kebabColor: 'hsl(295, 70%, 50%)',
    fries: 2,
    friesColor: 'hsl(332, 70%, 50%)',
    donut: 18,
    donutColor: 'hsl(32, 70%, 50%)',
  },
  {
    country: 'AF',
    'hot dog': 29,
    'hot dogColor': 'hsl(141, 70%, 50%)',
    burger: 100,
    burgerColor: 'hsl(237, 70%, 50%)',
    sandwich: 140,
    sandwichColor: 'hsl(222, 70%, 50%)',
    kebab: 152,
    kebabColor: 'hsl(261, 70%, 50%)',
    fries: 94,
    friesColor: 'hsl(231, 70%, 50%)',
    donut: 24,
    donutColor: 'hsl(233, 70%, 50%)',
  },
  {
    country: 'AG',
    'hot dog': 17,
    'hot dogColor': 'hsl(102, 70%, 50%)',
    burger: 140,
    burgerColor: 'hsl(173, 70%, 50%)',
    sandwich: 130,
    sandwichColor: 'hsl(22, 70%, 50%)',
    kebab: 49,
    kebabColor: 'hsl(103, 70%, 50%)',
    fries: 167,
    friesColor: 'hsl(16, 70%, 50%)',
    donut: 179,
    donutColor: 'hsl(35, 70%, 50%)',
  },
  {
    country: 'AI',
    'hot dog': 148,
    'hot dogColor': 'hsl(4, 70%, 50%)',
    burger: 28,
    burgerColor: 'hsl(254, 70%, 50%)',
    sandwich: 22,
    sandwichColor: 'hsl(327, 70%, 50%)',
    kebab: 173,
    kebabColor: 'hsl(294, 70%, 50%)',
    fries: 168,
    friesColor: 'hsl(313, 70%, 50%)',
    donut: 15,
    donutColor: 'hsl(303, 70%, 50%)',
  },
  {
    country: 'AL',
    'hot dog': 60,
    'hot dogColor': 'hsl(346, 70%, 50%)',
    burger: 6,
    burgerColor: 'hsl(275, 70%, 50%)',
    sandwich: 9,
    sandwichColor: 'hsl(308, 70%, 50%)',
    kebab: 134,
    kebabColor: 'hsl(36, 70%, 50%)',
    fries: 23,
    friesColor: 'hsl(74, 70%, 50%)',
    donut: 113,
    donutColor: 'hsl(261, 70%, 50%)',
  },
  {
    country: 'AM',
    'hot dog': 190,
    'hot dogColor': 'hsl(209, 70%, 50%)',
    burger: 88,
    burgerColor: 'hsl(72, 70%, 50%)',
    sandwich: 85,
    sandwichColor: 'hsl(46, 70%, 50%)',
    kebab: 145,
    kebabColor: 'hsl(17, 70%, 50%)',
    fries: 87,
    friesColor: 'hsl(150, 70%, 50%)',
    donut: 117,
    donutColor: 'hsl(52, 70%, 50%)',
  },
];

export const FaceOffResponsiveBar: React.FC<Props> = ({ data }) => (
  <ResponsiveBar
    data={myData}
    // keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
    keys={['fries', 'donut']}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    colors={{ scheme: 'nivo' }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: '#38bcb2',
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: '#eed312',
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: 'fries',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'sandwich',
        },
        id: 'lines',
      },
    ]}
    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'country',
      legendPosition: 'middle',
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'food',
      legendPosition: 'middle',
      legendOffset: -40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);
