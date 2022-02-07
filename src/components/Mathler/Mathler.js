import React, {useEffect} from 'react'
import './Mathler.css'
import $ from 'jquery'

export default function Mathler() {

    useEffect(() => {
        $('body').css('background-color', 'rgb(237 237 237)')
        $('body').css('transition', '2s all')
    }, [])

    return (
        <div className="mathler">
            <iframe id='mathlerIframe' title='mathler' className='mathlerIframe' src="https://www.mathler.com/" frameborder="0"></iframe>
        </div>
    )
}