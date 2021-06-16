import React from "react";
import wilson from "../../images/Ellipse 1.png";
import ema from "../../images/Ellipse 2.png";
import aliza from "../../images/Ellipse 3.png";
import BlogPost from "../BlogPost/BlogPost";

const blogData = [
    {
        title : 'Check at least a doctor in a year for your teeth',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Cudi',
        authorImg : wilson,
        date : '23 April 2019'
    },
    {
        title : 'Two time brush in a day can keep you healthy',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Sinthia',
        authorImg : ema,
        date : '23 April 2019'
    },
    {
        title : 'The tooth cancer is taking a challenge',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Cudi',
        authorImg : aliza,
        date : '23 April 2019'
    },
]
const Blog = () => {
  return (
    <section>
      <div className="blog-header mt-5 p-5">
        <h4 style={{color:" #1cc7c1",fontWeight:" 600"}}>Our Blog</h4>
        <h1>From Our Blog News</h1>
      </div>
      <div className="card-deck ">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title}/>)
                    }
               </div>
    </section>
  );
};

export default Blog;
