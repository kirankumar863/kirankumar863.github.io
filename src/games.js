import React, { useEffect, useState } from "react";


function Games(){
    const [name,setName]=useState("");
    const [habits,setHabits]=useState("");
    const [qualification,setQualification]=useState("");
    const [favorateHero,setFavorateHero]=useState("");
    const [favoratefood,setFavoratefood]=useState("");
    
    const [score,setScore]=useState(0);
    const [flag,setFlag]=useState(false);

    useEffect(()=>{
        if(name=="kiran" || habits=="cricket" ||qualification=="btech"||favoratefood=="biryani" ||favorateHero=="jr ntr"){
        setScore(score+1);
    }
    
    

    },[name,habits,qualification,favorateHero,favoratefood])

    
    async function checkscore(){
        
        setFlag(true)
        
        
    }

    return(
        <div>
            {flag ?  <h1>your score is {score}</h1> :
            <div>
        <h1>1. what is my name</h1>
        <div>
            <input type="radio" checked={name == "kiran"} onChange={()=>setName("kiran")}/>
            <label>kiran</label>
            <input type="radio" checked={name == "broker"} onChange={()=>setName("broker")}/>
            <label>broker</label>
            <input type="radio" checked={name == "dorababu"} onChange={()=>setName("dorababu")}/>
            <label>dorababu</label>
        </div>
        <h1>2. what are my habits</h1>
        <div>
            <input type="radio"  checked={habits == "cricket"} onChange={()=> setHabits("cricket")}/>
            <label>cricket</label>
            <input type="radio"checked={habits == "reading"}  onChange={()=> setHabits("reading")}/>
            <label>reading</label>
            <input type="radio" checked={habits == "running"} onChange={()=> setHabits("running")}/>
            <label>running</label>
        </div>
        <h1>3. what is my qualification</h1>
        <div>
            <input type="radio"  checked={qualification=="btech"} onChange={()=> setQualification("btech")}/>
            <label>btech</label>
            <input type="radio"  checked={qualification=="degree"}onChange={()=>setQualification("degree")}/>
            <label>degree</label>
            <input type="radio"checked={qualification=="diploma"} onChange={()=>setQualification("diploma")}/>
            <label>diploma</label>
        </div>
        <h1>4. who is my favorite hero</h1>
        <div>
            <input type="radio" checked={favorateHero=="sr ntr"} onChange={()=> setFavorateHero("sr ntr")}/>
            <label>sr ntr</label>
            <input type="radio" checked={favorateHero=="jr ntr"} onChange={()=> setFavorateHero("jr ntr")}/>
            <label>jr ntr</label>
            <input type="radio" checked={favorateHero=="Upcoming ntr"} onChange={()=> setFavorateHero("Upcoming ntr")}/>
            <label>upcoming ntr</label>
        </div>
        <h1>5. what is my favorite food</h1>
        <div>
            <input type="radio" checked={favoratefood=="biryani"} onChange={()=> setFavoratefood("biryani")}/>
            <label>biryani</label>
            <input type="radio" checked={favoratefood=="meals"} onChange={()=> setFavoratefood("meals")}/>
            <label>meals</label>
            <input type="radio"checked={favoratefood=="egg rice"} onChange={()=> setFavoratefood("egg rice")}/>
            <label>egg rice</label>
        </div>
        <button onClick={()=>checkscore()}>Submit</button>
        </div>
    }
        </div>
    )
}

export default Games