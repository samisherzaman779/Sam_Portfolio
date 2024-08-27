"use client";
import Typewriter from 'typewriter-effect';

const NameWritter = () => {
    return (
        <div>
            <span className="text-2xl">Hello</span>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-accent">
                I a'm
                <br className='hidden lg:inline-block' />
                <Typewriter
                    options={{
                        strings: ['Sami Sherzaman', 'Web Developer', 'UI/UX Designer'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h1>
        </div>
    )
}

export default NameWritter;