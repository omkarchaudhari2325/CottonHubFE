import React from 'react'
import { AuthContext } from '../../context/AuthContext';
import { useState,useReducer,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
axios.defaults.baseURL = `http://localhost:3000`;
const ChangePass = () => {

    // formData.append("file", file);

    const {login,setLogin} = useContext(AuthContext);
    const{data,setData} = useContext(AuthContext)
    const [loginData,setLoginData] = useState(null);
    const [loginGoogle,setLoginGoogle] = useState(false);
    const navigate = useNavigate();
    const [password,setPassword] = useState("")
    const [changedPassword,setChangedPassword] = useState("")
    const [isPasswordValid,setIsPasswordValid] = useState(false)

    const isDashBoardValid = async () => {
        try {
          // const token = localStorage.getItem("userDataToken");
            const response = await axios.get("http://localhost:3000/api/v1/get-token");
            const resData = await response.data.user;
            setLoginData(data);

            setData(resData);
            setLogin(true);
            // isLoggedIn(true);


        } catch (err) {
          console.error('Error fetching user data:', err);
          setLoginData(null);
          setData({})
          // isLoggedIn(false);
          setLogin(false);
          navigate("/inValidUser")
        }
    }

    const verifyPassword = async () =>{

            //
            // console.log(data.email)
            const formData = new FormData();
            const email = data?.email
            formData.append("email",data?.email)
            formData.append("password",password)

            // console.log(password);
            try{
                const response = await axios.post("/api/v1/verify-password",formData);
                const resData = await response.data;
                setIsPasswordValid(true)
                console.log(resData);
                if(response.data.success === true){

                    toast.success("Password verified")
                }
            }
            catch(err){
                toast.error("Wrong Password")
                console.log(err);
                setIsPasswordValid(false)
            }
    }
    const changePassword = async () =>{
        try{

            const formData = new FormData();
            const email = data?.email
            formData.append("email",data?.email)
            formData.append("password",changePassword)
            const response = await axios.post("/api/v1/change-password",formData);
                const resData = await response.data;
                setIsPasswordValid(true)
                console.log(resData);

        }
        catch(err){

        }
    }

    useEffect(() =>{
        isDashBoardValid();
    },[])

    if(!data) {
        return (
            <div>Not authorized</div>
        )
    }
    // console.log(password)
  return (
    <div className='mt-32 max-w-[1200px] mx-auto flex justify-center items-center'>
            <div className="form-container shadow-xl rounded-lg w-7/12 p-5 ">

                    {/* <input type="text" placeholder='enter password' /> */}
                    <div className="details">
                    <h1 className='text-2xl font-bold mb-5'>Change your password</h1>


                    <label htmlFor="" className=''>Enter your current password <span className='text-red-700'><sup>*</sup></span>
                    </label>
                    <input disabled = {isPasswordValid} type="password" className='mt-5 w-full h-10 border p-2 rounded-lg border-gray-600 outline-none' name='password'
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                      />

                    <button  type='button' onClick={verifyPassword} className='mt-5 bg-light-blue-600 w-32 h-10 rounded-lg text-white hover:bg-light-blue-500 cursor-pointer'>Verify</button>
                    </div>


                    {
                        isPasswordValid &&
                        <div className="details mt-6">


                    <label htmlFor="" className=''>Enter new password <span className='text-red-700'><sup>*</sup></span>
                    </label>
                    <input type="enter password" className='mt-5 w-full h-10 border p-2 rounded-lg border-gray-600 outline-none' onChange={(e) =>{
                        setChangedPassword(e.target.value);
                    }}  />

                    <button type='button' onClick={changePassword} className='mt-5 bg-black w-40 h-10 rounded-lg text-white'>Change Password</button>
                    </div>

                    }




            </div>

    </div>
  )
}

export default ChangePass
