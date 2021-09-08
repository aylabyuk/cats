import { Meta, Story } from '@storybook/react'
import CatList, { CatListProps } from '.'

const meta: Meta = {
  title: 'Base/CatList',
  component: CatList,
}

const Template: Story<CatListProps> = (args) => <CatList {...args} />

export const SandBox = Template.bind({})
SandBox.args = {} as CatListProps

export default meta
