import React from 'react';
import Copy from '../data/copy'

// Example 1
{portraitWording? <div text={Copy.formText2} /> : <div text={Copy.formText1} />}

// Example 2
{!isEmpty(teamPhotos) && teamPhotos.map}

// Example 3
<Link href={!isEmpty(btnText) ? '/registration' : '/'}>{!isEmpty(btnText) ? btnText : " < Back Home"}</Link>
