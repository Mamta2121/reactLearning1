
import Card from "./components/Card"
function App() {
   let  myObj = {
    name: "Mamta",
    age: 21
   }

   let myArr = [ 1,1,2] //can not directly pass object or array directly store it in variable and pass the variable itself

  return (
    <>
    
      <h1 className = 'bg-green-400 text-black rounded-xl'>Tailwind Test</h1>
      {/*<Card   today = "10/10/24"  myArr myObj/>*/}
      <Card/>      
      <Card/>

    </>
  )
}

export default App
