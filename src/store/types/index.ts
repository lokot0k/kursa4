export interface Category {
  id: number,
  name: string,
  description: string,
  photo: string,
}

export interface Product {
  id: number,
  subcategoryId: number,
  partNumber: number,
  name: string,
  description: string,
  mainPhoto: string,
  tablePhoto: string,
  widthMm: number,
  heightMm: number,
  depthMm: number,
  bundling: string,
  weightKg: number,
  priceRub: number,
}

export interface FullProduct extends Product {
  gallery: string[],
}

export interface Subcategory {
  id: number,
  categoryId: number,
  name: string,
  description: string,
  photo: string,
}
