import type { CartItem, Order, ShippingAddress, OrderItem } from "@/types/order";

const ORDERS_KEY = "evopeak_orders";

export function generatePayIdReference(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let ref = "EP-";
  for (let i = 0; i < 8; i++) {
    ref += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return ref;
}

export function calculateShipping(subtotal: number): number {
  return subtotal >= 200 ? 0 : 15;
}

export function createOrder(
  items: CartItem[],
  address: ShippingAddress,
  userId: string,
  email: string
): Order {
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const shippingCost = calculateShipping(subtotal);

  const order: Order = {
    id: crypto.randomUUID(),
    userId,
    email,
    items: items.map(
      (i): OrderItem => ({
        productId: i.productId,
        variantId: i.variantId,
        name: i.name,
        variantSize: i.variantSize,
        price: i.price,
        quantity: i.quantity,
      })
    ),
    shippingAddress: address,
    subtotal,
    shippingCost,
    total: subtotal + shippingCost,
    status: "pending_payment",
    payIdReference: generatePayIdReference(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const stored = getStoredOrders();
  stored.unshift(order);
  if (typeof window !== "undefined") {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(stored));
  }

  return order;
}

export function getStoredOrders(): Order[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(ORDERS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function updateOrderStatus(
  orderId: string,
  status: Order["status"],
  trackingNumber?: string
): Order | null {
  const orders = getStoredOrders();
  const idx = orders.findIndex((o) => o.id === orderId);
  if (idx === -1) return null;

  orders[idx].status = status;
  orders[idx].updatedAt = new Date().toISOString();
  if (trackingNumber) orders[idx].trackingNumber = trackingNumber;

  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  return orders[idx];
}

export function getOrderById(orderId: string): Order | null {
  const orders = getStoredOrders();
  return orders.find((o) => o.id === orderId) ?? null;
}
