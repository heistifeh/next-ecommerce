export const COUPON_CODES = {
  BFRIDAY: "BFRIDAY",
  ILEYA: "ILEYA",
} as const;

export type CouponCode = keyof typeof COUPON_CODES;
