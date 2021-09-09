import { Meta, Story } from '@storybook/react'
import MasterCard, { MasterCardProps } from '.'

const meta: Meta = {
  title: 'Base/Master Card',
  component: MasterCard,
  parameters: {
    componentSubtitle:
      "This is not a global bank card payment transaction processor 😅, Sorry I can't think of a better component name. But this is a card for the cat list",
  },
}

const Template: Story<MasterCardProps> = (args) => (
  <div style={{ width: 238 }}>
    <MasterCard {...args} />
  </div>
)

export const SandBox = Template.bind({})
SandBox.args = {
  catId: 'awesomeCatID1234',
  imageUrl: 'https://cdn2.thecatapi.com/images/bTo6m3PVg.jpg',
} as MasterCardProps

export default meta
