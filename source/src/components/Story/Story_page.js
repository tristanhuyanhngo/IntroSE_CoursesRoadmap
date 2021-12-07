import './story.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component }  from 'react';
import Story from './Story'

class Story_page extends Component {
    constructor(props){
        super(props);
        this.data = [
            {
                user:{
                    name: 'Nguyen Thanh Quan',
                    username: '@quanblue',
                    avatar: 'https://i.imgflip.com/4/4t0m5.jpg',
                },
                story:[
                    {
                        content: 'Suzanne Inspired by Leonard Cohen’s “Suzanne”  I first saw her at a party sitting among the bohemian crowd, all skinny, all smoking, all intense with their words. She leaned forward with a glass of red wine in one hand, a cigarette in the other. She spoke as if in secret, telling them everything she knew of social injustice and political',
                        timestamp: '1637823672'
                    },
                    {
                        content: 'He buried her in the forest before the leaves of the quaking aspen turned golden. No one noticed the tamped down soil, or the way the wild grasses died back all around her, or even the circle of whimsy brown mushrooms that erupted soon after.And when autumn came, and the leaves changed, the trembling giant whose roots she fed turned scarlet instead.“I am here,” she called. “Please find me!”But, after the first frost, the leaves turned rusty, and were then indistinguishable from the rest.',
                        timestamp: '1636978022'
                    },
                    {
                        content: 'First and foremost, I just need to assert what was right and what was wrong. I think, before you can apologize for things you’ve done, you need to really isolate and evaluate exactly what you did wrong, and it’s very rare that you, uh, you know, haven’t done anything right in the midst of all you did wrong. So, I would like to assert that, yes, I made mistakes. I made many mistakes. I hurt people.',
                        timestamp: '1631718422'
                    }
                ]
            },
            {
                user:{
                    name: 'Phung Anh Khoa',
                    username: '@wander',
                    avatar: 'https://m.media-amazon.com/images/I/41tKs-+D6aL._AC_SY780_.jpg',
                },
                story:[
                    {
                        content: 'Suzanne Inspired by Leonard Cohen’s “Suzanne”  I first saw her at a party sitting among the bohemian crowd, all skinny, all smoking, all intense with their words. She leaned forward with a glass of red wine in one hand, a cigarette in the other. She spoke as if in secret, telling them everything she knew of social injustice and political',
                        timestamp: '1640968087'
                    }
                ]
            },
            {
                user:{
                    name: 'Nguyen Duc Nam',
                    username: '@kygor',
                    avatar: 'https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/methode/2021/11/04/e1136cce-3c64-11ec-a1b3-e785d5c8830c_image_hires_134310.jpg?itok=Dz72EJVK&v=1636004597',
                },
                story:[
                    {
                        content: 'A gem can not be polished without friction, nor man perfected without trials. Sejong swept his books off the shelf. Rain pelted the world outside. The king opened one of his many works, the spine of it splitting under his force, and read off a page. Nongsa jikseol, methods of cultivation in agriculture. A guidebook to farming in Korea’s geography. Words that could keep his people from famine.He threw it into the rain. It splashed against the mud-coated field, water distorting the ink. ',
                        timestamp: '1636474507'
                    },
                    {
                        content: 'In the dust that settles at the end of the world where the only light is the dimness of dawn, there is a woman sitting on a wooden chair. It is not a throne; she is not a queen. It is not a rocking chair; she is not a crone. It is a wooden chair you might find anywhere in the world, straight-backed and uncomfortable to sit on for long periods of time. She sits on it while she weaves with a cat sleeping lazily at her feet. There is a single flickering flame that lights her workspace.',
                        timestamp: '1637970719'
                    }
                ]
            }
        ]
    }

    // Sort story by time (timestamp)
    sort=(story)=> {
        for (let i = 0; i < story.length - 1; i++) 
            for (let j = i + 1; j < story.length; j++) 
                if (story[i].timestamp < story[j].timestamp) {
                    let temp_story = story[i];
                    story[i] = story[j];
                    story[j] = temp_story;
                }
        return story
    }

    render_stories=()=>{
        var stories = [];

        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].story.length; j++) {
                let story = {};
                story.name = this.data[i].user.name;
                story.username = this.data[i].user.username;
                story.avatar = this.data[i].user.avatar;
                story.content = this.data[i].story[j].content;
                story.timestamp = this.data[i].story[j].timestamp; 
                
                stories.push(story)
            }
        }

        stories = this.sort(stories);

        for (let i = 0; i< stories.length; i ++)
            console.log(stories[i].name ,'',stories[i].timestamp)

        let story_element = stories.map((story, index) => {
            return ( 
                <Story
                    name= {story.name}
                    username= {story.username}
                    avatar= {story.avatar}
                    story= {story.content}
                    timestamp= {story.timestamp}

                /> );
        });

        return story_element;
    }


    render () {
        // var stories = ;
        return (
            <div className='d-flex justify-content-center'>
                <div className="container-lg card mt-5 ">
                    {/* Header */}
                    <div className="flex-col p-0 mb-3 border-0 rounded-3">
                        <h1 id ='card-title' className="card-title ms-3 mt-2 fw-bold text-dark">Story</h1>
                        <h6 id ='card-subtitle' className="card-subtitle ms-3 mb-3">where you confide</h6>
                    </div>

                    {/* Story */}
                    {this.render_stories()}

                    {/* Share story field */}
                    <h1 className='card-title fw-bold'>Share your story</h1>
                    <div className='row mb-3  mx-1 d-flex justify-content-center'>
                        <textarea type='text'  name="story"  className='col mb-3 share-story' contenteditable />
                        <button type='submit' className="col-sm-2 btn btn-primary btn-md ms-1">
                            SHARE
                        </button>
                    </div>
                </div>
            </div>
    )
  }
}

export default Story_page;


