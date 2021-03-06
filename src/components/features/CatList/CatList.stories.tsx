import { Meta, Story } from '@storybook/react'
import Row from 'react-bootstrap/Row'

import CatList, { CatListProps } from '.'

const meta: Meta = {
  title: 'Features/Cat List',
  component: CatList,
  parameters: {
    componentSubtitle:
      'You want more meow meow, here you go! This is the list component have fun 😁!',
  },
}

const Template: Story<CatListProps> = (args) => (
  <Row>
    <CatList {...args} />
  </Row>
)

export const SandBox = Template.bind({})
SandBox.args = {
  cats: [
    {
      catId: 'aa',
      imageUrl: 'https://cdn2.thecatapi.com/images/z_k-oJ8xG.jpg',
    },
    {
      catId: 'bb',
      imageUrl: 'https://cdn2.thecatapi.com/images/m1TeHn2dH.jpg',
    },
    {
      catId: 'cc',
      imageUrl: 'https://cdn2.thecatapi.com/images/cZHbIzC_l.jpg',
    },
    {
      catId: 'dd',
      imageUrl: 'https://cdn2.thecatapi.com/images/zlpgGWqN7.jpg',
    },
    {
      catId: 'ee',
      imageUrl: 'https://cdn2.thecatapi.com/images/k71ULYfRr.jpg',
    },
    {
      catId: 'ff',
      imageUrl: 'https://cdn2.thecatapi.com/images/mnD88Lsjd.jpg',
    },
  ],
} as any

export default meta
