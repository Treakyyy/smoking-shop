import React, { useEffect, useState, useRef } from 'react'
import styles from './Blog.module.css'
import data from '../../blog.json'
import { useDispatch } from 'react-redux'
import { setBlogRef } from '../../store/store'

const Blog = () => {
  const [blogs, setBlogs] = useState([])
  const blogRef = useRef(null)
  const dispatch = useDispatch()

  useEffect(() => {
    setBlogs(data)
    dispatch(setBlogRef(blogRef.current))
  }, [dispatch])

  return (
    <div className={styles.Blog} ref={blogRef}>
      <div className={styles.container_header_text}>
        <h2 className={styles.header_title}>Наш блог</h2>
        <p className={styles.header_text}>
          Мы являемся интернет-магазином кальянов, предлагающим широкий
          ассортимент современных и по доступной цене кальянов и их
          комплектующих.
        </p>
      </div>
      <div className={styles.container_blog}>
        {blogs.map((blog) => (
          <div className={styles.container_blog_item} key={blog.id}>
            <img src={blog.image} alt="" />
            <div className={styles.container_card}>
              <p className={styles.date}>{blog.date}</p>
              <p className={styles.title}>{blog.title}</p>
              <p className={styles.text}>{blog.text}</p>
              <button className={styles.read}>
                {blog.read}
                <img
                  className={styles.img}
                  src="/assets/img/arrow.svg"
                  alt="continue"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
