import type { Article } from "@/types"

export const articles: Article[] = [
  {
    id: 1,
    title: "Understanding the difference between grid-template and grid-auto",
    date: "Oct 09, 2018",
    content:
      "With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template-* and grid-auto-* properties. Specifically the difference between grid-template-rows/columns and grid-auto-rows/columns. Although I knew they were to d...",
  },
  {
    id: 2,
    title: "Recreating the GitHub Contribution Graph with CSS Grid Layout",
    date: "Sep 25, 2018",
    content:
      "The GitHub contribution graph is a matrix of colored cells where each cell represents a day and the color indicates the number of contributions made on that day. In this article, we'll recreate this graph using CSS Grid Layout and explore how to use grid for data visualization.",
  },
  {
    id: 3,
    title: "CSS Grid Layout: The Minmax Function",
    date: "Aug 15, 2018",
    content:
      "The minmax() function in CSS Grid Layout is incredibly useful for creating responsive grid tracks. It allows you to set a minimum and maximum size for a track, giving you more control over how your grid adapts to different screen sizes without having to rely on media queries.",
  },
  {
    id: 4,
    title: "How to use CSS Grid for responsive layouts",
    date: "Jul 22, 2018",
    content:
      "CSS Grid Layout provides powerful tools for creating responsive web designs. In this tutorial, we'll explore how to use grid-template-areas, grid-auto-flow, and other grid properties to build layouts that adapt seamlessly to different screen sizes.",
  },
  {
    id: 5,
    title: "Comparing Flexbox and Grid for layout design",
    date: "Jun 10, 2018",
    content:
      "While both Flexbox and Grid are powerful CSS layout systems, they serve different purposes. Flexbox is designed for one-dimensional layouts, while Grid is designed for two-dimensional layouts. This article compares the two approaches and helps you decide when to use each one.",
  },
  {
    id: 6,
    title: "Creating a responsive image gallery with CSS Grid",
    date: "May 05, 2018",
    content:
      "Learn how to build a responsive image gallery that adapts to different screen sizes using CSS Grid. We'll use grid-template-columns with auto-fill and minmax to create a layout that automatically adjusts the number of columns based on available space.",
  },
  {
    id: 7,
    title: "Advanced grid techniques: Named grid lines and areas",
    date: "Apr 18, 2018",
    content:
      "Named grid lines and grid areas make CSS Grid layouts more intuitive and easier to maintain. This tutorial explores how to use these features to create complex layouts with clear, semantic structure that's easier to understand and modify.",
  },
  {
    id: 8,
    title: "Building a dashboard layout with CSS Grid",
    date: "Mar 22, 2018",
    content:
      "Dashboards often require complex layouts with different sized widgets arranged in a grid. CSS Grid Layout is perfect for this use case. This tutorial walks through creating a responsive dashboard layout with nested grids and dynamic sizing.",
  },
  {
    id: 9,
    title: "CSS Grid Layout: The Fr Unit Explained",
    date: "Feb 14, 2018",
    content:
      "The fr unit is a powerful feature of CSS Grid that allows for flexible track sizing. This article explains how the fr unit works, how it differs from percentage-based sizing, and demonstrates practical examples of using fr units in grid layouts.",
  },
  {
    id: 10,
    title: "Getting started with CSS Grid Layout",
    date: "Jan 08, 2018",
    content:
      "This beginner-friendly introduction to CSS Grid Layout covers the basic concepts and properties you need to know to start building grid-based layouts. Learn about grid containers, grid items, and how to define rows and columns to create your first grid layout.",
  },
]
