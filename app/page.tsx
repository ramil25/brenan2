import Nav from "./components/Nav"

function Home(){
  return(
    <>
    <div className="flex min-h-screen bg-blue-500 p-4 h-50%">
      <Nav />
      <h1 className="text-white text-3xl">Hello Branan</h1>
    </div>
    </>
  )
}
export default Home