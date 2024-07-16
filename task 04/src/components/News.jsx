import React,{useEffect,useState} from 'react'

const News = ({category}) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
   useEffect(() => {
    const fetchData = async () => {
      try{
        setLoading(true)
        const dataObj = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=ebb0989b4cab46ba9391409c5d99427a`);
  
        if (!dataObj.ok) {
          if (dataObj.status >= 400 && dataObj.status < 500) 
            throw new Error(`Client Error: ${dataObj.status} Unable to fetch data from the server.`);
          else if (response.status >= 500) 
            throw new Error(`Server Error: ${dataObj.status} The server encountered a problem.`);
          else 
            throw new Error(`Unexpected Error: ${dataObj.status} Unable to fetch data.`);
        }
  
        const data = await dataObj.json();
        console.log(data);
        setNews(data.articles)
        setLoading(false)
      }
      catch(error){
        setError(error.message)
        setLoading(false)
      }
    }
    fetchData();
   }, [category])
   
  
    if (loading) {
      return <div className='h-[100vh] flex items-center justify-center'><img src="src\assets\loader.gif" alt="Loading..." className='w-20 h-20'/></div>
    }
  
    if (error) {
      alert(error)
    }
  
    return (
      <div className='mt-4'>
        <h1 className='text-2xl text-black italic font-bold text-center my-3'>TOP HEADLINES - {category.toUpperCase()}</h1>
        <div className='w-4/5 m-auto flex flex-wrap gap-3 my-3 justify-center'>
          {news.map((i) => (
           i.title !== '[Removed]' && <a key={i.url} className='flex flex-col gap-3 lg:w-[32%] md:w-[45%] h-[50vh] border-2 border-black rounded-lg p-3 overflow-hidden' href={`${i.url}`} target='_blank'>
              <img src={i.urlToImage ?i.urlToImage : "https://www.hindustantimes.com/ht-img/img/2023/11/15/1600x900/TOPSHOT-PALESTINIAN-ISRAEL-CONFLICT-ARMY-1_1700049977931_1700049993511.jpg" } alt="image" className='w-full h-[40%]'/>
              <span className='font-semibold text-xl text-black text-center h-[20%]'>{i.title ? i.title.slice(0,40):""}</span>
              <p className='text-md h-[40%]'>{i.description ?`${i.description.slice(0,75)} ...`: i.title}</p>
            </a>
          ))}
        </div>
      </div>
    );
  };
export default News