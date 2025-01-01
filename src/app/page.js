import SearchInput from "@/components/SearchInput";
import robot from "../../public/robot.jpg"
import StartupCard from "@/components/StartupCard";


export default async function Home({searchParams}) {
  const query= (await searchParams).query//search query from SearchInput
  let posts=[];

  try {
    const response= await fetch(`http://localhost:3000/api/create-startup?query=${query}`,{
      method:"GET"
    })
    const res= await response.json();
    if(res.success){
      posts=res.message;
    }
  else console.log("success is :",res.success);
  } catch (error) {
    console.log("error in catch at home",error)
  }
  


  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup, <br/>
          Connect with enterpeneurs
        </h1>
        <p className="sub-heading !max-w-3xl">Submit ideas,Vote on Pitches ,and Get Noticed in Virtual Competitions</p>
        <SearchInput query={query}/> 
      </section> 

    <section className="section_container">
      <p className="text-30-semibold"></p>
      {query? `search result for ${query}` : 'All Startups'}

      <div className="card_grid">
      { posts?.length>0?(
        posts?.map((item,index)=>(
           <StartupCard key={item?._id}  post={item}/> 
        ))
      )
      : <p className="no-results">No startups found</p>
      }
      </div>

    </section>
    </>
  );
}
