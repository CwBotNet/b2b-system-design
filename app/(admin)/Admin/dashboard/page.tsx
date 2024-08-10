import AdminSideBar from '@/components/SideBar/AdminSidbar.'
import React from 'react'

type Props = {}

const Dashboard = (props: Props) => {
    return (
        <>
            <div className='flex'>
                <AdminSideBar />
            </div>
        </>
    )
}

export default Dashboard