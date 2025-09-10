import { NextResponse } from "next/server";

const products = [
  { id: 1, name: "Smartphone", price: "$799", image: "https://picsum.photos/seed/p1/400/300" },
  { id: 2, name: "Wireless Earbuds", price: "$199", image: "https://picsum.photos/seed/p2/400/300" },
  { id: 3, name: "Smart Watch", price: "$249", image: "https://picsum.photos/seed/p3/400/300" },
  { id: 4, name: "Laptop", price: "$1299", image: "https://picsum.photos/seed/p4/400/300" },
  { id: 5, name: "Tablet", price: "$499", image: "https://picsum.photos/seed/p5/400/300" },
  { id: 6, name: "Gaming Console", price: "$399", image: "https://picsum.photos/seed/p6/400/300" },
  { id: 7, name: "4K TV", price: "$899", image: "https://picsum.photos/seed/p7/400/300" },
  { id: 8, name: "DSLR Camera", price: "$699", image: "https://picsum.photos/seed/p8/400/300" },
  { id: 9, name: "Bluetooth Speaker", price: "$149", image: "https://picsum.photos/seed/p9/400/300" },
  { id: 10, name: "Fitness Tracker", price: "$99", image: "https://picsum.photos/seed/p10/400/300" },
  { id: 11, name: "VR Headset", price: "$299", image: "https://picsum.photos/seed/p11/400/300" },
  { id: 12, name: "Drone", price: "$499", image: "https://picsum.photos/seed/p12/400/300" },
  { id: 13, name: "Smart Home Hub", price: "$129", image: "https://picsum.photos/seed/p13/400/300" },
  { id: 14, name: "E-Reader", price: "$119", image: "https://picsum.photos/seed/p14/400/300" },
  { id: 15, name: "Portable Charger", price: "$29", image: "https://picsum.photos/seed/p15/400/300" },
];

export async function GET() {
  return NextResponse.json({ products });
}
