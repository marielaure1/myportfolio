import { GetServerSideProps } from 'next'
import { IWork } from '@/@types/work'
import { NextPage } from "next"
import useSWR, {Fetcher} from 'swr'
import Link from "next/link"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'



type Props = {
    work: IWork[];
}

export default function Work({ work }: Props){
    const router = useRouter()
    const { _id } = router.query 
 
    const [ message, setMessage ] = useState("");
    const [ workSingle, setWorkSingle ] = useState<IWork[] | null>(null);
    const [ isLoading, setIstLoading ] = useState(false);
   
    
    const getWork = async() => {
        fetch(`/api/works/${_id}`)
        .then(response => response.json())
        .then((json) => {
            
            setWorkSingle(json.works)
            setIstLoading(false)
        })
        .catch((error) => {
            console.log(error);  
        })
    } 
    
    console.log(workSingle);
    
    const { title } = workSingle

    const updateWork = async() => {
        fetch(`/api/works/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(workSingle)

        })
        .then(response => response.json())
        .then((json) => {
            
            setWorkSingle(json.works)
            setIstLoading(false)
        })
        .catch((error) => {
            console.log(error);  
        })
    }

    
    useEffect(() => {
        if(_id){
            getWork()
        }
    }, [_id])

    const handleChange = (e) => {
        const { title } = e.target;

        setWorkSingle({...workSingle, title: title})

        // set
    }

    // if(!isLoading){
    //     return <> <h2>Chargement</h2></>
    // }

    
    if(workSingle){
        return (
            <div>
              
                    <header className="w-full px-[5vw] pt-[100px] flex">
                        <input type="text" placeholder='Nom du projet' onChange={handleChange} value={ title} className="py-[5vw] text-7xl font-semibold uppercase"/>
                    </header>

           
            </div>
        )
    }
}
