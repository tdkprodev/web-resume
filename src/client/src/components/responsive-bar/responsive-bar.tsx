import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { GitHubUser } from '../../../../shared/interface/github-user';

interface Props {
  data: GitHubUser[];
}

export const FaceOffResponsiveBar: React.FC<Props> = ({ data }) => (
  <ResponsiveBar
    data={data}
    keys={['followers', 'following', 'public_repos', 'public_gists']}
    indexBy="login"
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
      {
        id: 'squares',
        type: 'patternSquares',
        background: 'inherit',
        color: '#58bb7b',
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
      {
        id: 'lines-yellow',
        type: 'patternLines',
        spacing: 6,
        rotation: 109,
        lineWidth: 4,
        background: '#ffffff',
        color: '#adaa5c',
      },
    ]}
    fill={[
      {
        match: {
          id: 'public_gists',
        },
        id: 'lines-yellow',
      },
      {
        match: {
          id: 'public_repos',
        },
        id: 'lines',
      },
      {
        match: {
          id: 'following',
        },
        id: 'squares',
      },
      {
        match: {
          id: 'followers',
        },
        id: 'dots',
      },
    ]}
    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Github Users',
      legendPosition: 'middle',
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Stats',
      legendPosition: 'middle',
      legendOffset: -40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'top-right',
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
