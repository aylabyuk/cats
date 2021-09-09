import { Meta, Story } from '@storybook/react'
import DetailsCard, { DetailsCardProps } from '.'

const meta: Meta = {
  title: 'Base/Details Card',
  component: DetailsCard,
  parameters: {
    componentSubtitle: 'A card that display a cat details',
  },
}

const Template: Story<DetailsCardProps> = (args) => (
  <div style={{ maxWidth: 1108 }}>
    <DetailsCard {...args} />
  </div>
)

export const SandBox = Template.bind({})
SandBox.args = {
  name: 'American Wirehair',
  origin: 'United States',
  temperament:
    'Affectionate, Curious, Gentle, Intelligent, Interactive, Lively, Loyal, Playful, Sensible, Social',
  description:
    'The American Wirehair tends to be a calm and tolerant cat who takes life as it comes. His favorite hobby is bird-watching from a sunny windowsill, and his hunting ability will stand you in good stead if insects enter the house.',
  imageUrl: 'https://cdn2.thecatapi.com/images/bTo6m3PVg.jpg',
} as DetailsCardProps

export default meta
