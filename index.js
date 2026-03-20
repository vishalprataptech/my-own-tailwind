const x = document.querySelectorAll(".button");
x.forEach((chai) => {
    chai.setAttribute("style",` background-color: #cd6911; color: white;padding: 12px 24px;font-size: 16px;border: none;border-radius: 8px;cursor: pointer;transition: 0.3s;font-family: sans-serif;`)
});

const y = document.querySelectorAll(".div");
y.forEach((chai)=>{
    chai.setAttribute("style",` background-color: #32c356;padding: 20px;margin: 15px;border-radius: 12px;box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        border: 1px solid #e0e0e0;max-width: 400px;font-family: sans-serif;line-height: 1.6;`)
}); 

const a = document.querySelectorAll(".body");
a.forEach((chai) => {
    chai.setAttribute("style",` 
          margin: 0;                  
  font-family: Arial, sans-serif; 
  background-color: #181515;   
  color: #ae1a1a;                  
  line-height: 1.6;`)

});
const b = document.querySelectorAll(".title");
b.forEach((chai) => {
    chai.setAttribute("style",`
         font-size: 2.5rem;            
  font-weight: 700;             
  color: #e7dede;                  
  line-height: 1.2;               
  margin-bottom: 0.5em;          
  text-wrap: balance;  `)

});
const c = document.querySelectorAll("p");
c.forEach((chai) => {
    chai.setAttribute("style",`
          font-size: 1.125rem;       
  line-height: 1.6;         
  color: #6412e8;              
  margin-bottom: 1.5rem;    
  max-width: 65ch;`)

});
const d = document.querySelectorAll("h2tag");
d.forEach((chai) => {
    chai.setAttribute("style",`
          font-size: 2rem;             
  font-weight: 600;           
  color: #17b1db;
  margin-top: 2.5rem;         
  margin-bottom: 1rem;        
  line-height: 1.3;          
  letter-spacing: -0.01em;`)

});
const e = document.querySelectorAll("h3");
e.forEach((chai) => {
    chai.setAttribute("style",`
          font-size: 1.5rem;         
  font-weight: 600;      
  color: #9a0a7b;
  margin-top: 1.5rem;         
  margin-bottom: 0.75rem;     
  line-height: 1.4; `)

});
const f = document.querySelectorAll("h4");
f.forEach((chai) => {
    chai.setAttribute("style",`
          font-size: 1.25rem;        
  font-weight: 600;          
  color: #16a9a9;                
  margin-top: 1.25rem;      
  margin-bottom: 0.5rem;     
  line-height: 1.4;`)

});
const g = document.querySelectorAll("h5");
g.forEach((chai) => {
    chai.setAttribute("style",`
          font-size: 1.1rem;          
  font-weight: 700;           
  color: #ec5d0b;               
  margin-top: 1rem;           
  margin-bottom: 0.5rem;      
  line-height: 1.3;`)

});
const h = document.querySelectorAll("h6");
h.forEach((chai) => {
    chai.setAttribute("style",`
          font-size: 0.875rem;     
  font-weight: 700;        
  text-transform: uppercase; 
  letter-spacing: 0.05em; 
  color: #f81414;            
  margin-top: 1rem;
  margin-bottom: 0.5rem;`)

});

