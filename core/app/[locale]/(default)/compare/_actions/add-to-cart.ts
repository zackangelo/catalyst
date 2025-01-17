'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

import { addCartLineItem } from '~/client/mutations/add-cart-line-item';
import { createCart } from '~/client/mutations/create-cart';
import { getCart } from '~/client/queries/get-cart';
import { TAGS } from '~/client/tags';

export const addToCart = async (data: FormData) => {
  const productEntityId = Number(data.get('product_id'));

  const cookieStore = await cookies();
  const cartId = cookieStore.get('cartId')?.value;

  let cart;

  try {
    cart = await getCart(cartId);

    if (cart) {
      cart = await addCartLineItem(cart.entityId, {
        lineItems: [
          {
            productEntityId,
            quantity: 1,
          },
        ],
      });

      if (!cart?.entityId) {
        return { status: 'error', error: 'Failed to add product to cart.' };
      }

      revalidateTag(TAGS.cart);

      return { status: 'success', data: cart };
    }

    cart = await createCart([{ productEntityId, quantity: 1 }]);

    if (!cart?.entityId) {
      return { status: 'error', error: 'Failed to add product to cart.' };
    }

    cookieStore.set({
      name: 'cartId',
      value: cart.entityId,
      httpOnly: true,
      sameSite: 'lax',
      secure: true,
      path: '/',
    });

    revalidateTag(TAGS.cart);

    return { status: 'success', data: cart };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { status: 'error', error: error.message };
    }

    return { status: 'error', error: 'Something went wrong. Please try again.' };
  }
};
