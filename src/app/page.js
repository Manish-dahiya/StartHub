import SearchInput from "@/components/SearchInput";
import robot from "../../public/robot.jpg"
import StartupCard from "@/components/StartupCard";
const posts=[
  {
    _createdAt:'Yesterday',
    views:55,
    author:{_id:1,name:"Manish"},
    _id:1,
    desc:"A robot is an automatically operated machine designed to perform tasks traditionally carried out by humans",
    image:robot,
    category:"Robots",
    title:"We Robots",
  },
  {
    _createdAt:'Yesterday',
    views:55,
    author:{_id:1,name:"Manish"},
    _id:1,
    desc:"A robot is an automatically operated machine designed to perform tasks traditionally carried out by humans",
    image:robot,
    category:"Robots",
    title:"We Robots",
  },
  {
    _createdAt:'Yesterday',
    views:55,
    author:{_id:1,name:"Manish"},
    _id:1,
    desc:"A robot is an automatically operated machine designed to perform tasks traditionally carried out by humans",
    image:robot,
    category:"Robots",
    title:"We Robots",
  },
  {
    _createdAt:'Yesterday',
    views:55,
    author:{_id:1,name:"Manish"},
    _id:1,
    desc:"A robot is an automatically operated machine designed to perform tasks traditionally carried out by humans",
    image:robot,
    category:"Robots",
    title:"We Robots",
  },
  {
    _createdAt:'Yesterday',
    views:55,
    author:{_id:1,name:"Manish"},
    _id:1,
    desc:"A robot is an automatically operated machine designed to perform tasks traditionally carried out by humans",
    image:robot,
    category:"Robots",
    title:"We Robots",
  },
  {
    _createdAt:'today',
    views:55,
    author:{_id:1,name:"Manish"},
    _id:1,
    desc:"A robot is an automatically operated machine designed to perform tasks traditionally carried out by humans",
    image:robot,
    category:"Robots",
    title:"Robot",
  },
]

export default async function Home({searchParams}) {
  const query= (await searchParams).query//search query from SearchInput


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
           <StartupCard key={posts._id}  post={item}/> 
        ))
      )
      : <p className="no-results">No startups found</p>
      }
      </div>

    </section>
    </>
  );
}
