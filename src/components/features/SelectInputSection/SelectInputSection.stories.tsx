import React from 'react'
import { Meta, Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import SelectInputSection, { SelectInputSectionProps } from '.'

const meta: Meta = {
  title: 'Features/Select Input Section',
  component: SelectInputSection,
}

const Template: Story<SelectInputSectionProps> = (args) => (
  <SelectInputSection {...args} />
)

export const SandBox = Template.bind({})
SandBox.args = {
  breeds: [
    { name: 'Abyssinian', id: 'abys' },
    { name: 'Aegean', id: 'aege' },
    { name: 'American Bobtail', id: 'abob' },
    { name: 'American Curl', id: 'acur' },
    { name: 'American Shorthair', id: 'asho' },
  ],
  loading: false,
}

export default meta
