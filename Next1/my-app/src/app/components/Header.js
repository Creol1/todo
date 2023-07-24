import Link from "next/link";
import TaskButton from "./Buttons";

const Header = (props) => {
    const url = Object.values(props)[0]
    return ( 
        <header className=" bg-gray-200 col-span-1 h-screen">
            <h1 className="uppercase text-slate-600 font-bold pt-5 pl-16 pb-5 text-xl">To-do list</h1>
            <div className='ml-20 mb-5'>
            <TaskButton url={url}/>
            </div>
            <nav className="flex">
                <ul>
                    <li className="link"> <Link href={'./'}>All tasks</Link></li>
                    <li className="link"> <Link href={'./important'}>Important tasks</Link></li>
                    <li className="link"> <Link href={'./completed'}>Completed tasks</Link></li>
                    <li className="link"> <Link href={'./uncompleted'}>Uncompleted tasks</Link></li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;