import share from '../../../images/send.png'
import more from '../../../images/more.png'
import heart from '../../../images/heart.png'
import "./list.css"
import { PostList } from "../../../contexts/PostContext";
import Header from '../Header/header'
import React, { useContext } from 'react'

const AllPost = () => {

    const { posts } = useContext(PostList);
    return (
        <>
            <Header />
            <div className="list-post-container">
                {posts.length === 0 ? <h3>No Post</h3> :
                    posts.map(post => {
                        return <React.Fragment key={post.id}>
                            <div className='post-container' >
                                <div className="header">
                                    <div className="information">
                                        <h6 className="name">{post.name}</h6>
                                        <p className="location">{post.location}</p>
                                    </div>
                                    <div className="three-dot">
                                        <span><img className='more-icon' src={more} /></span>
                                    </div>
                                </div>
                                <div className="image-box">
                                    <img className='post-image' src={`https://instaclonebackend-8jxo.onrender.com/${post.image}`}/>
                                </div>
                                <div className="footer">
                                    <span><img className='heart-icon' src={heart} /></span>
                                    <span><img className='send-icon' src={share} /></span>
                                    <span className='date'>{post.date}</span>
                                    <p className='likes'>{post.likes} likes</p>
                                    <p className='title'>{post.description}</p>
                                </div>
                            </div>
                        </React.Fragment>
                    })}
            </div>
        </>
    )
}
export default AllPost