import { Schema, model } from "mongoose";

const cartModel = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    products: [
      {
        product_id: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
      },
    ],
    total_price: {
      type: Number,
      required: true,
    },
    expireAt: { type: Date, default: new Date(), expires: 60 * 60 * 24 },
  },
  { timestamps: true }
);

const Cart = model("Cart", cartModel);

export default Cart;
