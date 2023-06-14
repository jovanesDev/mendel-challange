import {createRef, useEffect, useState} from 'react'

const useImageLoading = () => {

    const imgRef = createRef('')
    const [imageLoaded,setImagageLoaded] = useState(false)

    useEffect(() => {
        if(imgRef.current && imgRef.current.complete){
            handleImageLoaded()
        }
        return () => {
            
        }
    }, [])
    
    const handleImageLoaded = () => {
        if (!imageLoaded) {
            console.log('image loaded')
            setImagageLoaded(true)
        }
    }

    return {
        imgRef,
        imageLoaded,
        handleImageLoaded
    }
}

export default useImageLoading