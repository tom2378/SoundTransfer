export default function Home() {
 const links = [
  ["SoundTransfer — version 4", "/versions/4/index.html", "Version la plus récente du transfert par son"],
  ["Décodeur SSTV", "/sstv", "Décodage SSTV dans le navigateur"],
  ["Pong", "/pong/index.html", "Jeu Pong"],
  ["Version 3", "/versions/3/index.html", "Ancienne version"],
  ["Version 2", "/versions/2/index.html", "Ancienne version"],
  ["Version 1", "/versions/1/1.html", "Première version"],
 ];
 return <main style={{maxWidth:850,margin:"auto",padding:"48px 20px",fontFamily:"system-ui"}}>
 <h1>SoundTransfer</h1><p>Transfert de données par le son et outils associés.</p>
 <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:16,marginTop:32}}>
 {links.map(([name,url,description])=><a key={url} href={url} style={{padding:20,border:"1px solid #8886",borderRadius:12,color:"inherit",textDecoration:"none"}}><h2 style={{fontSize:20}}>{name} ↗</h2><p>{description}</p></a>)}
 </div></main>;
}
