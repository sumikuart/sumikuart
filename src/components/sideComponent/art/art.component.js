// Main:
import React, { useState, seContext } from 'react';

// Styles:
import './art.style.css'


// React Images << en måde at lave gallrie på


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

    const [imageData, setImageData]= useState([
        {id:'uploadone-signs', 
        name:'The God Symbols',
        tagline: 'The Original Three',
        description: 'Original there were three god symbols. But later expansions of the Lore has included more',
        dataMade:'Kim','dataUpload':'14-01-2020', 'dataCreated':'03-02-2016', 'dataType':'Concept Art', Npcs:'None'},

        {id:'uploadone-inthesnow',
        name:'Alone in the snow', 
        tagline: 'Who is looking? Do they see?', 
        description: 'This is the feeling im looking, to give our playes. How to trust?, are they looking?', 
        dataMade:'Kim', 'dataUpload':'14-01-2020', 'dataCreated':'24-02-2012', 'dataType':'Concept Art', Npcs:'Unknown'},

        {id:'uploadone-intherain', 
        name:'What have i done?',  
        tagline: 'i Wish i did not know!',  
        description: 'Nemo in the Rain, after an unspeakeble act', 
        dataMade:'Kim','dataUpload':'14-01-2020', 'dataCreated':'04-01-2011', 'dataType':'Concept Art', Npcs:'Nemo Kurai'}
    ])

    
    const [artImgHolderName, setArtImgHolderName] = useState('')
    const [artImgHolderTag, setArtImgHolderTag] = useState('')
    const [artImgHolderDescription, setArtImgHolderDescription] = useState('')
    const [artImgHolderDataMade, setArtImgHolderDataMade] = useState('')
    const [artImgHolderDataUpload, setArtImgHolderDataUpload] = useState('')
    const [artImgHolderDataCreated, setArtImgHolderDataCreated] = useState('')
    const [artImgHolderDataType, setArtImgHolderDataType] = useState('')
    const [artImgHolderDataNpc, setArtImgHolderDataNpc] = useState('')

    const openArtImageViwer = (e) => {
        setArtImageGalleriBox('show')
        setChosenArtimg(e.target.src)

        const lookingforid = e.target.dataset.id

        for(var i = 0; i < imageData.length; i++) {
            if(imageData[i].id === lookingforid) {
                setArtImgHolderName(imageData[i].name)
                setArtImgHolderTag(imageData[i].tagline)
                setArtImgHolderDescription(imageData[i].description)

                setArtImgHolderDataMade(imageData[i].dataMade)
                setArtImgHolderDataUpload(imageData[i].dataUpload)
                setArtImgHolderDataCreated(imageData[i].dataCreated)
                setArtImgHolderDataType(imageData[i].dataType)
                setArtImgHolderDataNpc(imageData[i].Npcs)
            }
        }

    }

    const openArtImageViwerTestFinisher = (e) =>{
        console.log(ChosenArtimg)
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
                                <p><strong>Upload name:</strong>The First Peek</p>
                                <p><strong>Made By:</strong> Kim </p>
                                <p><strong>Image Type:</strong> Concept Art</p>
                            </div>

                            <div className='theImgDiv flex'>

                                <div className='artImgFrame' >
                                    <img src={require('../../../assets/maingalleri/image/upload1/signs.jpg')}  data-id={'uploadone-signs'} alt="Nemo Kurai"  onClick={openArtImageViwer} />
                                </div>

                                
                                <div className='artImgFrame' >
                                    <img src={require('../../../assets/maingalleri/image/upload1/inthesnow.jpg')} data-id={'uploadone-inthesnow'} alt="Nemo Kurai"  onClick={openArtImageViwer}/>
                                </div>


                                <div className='artImgFrame'>
                                    <img src={require('../../../assets/maingalleri/image/upload1/intherain.jpg')}  data-id={'uploadone-intherain'} alt="Nemo Kurai"  onClick={openArtImageViwer}/>
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
                                <div className='leftArtLightbox'>
                                    <div className='lightboxImgHolder'>
                                        <img src={ChosenArtimg} alt="Nemo Kurai" onClick={openArtImageViwer} />


                                    </div>

                                    <div className='lightboxTextDec'>

                                        <p className='lightboxTextContent'>{artImgHolderDescription}</p>
                                    </div>

                                    <div className='lightboxTextdata'>
                                            
                                            <p className='lightboxHeadline'>File Data:</p>
                                            <ul>
                                                <li>Made by: - {artImgHolderDataMade}</li>
                                                <li>Upload date:- {artImgHolderDataUpload}</li>
                                                <li>Creation Date: - {artImgHolderDataCreated}</li>
                                                <li>Type: - {artImgHolderDataType}</li>
                                                <li>Shown NPC(s) - {artImgHolderDataNpc}</li>
                                            </ul>
                                        </div>

                                </div>
                      
                                <div className='leftArtRightbox'>
                                <div className='lightboxtextHolder'>
                                    <div className='lightboxText'>
                                        <p className='lightboxTextContentName'> {artImgHolderName}</p>
                                        <p className='lightboxTextContentTag'> {artImgHolderTag}</p>
                                
                                    </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                    <div className={'artSoundFolder ' + selectedArtsound}>
                        <p className='artFolderTitle'>Sounds:</p>
                        <p>Our Sound Manager Jakob is working on the Music as you read this</p>
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