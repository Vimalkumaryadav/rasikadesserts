import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type WishlistItem = {
  id: number;
  name: string;
  price: string;
  image: string;
};

type WishlistContextType = {
  items: WishlistItem[];
  add: (item: WishlistItem) => void;
  remove: (id: number) => void;
  clear: () => void;
  isInWishlist: (id: number) => boolean;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

const STORAGE_KEY = "rasika:wishlist";

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as WishlistItem[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore storage failures
    }
  }, [items]);

  const api = useMemo<WishlistContextType>(
    () => ({
      items,
      add: (item) =>
        setItems((prev) => (prev.find((it) => it.id === item.id) ? prev : [item, ...prev])),
      remove: (id) => setItems((prev) => prev.filter((it) => it.id !== id)),
      clear: () => setItems([]),
      isInWishlist: (id) => items.some((it) => it.id === id),
    }),
    [items]
  );

  return <WishlistContext.Provider value={api}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
