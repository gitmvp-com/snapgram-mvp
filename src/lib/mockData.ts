import { IPost } from "@/types";

export const mockPosts: IPost[] = [
  {
    id: "1",
    caption: "Beautiful sunset at the beach 🌅",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    location: "Malibu, California",
    tags: "sunset, beach, nature",
    creator: {
      name: "Sarah Johnson",
      imageUrl: "https://i.pravatar.cc/150?img=1",
    },
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "2",
    caption: "Coffee and code ☕️💻",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    location: "San Francisco, CA",
    tags: "coding, developer, coffee",
    creator: {
      name: "Alex Martinez",
      imageUrl: "https://i.pravatar.cc/150?img=12",
    },
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "3",
    caption: "Mountain adventures await! ⛰️",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    location: "Rocky Mountains, Colorado",
    tags: "mountains, adventure, hiking",
    creator: {
      name: "Emily Chen",
      imageUrl: "https://i.pravatar.cc/150?img=5",
    },
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "4",
    caption: "Fresh morning vibes 🌿",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
    location: "Portland, Oregon",
    tags: "nature, morning, peaceful",
    creator: {
      name: "David Kim",
      imageUrl: "https://i.pravatar.cc/150?img=8",
    },
    createdAt: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
  },
];
