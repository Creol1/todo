const CurrentDate = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return ( 
            <div className="text-md font-semibold">{date}</div>
     );
}
 
export default CurrentDate;