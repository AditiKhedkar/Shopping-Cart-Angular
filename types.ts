export interface Item {
  name: string;
  price: number;
}

export interface PricingRule {
  type: 'regular' | 'buyOneGetOneFree' | 'threeForTwo';
  price: number;
}

export interface BasketItem extends Item {
  quantity: number;
}

export const PRICING_RULES: Record<string, PricingRule> = {
  Apple: { type: 'regular', price: 35 },
  Banana: { type: 'regular', price: 20 },
  Melon: { type: 'buyOneGetOneFree', price: 50 },
  Lime: { type: 'threeForTwo', price: 15 },
};