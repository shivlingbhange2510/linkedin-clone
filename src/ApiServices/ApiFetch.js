import axios from 'axios';
import { baseUrl } from './config';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPost2 } from '../Redux/AllPost/allPostAction'
export const GetAllPost = () => {

    axios.get(`${baseUrl}/allpost`)
        .then((res) => {
            console.log('res allpost', res.data);
            if (res?.data?.length > 0) {
                console.log('dispatch  action ')
                // useDispatch(getAllPost2(res?.data))
            }
        })
    return (
        <>
        null
        </>
        )
     
    
}