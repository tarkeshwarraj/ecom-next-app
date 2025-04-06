import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import { assets, blog_data } from '@/Assets/assets'
import Image from 'next/image'
import axios from 'axios'


const BlogList = () => {

    const [menu, setMenu] = useState("All");
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async() => {
        const response = await axios.get('/api/blog');
        setBlogs(response.data.blogs);
        console.log(response.data.blogs)
    }

    useEffect(()=>{
        fetchBlogs();
    },[]);


    return (
    <div>
        <div className='flex justify-center gap-6 my-10'>
            <button onClick={()=>setMenu("All")} className={menu === "All" ? 'bg-black text-white py-1 px-4 rounded-sm':""}>All</button>
            <button onClick={()=>setMenu("Technology")} className={menu === "Technology" ? 'bg-black text-white py-1 px-4 rounded-sm':""}>Technology</button>
            <button onClick={()=>setMenu("Startup")} className={menu === "Startup" ? 'bg-black text-white py-1 px-4 rounded-sm':""}>Startup</button>
            <button onClick={()=>setMenu("Lifestyle")} className={menu === "Lifestyle" ? 'bg-black text-white py-1 px-4 rounded-sm':""}>Lifestyle</button>
        </div>
        <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
            {blogs.filter((item)=>menu ==="All"?true:item.category === menu).map((item, index)=>{
                return <BlogItem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category} />
                // return (
                //     <div key={index} className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
                //             <Image src={item.image} alt='' width={400} height={400} className='border-b border-black'/>
                //             <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{item.category}</p>
                //             <div className="p5">
                //                 <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{item.title}</h5>
                //                 <p className='mb-3 text-sm tracking-tight text-gray-700'>{item.description}</p>
                //                 <div className='inline-flex items-center py-2 font-semibold text-center'>
                //                     Read more <Image src={assets.arrow} alt='' width={12} className='ml-2'/>
                //                 </div>
                //             </div>
                //         </div>
                // )
            })}
        </div>

    </div>
  )
}

export default BlogList