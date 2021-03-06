import React from 'react'


class LifeStory extends React.Component {

    render(){
     const story = this.props.story;

        return(
            <section className='story'>
                <div className='story__date'>{story.time}</div>
                <a className='story__link' href={story.fromLink} target='_blank' ><img className='story__image' src={story.image} /></a>
                <div className='story__info'>
                    <div className='header'>{story.title}</div>
                    <div>At : <a className='from-link' href={story.fromLink} target='_blank' >
                            {story.from}  
                        </a>
                    </div>
                    <div className='desc'>{story.description}</div>
                </div>
      
            </section>
        )
    }
}

export default LifeStory