import React from 'react'
import Intro from './Intro'
import Contact from './Contact'
import ListCard from './ListCard'

export default function Content() {
    return (
        <>
            <div className="container">
                <div className="row">
                <Intro/>
                <Contact/>
                </div>
                <div className="row">
                    <ListCard/>
                </div>
            </div>
        </>
    )
}
