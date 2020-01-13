// Main:
import React, { useState, useContext, useEffect } from 'react';

// Styles:
import './../npc.style.css'



const NemoNPCComponent = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    const [npcProfile ,setNpcProfile] = useState('show')
    const [npcBackstory ,setNpcBackstorye] = useState('hide')
    const [npcAbilities ,setNpcAbilities] = useState('hide')
    const [npcInterview ,setNpcInterview] = useState('hide')
    const [npcImg ,setNpcImg] = useState('hide')

    const [npcImageGalleriBox, setNpcImageGalleriBox] = useState('hide')
    const [chosenNPCimg, setChosenNPCimg]=useState('NemoNpcImg01')
    
    const setNpcProfileTab = () => {
        setNpcProfile('show')
        setNpcBackstorye('hide')
        setNpcAbilities('hide')
        setNpcInterview('hide')
        setNpcImg('hide')
    }
    const setNpcBackstoryTab = () => {
        setNpcProfile('hide')
        setNpcBackstorye('show')
        setNpcAbilities('hide')
        setNpcInterview('hide')
        setNpcImg('hide')
    }
    const setNpcAbilitiesTab = () => {
        setNpcProfile('hide')
        setNpcBackstorye('hide')
        setNpcAbilities('show')
        setNpcInterview('hide')
        setNpcImg('hide')
    }
    const setNpcInterviewTab = () => {
        setNpcProfile('hide')
        setNpcBackstorye('hide')
        setNpcAbilities('hide')
        setNpcInterview('show')
        setNpcImg('hide')
    }
    const setNpcImgTab = () => {
        setNpcProfile('hide')
        setNpcBackstorye('hide')
        setNpcAbilities('hide')
        setNpcInterview('hide')
        setNpcImg('show')
    }

    const openNpcImage = (e) => (   

        console.log(e.target.src),
        setNpcImageGalleriBox('show'),
        setChosenNPCimg(e.target.src)
    )

    const closeNpcImage = () => {
        setNpcImageGalleriBox('hide')
    }

    return (
        <div className='npcStyle'>

            <div className='headline'>
                <p>Nemo Kurai </p>
            </div>

            <div className='underheadline'>
                <p>Miko of Freedom</p>
            </div>

            <div className='npcTopContent flex'>

                <div className='textNPCHolder'>
                    <p className='labelNPC'>Name:</p>
                    <p className='labelNPCcontent'>Nemo Kurai</p>

                    <p className='labelNPC'>Age:</p>
                    <p className='labelNPCcontent'>28</p>

                    <p className='labelNPC'>Gender:</p>
                    <p className='labelNPCcontent'>female</p>

                    <p className='labelNPC'>Hobby:</p>
                    <p className='labelNPCcontent'>Drawing, painting & Reading</p>

                    <p className='labelNPC'>Music Theme:</p>
                    <p className='labelNPCcontent'>Not made yet</p>

                    <p className='labelNPC'>Voice Actor:</p>
                    <p className='labelNPCcontent'>Not yet found</p>

                    <p className='labelNPC'>Note:</p>
                    <p className='labelNPCcontent'>This NPC is open to change. If anyone gets a good ideas that fits</p>
                    
                </div>

                <div className='imgHolderNpcs'>
                    <img src={require('../../../../../assets/charecters/nemo/nemoSelect.png')} alt="Nemo Kurai" />
                </div>

            </div>

            <div className='npcBottomContent'>

                <div className='npcFanOptions flex'>
                    <div className={'npcOptionsdesign ' + npcProfile} onClick={setNpcProfileTab}>
                        <p>
                            Profile
                        </p>
                    </div>

                    
                    <div className={'npcOptionsdesign ' + npcInterview} onClick={setNpcInterviewTab}>
                        <p>
                            Interview
                        </p>
                    </div>

                    <div className={'npcOptionsdesign ' +  npcBackstory}  onClick={setNpcBackstoryTab} >
                        <p>
                            Backstory
                        </p>
                    </div>

                    <div className={'npcOptionsdesign ' +  npcAbilities} onClick={setNpcAbilitiesTab}>
                        <p>
                            Abilities
                        </p>
                    </div>

                    <div className={'npcOptionsdesign ' +  npcImg} onClick={setNpcImgTab}>
                        <p>
                        Images & Sound
                        </p>
                    </div>

                </div>

                <div className={'npcContent ' + npcProfile}>
                    <p className='smallHeadline'>Profile</p>
                    <p>Hej! My name is Nemo :)</p>
                </div>

                <div className={'npcContent ' + npcInterview}>
                    <p className='smallHeadline'>Interview</p>
                    <p>More to come</p>
                </div>

                <div className={'npcContent ' + npcBackstory}>
                    <p className='smallHeadline'>Backstory</p>
                    <p>More to come</p>
                </div>

                <div className={'npcContent ' + npcAbilities}>
                    <p className='smallHeadline'>Abilities</p>
                    <p>More to come</p>
                </div>

                <div className={'npcContent ' + npcImg}>
                    <p className='smallHeadline'>Image, Music & Voice Gallery</p>

                    <div className='imgNpcGalleri'>

                        <div className='flex imgNpcGalleriInfo'>
                        <p><strong>Name:</strong> Old images</p>
                        <p><strong>Type:</strong> Images</p>
                        <p><strong>Uploaded:</strong> 13-01-2020</p>
                        <p><strong>Creator:</strong> Kim</p>
                        </div>
    

                        <div className='imgGalleriGruppe flex'>
    
                           <div className='imgGalleriNpcHolder' onClick={openNpcImage}>
                           <img src={require('../../../../../assets/charecters/nemo/galleri/img01.jpg')} alt="Nemo Kurai" />
                           </div>
                           
                           <div className='imgGalleriNpcHolder' onClick={openNpcImage}>
                           <img src={require('../../../../../assets/charecters/nemo/galleri/img02.jpg')} alt="Nemo Kurai" />
                           </div>
                           
                           <div className='imgGalleriNpcHolder' onClick={openNpcImage}>
                           <img src={require('../../../../../assets/charecters/nemo/galleri/img03.jpg')} alt="Nemo Kurai" />
                           </div>
                           
                           <div className='imgGalleriNpcHolder'></div>
                           
                           <div className='imgGalleriNpcHolder'></div>



                        </div>
                    </div>
                </div>

            </div>


            

            <div className={'ligthboxforNpcGalleri ' + npcImageGalleriBox}>

                <div>

                    <div className='npcGalleriCloser' onClick={closeNpcImage}>
                        <p>X</p>
                    </div>

                    <img src={chosenNPCimg} alt="chosen image"/>

                </div>
       
            </div>

        </div>
    )

}

export default NemoNPCComponent