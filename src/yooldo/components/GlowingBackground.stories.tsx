import type { Meta, StoryObj } from '@storybook/react';

import { GlowingBackground, GlowingProps } from './GlowingBackground';

const meta: Meta<GlowingProps> = {
  component: GlowingBackground,
};

export default meta;
type Story = StoryObj<GlowingProps>;

export const GlowingBackgroundBlueGreen: Story = {
  name: 'glowing-blue-green',
  args: {
    leftPosition: { x: '5%', y: '20%', color: 'blue' },
    rightPosition: { x: '95%', y: '30%', color: 'green' },
    blur: '30px',
    className: 'z-0',
  },
  render: (args) => (
    <div className={'relative w-80 h-80 bg-yooldo-card-black'}>
      <GlowingBackground {...args} />
    </div>
  ),
};

export const GlowingBackgroundPurpleSunset: Story = {
  name: 'glowing-purple-sunset',
  args: {
    leftPosition: { x: '5%', y: '20%', color: 'purple' },
    rightPosition: { x: '95%', y: '30%', color: 'sunset' },
    blur: '30px',
    className: 'z-0',
  },
  render: (args) => (
    <div className={'relative w-80 h-80 bg-yooldo-card-black'}>
      <GlowingBackground {...args} />
    </div>
  ),
};
