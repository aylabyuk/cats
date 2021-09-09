import React from 'react'
import { Meta, Story } from '@storybook/react'
import SelectInputSection, { SelectInputSectionProps } from '.'

const meta: Meta = {
  title: 'Features/Select Input Section',
  component: SelectInputSection,
  parameters: {
    componentSubtitle: 'Input section where you can select a breed to display',
  },
}

const Template: Story<SelectInputSectionProps> = (args) => (
  <SelectInputSection {...args} />
)

export const SandBox = Template.bind({})
SandBox.args = {
  breeds: [
    {
      name: 'Abyssinian',
      id: 'abys',
      origin: '',
      description: '',
      temperament: '',
    },
    {
      name: 'Aegean',
      id: 'aege',
      origin: '',
      description: '',
      temperament: '',
    },
    {
      name: 'American Bobtail',
      id: 'abob',
      origin: '',
      description: '',
      temperament: '',
    },
    {
      name: 'American Curl',
      id: 'acur',
      origin: '',
      description: '',
      temperament: '',
    },
    {
      name: 'American Shorthair',
      id: 'asho',
      origin: '',
      description: '',
      temperament: '',
    },
  ],
  loading: false,
}

export default meta
