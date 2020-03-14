import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

interface Props {
  data: [];
}

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
    keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
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
