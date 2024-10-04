"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const page = ({params}) => {
  const router = useRouter();

  const {id, title, author, date, content, category, tags, views, likes, comments} = blogs.find((blog)=> blog.id == params.id);
  return (
    <div className="container m-auto py-5 items-center">
      <div className="w-full pb-10">
        <h1 className="text-3xl font-bold text-center w-full">Blogs Page</h1>
      </div>
      <div className="grid grid-cols-2 gap-5">
      <div key={id} className="border p-5">
            <div className="flex justify-between">
              <h1 className="font-bold text-lg">{title}</h1>
              <button onClick={() => router.back()} className="font-bold border px-3 bg-gray-200 rounded-full">Back</button>
            </div>
            <p className="text-gray-700">{content}</p>
            <div className="flex gap-5 py-3">
              <h3 className="border px-2 bg-gray-200">{author}</h3>
              <p className="border px-2 bg-gray-200">{category}</p>
              <data className="border px-2 bg-gray-200" value={date}>
                {date}
              </data>
            </div>
            <div>
              <ul className="flex gap-5">
                {tags.map((tag, index) => (
                  <li key={index} className="border px-2 bg-gray-200">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-5 mt-3">
              <p className="border px-2 bg-gray-200">Views: {views}</p>
              <p className="border px-2 bg-gray-200">Likes: {likes}</p>
              <p className="border px-2 bg-gray-200">
                Comments: {comments}
              </p>
            </div>
          </div>
      </div>
    </div>
    
  );
};


const blogs = [
    {
      id: 1,
      title: "Understanding React Lifecycle Methods",
      author: "Ziaun Khan",
      date: "2024-10-01",
      content:
        "In this blog post, we explore the lifecycle methods in React and how they help manage the component’s lifecycle, from creation to destruction.",
      category: "React",
      tags: ["React", "Lifecycle", "JavaScript"],
      views: 340,
      likes: 150,
      comments: 12,
    },
    {
      id: 2,
      title: "A Complete Guide to CSS Grid",
      author: "Ziaun Khan",
      date: "2024-09-28",
      content:
        "CSS Grid is a powerful tool for creating complex, responsive web layouts. This guide covers all the key concepts you need to know.",
      category: "CSS",
      tags: ["CSS", "Grid", "Responsive"],
      views: 290,
      likes: 132,
      comments: 8,
    },
    {
      id: 3,
      title: "Exploring JavaScript ES6 Features",
      author: "Ziaun Khan",
      date: "2024-09-20",
      content:
        "JavaScript ES6 introduced several new features, including arrow functions, classes, and template literals. Let's dive into these and more.",
      category: "JavaScript",
      tags: ["JavaScript", "ES6", "Web Development"],
      views: 410,
      likes: 180,
      comments: 20,
    },
    {
      id: 4,
      title: "Best Practices for Writing Clean Code",
      author: "Ziaun Khan",
      date: "2024-09-15",
      content:
        "Writing clean and maintainable code is crucial for any developer. In this blog, we discuss best practices and techniques to improve code quality.",
      category: "Programming",
      tags: ["Clean Code", "Best Practices", "Development"],
      views: 500,
      likes: 210,
      comments: 35,
    },
    {
      id: 5,
      title: "Introduction to Node.js and Express.js",
      author: "Ziaun Khan",
      date: "2024-09-10",
      content:
        "Node.js and Express.js are essential for building backend services. Learn how to set up a basic server and handle routes.",
      category: "Node.js",
      tags: ["Node.js", "Express.js", "Backend"],
      views: 380,
      likes: 160,
      comments: 18,
    },
    {
      id: 6,
      title: "Understanding the Flexbox Layout Model",
      author: "Ziaun Khan",
      date: "2024-09-05",
      content:
        "Flexbox makes it easy to create responsive and dynamic layouts. In this blog, we'll cover the basics and advanced concepts of Flexbox.",
      category: "CSS",
      tags: ["Flexbox", "CSS", "Web Design"],
      views: 420,
      likes: 170,
      comments: 10,
    },
    {
      id: 7,
      title: "Getting Started with MongoDB for Beginners",
      author: "Ziaun Khan",
      date: "2024-08-30",
      content:
        "MongoDB is a popular NoSQL database. Learn how to use MongoDB for storing and managing data in this introductory guide.",
      category: "Databases",
      tags: ["MongoDB", "NoSQL", "Database"],
      views: 350,
      likes: 145,
      comments: 15,
    },
    {
      id: 8,
      title: "How to Implement Authentication with Firebase",
      author: "Ziaun Khan",
      date: "2024-08-25",
      content:
        "Firebase authentication provides easy-to-implement methods for user login and registration. Here's how to get started with Firebase auth.",
      category: "Firebase",
      tags: ["Firebase", "Authentication", "Security"],
      views: 300,
      likes: 140,
      comments: 9,
    },
    {
      id: 9,
      title: "Advanced Techniques in React Router Dom",
      author: "Ziaun Khan",
      date: "2024-08-20",
      content:
        "React Router Dom is essential for routing in React applications. In this post, we explore advanced techniques for implementing complex routing.",
      category: "React",
      tags: ["React", "Routing", "React Router"],
      views: 460,
      likes: 190,
      comments: 25,
    },
    {
      id: 10,
      title: "How to Optimize Website Performance",
      author: "Ziaun Khan",
      date: "2024-08-15",
      content:
        "Optimizing website performance is key to improving user experience and SEO. This guide will walk you through techniques to enhance performance.",
      category: "Web Development",
      tags: ["Performance", "Optimization", "SEO"],
      views: 510,
      likes: 220,
      comments: 30,
    },
  ];

export default page;
