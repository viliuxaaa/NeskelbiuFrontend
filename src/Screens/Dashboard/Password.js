import React from 'react'
import SideBar from './SideBar'
import { Input } from '../../Components/UsedInputs'

function Password() {
  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
            <h2 className='text-xl font-bold'>Change Password</h2>
            <Input 
                label="Slaptazodis" 
                placeholder="*******"
                type="password"
                bg={true}
            />
            <Input 
                label="Naujas Slaptazodis" 
                placeholder="*******"
                type="password"
                bg={true}
            />
            <Input 
                label="Patvirtinti Slaptazodi" 
                placeholder="*******"
                type="password"
                bg={true}
            />
            <div className='flex justify-end items-center my-4'> 
                <button className='bg-main font-medium transitions hover:bg-subMain border border-text text-text py-3 px-6 rounded w-full sm:w-auto'>
                    Keisti Slatazodi
                </button> 
            </div>
        </div>
    </SideBar>
  )
}

export default Password