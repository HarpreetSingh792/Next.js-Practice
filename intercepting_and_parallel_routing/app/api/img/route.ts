export const data = [
  {
    "id": 1,
    "imageUrl": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    "format": "jpeg",
    "width": 920,
    "height": 1200,
    "author": "Olivia White"
  },
  {
    "id": 2,
    "imageUrl": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    "format": "jpg",
    "width": 960,
    "height": 720,
    "author": "Jane Smith"
  },
  {
    "id": 3,
    "imageUrl": "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
    "format": "jpeg",
    "width": 180,
    "height": 850,
    "author": "Alex Johnson"
  },
  {
    "id": 4,
    "imageUrl": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    "format": "jpeg",
    "width": 920,
    "height": 1200,
    "author": "Olivia White"
  },
  {
    "id": 5,
    "imageUrl": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    "format": "jpg",
    "width": 960,
    "height": 720,
    "author": "Jane Smith"
  },
  {
    "id": 6,
    "imageUrl": "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
    "format": "jpeg",
    "width": 180,
    "height": 850,
    "author": "Alex Johnson"
  },
  {
    "id": 7,
    "imageUrl": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    "format": "jpeg",
    "width": 920,
    "height": 1200,
    "author": "Olivia White"
  },
  {
    "id": 8,
    "imageUrl": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    "format": "jpg",
    "width": 960,
    "height": 720,
    "author": "Jane Smith"
  },
  {
    "id": 9,
    "imageUrl": "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
    "format": "jpeg",
    "width": 180,
    "height": 850,
    "author": "Alex Johnson"
  },
 
]



export async function GET() {
  return Response.json(data, { status: 200 });
}
