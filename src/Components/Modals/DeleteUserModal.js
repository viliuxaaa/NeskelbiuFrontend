import React from 'react'
import MainModal from './MainModal'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import { useTranslation } from 'react-i18next';

function DeleteModal({ modalOpen, setModalOpen }) {
    const { auth, setAuth } = useAuth();
    const [t, i18n] = useTranslation("global");
    const DELETE_URL = "api/v1/user/"+auth.userId+"/user-delete";

    const privateAxios = useAxiosPrivate();
    
    const navigate = useNavigate();

    async function handleDelete(e) {
        e.preventDefault();
        try{
            const response = await privateAxios.delete(DELETE_URL);
            
            if(response.status === 200){
                setAuth(false);
                navigate('/');
            }
        }catch(err){
            console.log("YOU CANNOT DO THAT! " )
        }}
    
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <div className='inline-block border border-border rounded-md align-middle p-6 overflow-y-auto h-4/5 lg:h-3/5 bg-darkAccent text-white'>
            
                <p
                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                    htmlFor="file_input"
                >
                    <strong>{t("deleteUserModal.0")}</strong>
                </p>
                <button 
                    className="px-6 py-2 bg-gray-600 hover:bg-gray-800 text-white rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none"
                    onClick={() => setModalOpen(false)}
                >
                    {t("deleteUserModal.1")}
                </button>
                <button
                    className="px-5 py-2 bg-red-500 hover:bg-red-700 text-white rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none"
                    onClick={(e) => {
                        setModalOpen(false)
                        handleDelete(e)
                    }}
                >
                    {t("deleteUserModal.2")}
                </button>
           
        </div>
    </MainModal>
  )
}

export default DeleteModal