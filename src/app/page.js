"use client";

import styles from "@/styles/page.module.css";
import { useEffect, useState } from "react";
import ArticlePreview from "@/components/ArticlePreview";

export default function Home() {

  const [news, setNews] = useState([]);

  const fetchData = async () => {
    const response = await fetch("/api/news")
    const data = await response.json();
    setNews(data.articles);
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(news);

  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <div className={styles.newsContainer}>
        {news.map((article, index) => <ArticlePreview i={index} data={article}/>)}
      </div>
    </div>
  );
}