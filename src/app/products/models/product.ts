export interface Product {
  id: number,
  name: string,
  code: string,
  releaseDate: Date,
  picture: string,
  price: number
}


export interface Person {
  id: number
  address: Address
}

export interface Address {
  street: string,
  number: string,
  city?: string,
  nation?: string,
  postalCode?: string
}
