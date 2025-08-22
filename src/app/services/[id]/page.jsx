"use client";

import { use } from "react";

export default function ServiceDetailsPage({ params }) {

     const data = [
    {
      "_id": 11,
      "name": "QuickFix Plumbing",
      "category": "Home Services",
      "description": "Professional plumbing services for residential and commercial needs.",
      "priceRange": "$50 - $200",
      "rating": 4.5,
      "contactEmail": "support@quickfixplumbing.com",
      "available": true,
      "imageUrl": "https://media.istockphoto.com/id/1457385092/photo/an-asian-young-technician-service-man-wearing-blue-uniform-checking-cleaning-air-conditioner.jpg?s=2048x2048&w=is&k=20&c=b0M4aYJHvwEcj0eYbDHbmq1O0f-39626YmW79lTRX2I="
    },
    {
      "_id": 22,
      "name": "Speedy Car Wash",
      "category": "Automotive",
      "description": "Premium car cleaning and detailing services.",
      "priceRange": "$20 - $100",
      "rating": 4.8,
      "contactEmail": "info@speedycarwash.com",
      "available": true,
      "imageUrl": "https://via.placeholder.com/150?text=Car+Wash"
    },
    {
      "_id": 33,
      "name": "Green Thumb Landscaping",
      "category": "Garden & Landscaping",
      "description": "Landscaping, garden design, and maintenance services.",
      "priceRange": "$100 - $500",
      "rating": 4.7,
      "contactEmail": "contact@greenthumb.com",
      "available": true,
      "imageUrl": "https://via.placeholder.com/150?text=Landscaping"
    },
    {
      "_id": 44,
      "name": "Bright Minds Tutoring",
      "category": "Education",
      "description": "Personalized tutoring for students of all ages.",
      "priceRange": "$30 - $80 per hour",
      "rating": 4.9,
      "contactEmail": "tutoring@brightminds.com",
      "available": true,
      "imageUrl": "https://via.placeholder.com/150?text=Tutoring"
    }
  ];

  const unwrappedParams = use(params);
    const id = unwrappedParams?.id;
    console.log(id)
    const singleData = data.find((d) => d._id == id);
    // console.log(singleData)
    if(singleData){
        return (
        <div>
            <h1>Service Details Page</h1>
            <p>ID: {id}</p>
            <h1>{singleData.name}</h1>
            <h6>{singleData.category}</h6>
            <p>{singleData.description}</p>

        </div>
    )
    }
    else{
        return(
            <p>Not Found service</p>
        )
    }
    
}
