import Breed from './Breed'

export interface Cat extends Breed {
  catId: string
  imageUrl: string
}

export default Cat
