import { Meta, Story } from '@storybook/react'
import BreedSelect, { BreedSelectProps } from '.'

const meta: Meta = {
  title: 'Base/Breed Select',
  component: BreedSelect,
}

const Template: Story<BreedSelectProps> = (args) => <BreedSelect {...args} />

export const SandBox = Template.bind({})
SandBox.args = {
  breeds: [
    { name: 'Abyssinian', catId: 'abys' },
    { name: 'Aegean', catId: 'aege' },
    { name: 'American Bobtail', catId: 'abob' },
    { name: 'American Curl', catId: 'acur' },
    { name: 'American Shorthair', catId: 'asho' },
  ],
} as BreedSelectProps

export default meta
