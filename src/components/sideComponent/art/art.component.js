// Main:
import React, { useState, seContext } from 'react';

// Styles:
import './art.style.css'



const ArtComponent = () => {
    

const [selectedArtimg,setSelectedArtimg] = useState('show')
const [selectedArtsound,setSelectedArtsound] = useState('hide')
const [selectedArtvid,setSelectedArtvid] = useState('hide')

    const setArtFolderImg = () => {
        setSelectedArtimg('show')
        setSelectedArtsound('hide')
        setSelectedArtvid('hide')
    }

    const setArtFolderSound = () => {
        setSelectedArtimg('hide')
        setSelectedArtsound('show')
        setSelectedArtvid('hide')
    }

    const setArtFolderVid = () => {
        setSelectedArtimg('hide')
        setSelectedArtsound('hide')
        setSelectedArtvid('show')
    }

    const [artImageGalleriBox, setArtImageGalleriBox] = useState('hide')
    const [ChosenArtimg, setChosenArtimg]=useState('inthesnow')


    const openArtImageViwer = (e) =>{
        setArtImageGalleriBox('show')
        setChosenArtimg(e.target.src)
        console.log(e.currentTarget.innerHTML)
    }

    const closeArtImageViwer = (e) => {
        setArtImageGalleriBox('hide')
    }

    return (
        <div className='artcomponentstyle'>

            <div className='headline'>
                <p>Images, Sound & Videos</p>
            </div>

            <div className='underheadline'>
                <p>Concept Art, Images, Sound & in-game videos</p>
            </div>

            <div className='mainArtContent'>
                <p className='smallHeadline spacerArt'>Select Art Type:</p>

                <div className='artCategorySelector flex'>
                    <div className={'artSelectImages '+ selectedArtimg} onClick={setArtFolderImg}>
                        <p>Images</p>
                    </div>
                    <div className={'artSelectMusic ' + selectedArtsound} onClick={setArtFolderSound}>
                        <p>Sound</p>
                    </div>
                    <div className={'artSelectVideo ' + selectedArtvid} onClick={setArtFolderVid}>
                        <p>Videos</p>
                    </div>
                </div>

                <div className='artSelectedContent'>
                    <div className={'artImgFolder ' + selectedArtimg}>
                        <p className='artFolderTitle'> Images:</p>

                        <div className='uploadArtDivImg'>
                            <div className='infoImgDiv flex'>
                                <p><strong>Uploaded:</strong> 14-01-2020</p>
                                <p><strong>Made By:</strong> Kim </p>
                                <p><strong>Image Type:</strong> Concept Art</p>
                            </div>

                            <div className='theImgDiv flex'>

                                <div className='artImgFrame' >
                                    <img src={require('../../../assets/maingalleri/image/upload1/inthesnow.jpg')} alt="Nemo Kurai" onClick={openArtImageViwer}/>
                                    <p className='imgArtDescription'> this is a test </p>
                                </div>

                                <div className='artImgFrame' >
                                    <img src={require('../../../assets/maingalleri/image/upload1/signs.jpg')} alt="Nemo Kurai" onClick={openArtImageViwer} />
                                </div>
                                <div className='artImgFrame'>
                                    <img src={require('../../../assets/maingalleri/image/upload1/intherain.jpg')} alt="Nemo Kurai"  onClick={openArtImageViwer}/>
                                </div>
                                <div className='artImgFrame'></div>
                                <div className='artImgFrame'></div>
                                <div className='artImgFrame'></div>
                            </div>
                        </div>

                        <div className={'artImgLightbox ' + artImageGalleriBox}>

                            <div className='closeChosenArtImage' onClick={closeArtImageViwer}>
                                <p>X</p>
                            </div>

                            <div className='flex'>

                                <div className='lightboxImgHolder'>
                                     <img src={ChosenArtimg} alt="Nemo Kurai"  onClick={openArtImageViwer}/>
                                </div>

                                <div className='lightboxtextHolder'></div>
                            </div>

                        </div>

                    </div>

                    <div className={'artSoundFolder ' + selectedArtsound}>
                        <p className='artFolderTitle'>Sounds:</p>
                        <p>Our Sound Manager Jakob is working on the first Music as you read this</p>
                        </div>

                    <div className={'artVidFolder ' + selectedArtvid}>
                        <p className='artFolderTitle'>Videos:</p>
                        <p>Our Videos, wil be postet here as soon as they are uploade to YouTube</p>
                        <p>The First Video will be an intorduction video to the site</p>
                        <p>Just need to have more to show, before making the first video</p>
                    </div>

                </div>

            </div>

        </div>
    )

}

export default ArtComponent