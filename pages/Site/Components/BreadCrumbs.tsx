import Link from 'next/link'
import React from 'react'
import { CgMediaLive } from 'react-icons/cg'
import { MdRemoveRedEye } from 'react-icons/md'

const BreadCrumbs = ({ crumbTitle, crumbUrl }: any) => {
    return (
        <div className="breadCrumbs">
            <div>
                <b><CgMediaLive /></b>
                <i>{crumbTitle}</i>
            </div>
            <Link href={crumbUrl}>
                <b>See All</b>
                <i><MdRemoveRedEye /></i>
            </Link>
        </div>
    )
}

export default BreadCrumbs