const i = document.querySelectorAll(".b");
i.forEach((chai) => {
    chai.setAttribute("style",`
          font-weight: 700;       
  color: #8a0c47;`)

});
const j = document.querySelectorAll(".strong");
j.forEach((chai) => {
    chai.setAttribute("style",`
          font-weight: 700;       
  color: #279d17;`)

});
const k = document.querySelectorAll(".em");
k.forEach((chai) => {
    chai.setAttribute("style",`
          font-style: italic;
  color: #d6e87c;`)

});
const l = document.querySelectorAll(".i");
l.forEach((chai) => {
    chai.setAttribute("style",`
          font-style: italic;
  color: #ad3b57;`)

});
const m = document.querySelectorAll(".br");
m.forEach((chai) => {
    chai.setAttribute("style",`
          display: block;           
  content: "";              
  margin-top: 10px;`)

});
const n = document.querySelectorAll(".hr");
n.forEach((chai) => {
    chai.setAttribute("style",`
          border: 0;                
  height: 1px;              
  background-color: #ddd;  
  margin: 2rem 0;`)

});
const o = document.querySelectorAll(".a");
o.forEach((chai) => {
    chai.setAttribute("style",`
          color: #007bff;            
  text-decoration: none;     
  transition: color 0.2s; `)

});
const p = document.querySelectorAll(".img");
p.forEach((chai) => {
    chai.setAttribute("style",`
          max-width: 100%;    
  height: auto;       
  display: block;`)

});
const q = document.querySelectorAll(".figure");
q.forEach((chai) => {
    chai.setAttribute("style",`
          margin: 2rem auto;         
  max-width: 800px;          
  padding: 10px;             
  background: #fdfdfd;       
  border: 1px solid #eee;    
  border-radius: 8px;`)

});
const r = document.querySelectorAll(".figcaption");
r.forEach((chai) => {
    chai.setAttribute("style",`
          margin-top: 10px;          
  font-size: 0.9rem;         
  color: #c0ebe9;              
  text-align: center;      
  font-style: italic;        
  line-height: 1.4;`)

});
const s = document.querySelectorAll(".ul");
s.forEach((chai) => {
    chai.setAttribute("style",`
          list-style-type: none;      
  padding: 0;                 
  margin: 1.5rem 0;`)

});
const t = document.querySelectorAll(".li");
t.forEach((chai) => {
    chai.setAttribute("style",`
          padding: 8px 12px;         
  margin-bottom: 4px;        
  color: #d1cd88;              
  line-height: 1.5;          
  transition: background 0.2s;`)

});
const u = document.querySelectorAll(".ol");
u.forEach((chai) => {
    chai.setAttribute("style",`
          list-style-type: upper-roman;
  list-style-position: outside; 
  padding-left: 2rem;           
  line-height: 1.6;`)

});
const v = document.querySelectorAll(".dl");
v.forEach((chai) => {
    chai.setAttribute("style",`
          margin: 2rem 0;
  line-height: 1.6;`)

});
const w = document.querySelectorAll(".dt");
w.forEach((chai) => {
    chai.setAttribute("style",`
  font-weight: 700;          
  color: #642025;
  margin-top: 1rem;`)

});
const z = document.querySelectorAll(".dd");
z.forEach((chai) => {
    chai.setAttribute("style",`
  margin-left: 0;            
  color: #17df2b;               
  margin-bottom: 0.5rem`)

});
const aa = document.querySelectorAll(".table");
aa.forEach((chai) => {
    chai.setAttribute("style",`
          width: 100%;               
  border-collapse: collapse; 
  margin: 2rem 0;            
  font-family: sans-serif;
  box-shadow: 0 0 20px rgba(59, 156, 14, 0.05);`)

});
const ab = document.querySelectorAll(".tr");
ab.forEach((chai) => {
    chai.setAttribute("style",`
         transition: background-color 0.2s ease;`)

});
const ac = document.querySelectorAll(".td");
ac.forEach((chai) => {
    chai.setAttribute("style",`
          padding: 12px 15px;       
  text-align: left;        
  vertical-align: middle;   
  border-bottom: 1px solid #eee; 
  color: #3fb710;              
  font-size: 0.95rem;`)

});
const ad = document.querySelectorAll(".thead");
ad.forEach((chai) => {
    chai.setAttribute("style",`
          background-color: #f8f9fa; /* Light grey background */
  border-bottom: 2px solid #dee2e6;`)

});
const ae = document.querySelectorAll(".tbody");
ae.forEach((chai) => {
    chai.setAttribute("style",`
          background-color: #ffffff;`)

});
const af = document.querySelectorAll(".th");
af.forEach((chai) => {
    chai.setAttribute("style",`
          padding: 16px 15px;        
  text-align: left;         
  background-color: #f8f9fa; 
  color: #1977d4;           
  font-size: 0.85rem;        
  text-transform: uppercase;  
  letter-spacing: 0.05em;    
  font-weight: 700;           
  border-bottom: 2px solid #dee2e6;`)

}); 
const ah = document.querySelectorAll(".caption");
ah.forEach((chai) => {
    chai.setAttribute("style",`
  padding: 15px;             
  font-size: 1.25rem;        
  font-weight: 700;         
  color: #338dc9;              
  text-align: left;          
  caption-side: top;         
  font-family: 'Inter', sans-serif;`)

}); 
const ai = document.querySelectorAll(".tfoot");
ai.forEach((chai) => {
    chai.setAttribute("style",`
          background-color: #f8f9fa; 
  border-top: 2px solid #dee2e6;`)

}); 
const aj = document.querySelectorAll(".form");
aj.forEach((chai) => {
    chai.setAttribute("style",`
          max-width: 500px;           
  margin: 2rem auto;         
  padding: 2rem;              
  background-color: #ffffff;  
  border-radius: 12px;        
  box-shadow: 0 10px 25px rgba(31, 184, 125, 0.05); 
  border: 1px solid #eee;`)

}); 
const ak = document.querySelectorAll(".input");
ak.forEach((chai) => {
    chai.setAttribute("style",`
         width: 100%;
  padding: 12px 16px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;`)

}); 
const al = document.querySelectorAll(".textarea");
al.forEach((chai) => {
    chai.setAttribute("style",`
          width: 100%;
  min-height: 120px;
  padding: 12px 16px;
  margin: 8px 0;
  display: block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.5;
  resize: vertical;
  transition: border-color 0.3s, box-shadow 0.3s;`)

}); 
const am = document.querySelectorAll(".select");
am.forEach((chai) => {
    chai.setAttribute("style",`
          appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  padding: 10px 15px;
  font-size: 16px;
  color: #46bc1c;
  background-color: #fff;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;`)

}); 
const an = document.querySelectorAll(".header");
an.forEach((chai) => {
    chai.setAttribute("style",`
          display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(213, 54, 54, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;`)

}); 
const ao = document.querySelectorAll(".footer");
ao.forEach((chai) => {
    chai.setAttribute("style",`
          background-color: #aee6b6;
  color: #fff;
  padding: 40px 5%;
  font-family: sans-serif;`)

}); 
const ap = document.querySelectorAll(".main");
ap.forEach((chai) => {
    chai.setAttribute("style",`
          max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  min-height: calc(100vh - 200px);
  line-height: 1.6;
  color: #5ae63b;`)

}); 
const aq = document.querySelectorAll(".article");
aq.forEach((chai) => {
    chai.setAttribute("style",`
          max-width: 800px;
  margin: 0 auto 40px;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(222, 204, 204, 0.05);`)

}); 
const ar = document.querySelectorAll(".section");
ar.forEach((chai) => {
    chai.setAttribute("style",`
          padding: 60px 20px;
  margin-bottom: 40px;
  background-color: #f9f9f9;
  border-radius: 12px;
  overflow: hidden;`)

}); 
const as = document.querySelectorAll(".aside");
as.forEach((chai) => {
    chai.setAttribute("style",`
          flex: 0 0 300px;
  padding: 25px;
  background-color: #f8f9fa;
  border-left: 4px solid #007bff;
  border-radius: 0 8px 8px 0;
  height: fit-content;`)

}); 
const at = document.querySelectorAll(".time");
at.forEach((chai) => {
    chai.setAttribute("style",`
          display: inline-block;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  color: #d9534f;
  background-color: #f9f2f4;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.95em;
  border: 1px solid #e1e1e8;`)

}); 
const au = document.querySelectorAll(".audio");
au.forEach((chai) => {
    chai.setAttribute("style",`
          width: 100%;
  max-width: 400px;
  height: 45px;
  border-radius: 30px;
  background-color: #f1f3f4;
  box-shadow: 0 4px 6px rgba(35, 179, 148, 0.1);
  outline: none;`)

}); 
const av = document.querySelectorAll(".video");
av.forEach((chai) => {
    chai.setAttribute("style",`
          width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(21, 165, 67, 0.3);
  background-color: #de2626;
  display: block;
  margin: 0 auto;`)

}); 
const aw = document.querySelectorAll(".object");
aw.forEach((chai) => {
    chai.setAttribute("style",`
          display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: 400px;
  border: 2px dashed #ddd;
  border-radius: 8px;
  background-color: #fafafa;
  overflow: hidden;`)

}); 
const ax = document.querySelectorAll(".embed");
ax.forEach((chai) => {
    chai.setAttribute("style",`
          display: block;
  width: 100%;
  max-width: 100%;
  min-height: 450px;
  border-radius: 10px;
  border: none;
  box-shadow: 0 8px 24px rgba(203, 200, 33, 0.12);
  background-color: #eee;`)

}); 
const ay = document.querySelectorAll(".trac");
ay.forEach((chai) => {
    chai.setAttribute("style",`
        display: none;`)

}); 

 