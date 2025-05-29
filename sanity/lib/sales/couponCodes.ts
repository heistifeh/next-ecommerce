export const COUPON_CODES = {
  BFRIDAY: "BFRIDAY",
  ILEYA: "ITSILEYA",
} as const;

export type CouponCode = keyof typeof COUPON_CODES;
