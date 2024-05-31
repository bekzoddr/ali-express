import create from "zustand";

const getInitialWishlist = () => {
  const savedWishlist = localStorage.getItem("wishlist");
  return savedWishlist ? JSON.parse(savedWishlist) : [];
};

const useWishlistStore = create((set, get) => ({
  wishlist: getInitialWishlist(),
  toggleToWishes: (item) => {
    set((state) => {
      const index = state.wishlist.findIndex((el) => el.id === item.id);
      let updatedWishlist;
      if (index < 0) {
        updatedWishlist = [...state.wishlist, item];
      } else {
        updatedWishlist = state.wishlist.filter((el) => el.id !== item.id);
      }
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return { wishlist: updatedWishlist };
    });
  },
}));

export default useWishlistStore;
