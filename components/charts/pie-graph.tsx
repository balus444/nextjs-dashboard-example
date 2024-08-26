'use client';

{
  /*
import * as React from 'react';
import { TrendingUp } from 'lucide-react';
import { Label, Pie, PieChart } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
const chartData = [
  { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
  { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
  { browser: 'firefox', visitors: 287, fill: 'var(--color-firefox)' },
  { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
  { browser: 'other', visitors: 190, fill: 'var(--color-other)' }
];

const chartConfig = {
  visitors: {
    label: 'Visitors'
  },
  chrome: {
    label: 'Chrome',
    color: 'hsl(var(--chart-1))'
  },
  safari: {
    label: 'Safari',
    color: 'hsl(var(--chart-2))'
  },
  firefox: {
    label: 'Firefox',
    color: 'hsl(var(--chart-3))'
  },
  edge: {
    label: 'Edge',
    color: 'hsl(var(--chart-4))'
  },
  other: {
    label: 'Other',
    color: 'hsl(var(--chart-5))'
  }
} satisfies ChartConfig;

export function PieGraph() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Donut with Text</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[360px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}



<< -------------------------------from openai----------------------------- >>

import * as React from 'react';
import { TrendingUp } from 'lucide-react';
import { Label, Pie, PieChart } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from '@/components/ui/chart';

const chartData = [
  { assetClass: 'Stocks', percentage: 55.00, fill: 'var(--color-stocks)' },
  { assetClass: 'Bonds', percentage: 25.00, fill: 'var(--color-bonds)' },
  { assetClass: 'Funds', percentage: 10.00, fill: 'var(--color-real-estate)' },
  { assetClass: 'Commodities', percentage: 5.00, fill: 'var(--color-commodities)' },
  { assetClass: 'Cash', percentage: 5.00, fill: 'var(--color-cash)' }
];

const chartConfig = {
  percentage: {
    label: 'Percentage'
  },
  stocks: {
    label: 'Stocks',
    color: 'hsl(var(--chart-1))'
  },
  bonds: {
    label: 'Bonds',
    color: 'hsl(var(--chart-2))'
  },
  realEstate: {
    label: 'Real Estate',
    color: 'hsl(var(--chart-3))'
  },
  commodities: {
    label: 'Commodities',
    color: 'hsl(var(--chart-4))'
  },
  cash: {
    label: 'Cash',
    color: 'hsl(var(--chart-5))'
  }
} satisfies ChartConfig;

export function PieGraph() {
  const totalPercentage = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.percentage, 0);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Asset Class Breakdown %</CardTitle>
        <CardDescription>As of August 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[360px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="percentage"
              nameKey="assetClass"
              innerRadius={60}
              strokeWidth={5}
            >
            <ChartLegend
              content={<ChartLegendContent nameKey="assetClass" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />  
              {/* <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalPercentage}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Breakdown
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing asset class breakdown as of August 2024
        </div>
            </CardFooter>
    </Card>
  );
}

*/
}

import React, { useMemo } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { TrendingUp } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend
} from '@/components/ui/chart';

const chartData = [
  { assetClass: 'Stocks', percentage: 45.0, fill: 'hsl(var(--chart-1))' },
  { assetClass: 'Bonds', percentage: 25.0, fill: 'hsl(var(--chart-2))' },
  { assetClass: 'Funds', percentage: 12.5, fill: 'hsl(var(--chart-3))' },
  { assetClass: 'Commodities', percentage: 7.5, fill: 'hsl(var(--chart-4))' },
  { assetClass: 'Cash', percentage: 5.0, fill: 'hsl(var(--chart-5))' }
];

const chartConfig = {
  percentage: { label: 'Percentage' },
  stocks: { label: 'Stocks', color: 'hsl(var(--chart-1))' },
  bonds: { label: 'Bonds', color: 'hsl(var(--chart-2))' },
  funds: { label: 'Funds', color: 'hsl(var(--chart-3))' },
  commodities: { label: 'Commodities', color: 'hsl(var(--chart-4))' },
  cash: { label: 'Cash', color: 'hsl(var(--chart-5))' }
} satisfies ChartConfig;

export function PieGraph() {
  const formattedChartData = useMemo(() => {
    return chartData.map((item) => ({
      ...item,
      percentage: parseFloat(item.percentage.toFixed(2))
    }));
  }, []);

  const CustomLegend = ({ payload }) => {
    return (
      <ul className="list-none p-0">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} className="mb-2 flex items-center">
            <span
              className="mr-2 h-3 w-3"
              style={{ backgroundColor: entry.color }}
            ></span>
            <span className="mr-2">{entry.payload.assetClass}:</span>
            <span>{entry.payload.percentage.toFixed(2)}%</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Asset Class Breakdown %</CardTitle>
        {/* <CardDescription>As of August 2024</CardDescription> */}
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[360px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel
                  formatter={(value) => `${value.toFixed(2)}%`}
                />
              }
            />
            <Pie
              data={formattedChartData}
              dataKey="percentage"
              nameKey="assetClass"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
            >
              {formattedChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <ChartLegend
              content={<CustomLegend />}
              layout="vertical"
              verticalAlign="middle"
              align="right"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          {/* Trending up by 5.2% this month <TrendingUp className="h-4 w-4" /> */}
        </div>
        <div className="leading-none text-muted-foreground">
          Showing asset class breakdown as of August 2024
        </div>
      </CardFooter>
    </Card>
  );
}
