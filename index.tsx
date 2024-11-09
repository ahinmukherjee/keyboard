"use client"

import { useState } from "react"
import { Search, MapPin, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      title: "Pre-loved iPhone 16",
      price: "69,990",
      originalPrice: "70,000",
      image: "/placeholder.svg",
    },
    {
      title: "Sell your old phone",
      price: "Best price guaranteed",
      image: "/placeholder.svg",
    },
  ]

  const services = [
    { name: "Sell Phone", icon: "ðŸ“±" },
    { name: "Buy Phone", icon: "ðŸ›’" },
    { name: "Sell Laptop", icon: "ðŸ’»" },
    { name: "Recycle", icon: "â™»ï¸" },
    { name: "Repair", icon: "ðŸ”§" },
    { name: "Cashify Store", icon: "ðŸª" },
    { name: "Gadget Exchange", icon: "ðŸ”„" },
    { name: "Accessories", icon: "ðŸŽ§" },
  ]

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <svg
              className="text-teal-500 h-8 w-8"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            </svg>
            <span className="text-2xl font-bold text-teal-500">CASHIFY</span>
          </div>
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input className="pl-8" placeholder="Search for mobiles, accessories & More" type="search" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-muted-foreground">
              <MapPin className="mr-2 h-4 w-4" />
              Gurgaon
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button>Login</Button>
          </div>
        </div>
      </header>
      <nav className="border-b">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-4">
            {["All", "Sell Phone", "Sell Gadgets", "Buy Phone", "Find New Gadget", "Buy Laptop", "Cashify Store", "More"].map(
              (item) => (
                <li key={item}>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center py-2 text-sm hover:text-teal-500">
                      {item}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Option 1</DropdownMenuItem>
                      <DropdownMenuItem>Option 2</DropdownMenuItem>
                      <DropdownMenuItem>Option 3</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="relative overflow-hidden rounded-lg bg-orange-400 text-white">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400" />
            <div className="relative p-8 flex justify-between items-center">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold">{slides[currentSlide].title}</h2>
                <p className="text-2xl">
                  {slides[currentSlide].originalPrice && (
                    <span className="line-through">â‚¹{slides[currentSlide].originalPrice}</span>
                  )}
                </p>
                <p className="text-5xl font-bold">â‚¹{slides[currentSlide].price}</p>
                <Button className="mt-4 bg-black text-white hover:bg-gray-800">Buy Now</Button>
              </div>
              <div className="hidden md:block">
                <img
                  alt={slides[currentSlide].title}
                  className="h-64 w-auto object-contain"
                  height="400"
                  src={slides[currentSlide].image}
                  style={{
                    aspectRatio: "300/400",
                    objectFit: "contain",
                  }}
                  width="300"
                />
              </div>
            </div>
            <Button
              variant="ghost"
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white"
              onClick={nextSlide}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-2xl mb-2">
                  {service.icon}
                </div>
                <span className="text-sm">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
