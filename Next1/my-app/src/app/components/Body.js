import Date from "./Date";
import TaskButton from './Buttons'
import dynamic from "next/dynamic";
import Loading from '../../../img/loading.svg';
import Image from 'next/image';


const Tasks = dynamic(()=>import('./Tasks'), {ssr: false, loading: () => <div className="absolute left-1/3 top-1/3"><Image src={Loading} width={250} height={250}/></div>})

const Body = (props) => {
const url = Object.values(props)[0]

    return ( 
        <div className="h-screen relative">
            <nav className="flex h-20 items-center justify-between border-b-2 ml-5 mr-5">
                <Date />
                <TaskButton url={url}/>
            </nav>
                <Tasks props={props}/>
        </div>
     );
}
 
export default Body;