export interface Breed {
  /**
   * Breed unique identifier
   */
  id: string

  /**
   * Cat breed name
   */
  name: string

  /**
   * The country where the breed originates
   */
  origin: string

  /**
   * Cat's behavioural style which determines how they react to situations,
   * and expresses and regulates emotions
   */
  temperament: string

  /**
   * A brief description of the Cat's breed
   */
  description: string
}

export default Breed
