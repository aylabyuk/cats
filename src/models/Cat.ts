import Breed from './Breed'

export interface Cat extends Breed {
  /**
   * Cat's unique identifier
   */
  catId: string

  /**
   * A cat picture url
   */
  imageUrl: string
}

export default Cat
